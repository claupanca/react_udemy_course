import { getCabins } from "../services/apiCabins";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

console.log(await getCabins());

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
