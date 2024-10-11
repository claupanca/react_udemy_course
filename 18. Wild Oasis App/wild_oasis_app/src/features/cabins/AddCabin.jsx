// import { useState } from "react";

import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  return (
    <Modal>
      <Modal.Opens opensWindowName="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Opens>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CreateCabinForm />
      </Modal.Window> */}
    </Modal>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <Row>
//       <Button onClick={() => setIsOpenModal((prevState) => !prevState)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onCloseClick={() => setIsOpenModal((prevState) => !prevState)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((prevState) => !prevState)}
//           />
//         </Modal>
//       )}
//     </Row>
//   );
// }
