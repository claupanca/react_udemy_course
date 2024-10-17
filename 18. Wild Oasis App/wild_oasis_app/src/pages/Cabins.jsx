// import CabinTable from "../features/cabins/CabinTable-Original";
import CabinTable from "../features/cabins/CabinTable-Compound";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        {/* <p>Filter / Sort </p> */}
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
      </Row>

      {/* Initial Form as separate component */}
      {/* <Row>
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm cancelButton={setShowForm} />}
      </Row> */}

      {/* Form as MODAL  and separate Component*/}
      <AddCabin />
    </>
  );
}

export default Cabins;
