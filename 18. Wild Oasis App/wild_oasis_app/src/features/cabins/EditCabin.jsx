import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

import { GrEdit } from "react-icons/gr";
import PropTypes from "prop-types";

export default function EditCabin({ cabin }) {
  // console.log("edit", cabin);

  return (
    <Modal>
      <Modal.Opens opensWindowName="edit-form">
        <Button variation="secondary" size="small">
          <GrEdit />
        </Button>
      </Modal.Opens>

      <Modal.Window name="edit-form">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>
    </Modal>
  );
}

EditCabin.propTypes = {
  cabin: PropTypes.object,
};
