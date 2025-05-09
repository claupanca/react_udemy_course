import styled from "styled-components";

// import { useQuery } from "@tanstack/react-query";
// import { getCabins } from "../../services/apiCabins";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useGetCabins from "./useGetCabins";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

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

  // we use a custom hook to get the data
  const { isPending, isError, cabins, error } = useGetCabins();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error ... {error.message}</span>;
  }

  // console.log("data", cabins);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Img</div>
        <div>Cabin</div>
        <div>Adults</div>
        <div>Children</div>
        <div>Price</div>
        <div>Discount</div>
        <div>_</div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
