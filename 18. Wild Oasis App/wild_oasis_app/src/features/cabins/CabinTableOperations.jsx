import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        fieldName={"discount"}
        options={[
          { label: "All", value: "all" },
          { label: "No Discount", value: "no-discount" },
          { label: "With Discount", value: "yes-discount" },
        ]}
      />
      <SortBy options={["max-capacity", "price", "discount"]} />
    </TableOperations>
  );
}

export default CabinTableOperations;
