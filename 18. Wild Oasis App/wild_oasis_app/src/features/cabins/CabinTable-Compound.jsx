// import styled from "styled-components";

// import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../../services/apiCabins";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useGetCabins from "./useGetCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
  // react Query to fetch data from supabase
  // const {
  //   isPending,
  //   isError,
  //   // we rename the data to cabins
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ["cabins"],
  //   // pass out api function from services, that will fetch the data
  //   queryFn: getCabins,
  // });

  // we use the useSearchParams to get the URL STATE
  const [urlState, setUrlState] = useSearchParams();

  const filterValue = urlState.get("discount") || "all";
  const sortBy =
    urlState.get("sortBy") === "price"
      ? "regularPrice"
      : urlState.get("sortBy") === "max-capacity"
      ? "maxCapacity"
      : urlState.get("sortBy");
  const orderAs = urlState.get("order");

  // we use a custom hook to get the data
  const { isPending, isError, cabins, error } = useGetCabins();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error ... {error.message}</span>;
  }

  // filter the data according to the URL Filter state
  let filteredCabins = cabins.filter((item) => {
    switch (filterValue) {
      case "all":
        return item;
      case "no-discount":
        return item.discount === 0;
      case "yes-discount":
        return item.discount > 0;
    }
  });

  // sort the filtered data according to the URL Sort and order values
  function sortCabins(a, b) {
    if (orderAs === "asc") {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) return 1;
    }
    if (orderAs === "desc") {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) return 1;
    }
  }

  // sorting happens in place, no copy is made
  filteredCabins.sort(sortCabins);

  // console.log("data", filteredData);

  return (
    <Table columnsa="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div>Img</div>
        <div>Cabin</div>
        <div>Max Cap</div>
        <div>Price</div>
        <div>Discount</div>
        <div>_</div>
      </Table.Header>

      {/* we wrap all rows in the MENUS context to track which menu is open. Only 1 at a time */}
      <Menus>
        {filteredCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Menus>
    </Table>
  );
}

export default CabinTable;
