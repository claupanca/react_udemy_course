import PropTypes from "prop-types";
import styled from "styled-components";
import { GrClone, GrTrash, GrEdit } from "react-icons/gr";

import { formatCurrency } from "../../utils/helpers";
// import { deleteCabin } from "../../services/apiCabins";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
// import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useEditAddCabin from "./useEditAddCabin";
// import EditCabin from "./EditCabin";
// import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const MaxCapacity = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

// const Buttons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

export default function CabinRow({ cabin }) {
  // const [showForm, setShowForm] = useState(false);

  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;

  // We have created a CUSTOM HOOK for DELETE
  const { isDeleting, deleteCabin } = useDeleteCabin();

  //

  // // get the queryClient
  // const queryClient = useQueryClient();

  // // delete handler
  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: (id) => deleteCabin(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     // alert("Delete successfull");
  //     // we use react-hot-toast to display nice notitifaction
  //     toast.success("Delete successfull");
  //   },
  //   onError: (error) => toast.error(error.message, { duration: 2000 }),
  // });

  // handle Duplicate a Cabin
  const { isCreateEdit, createEdit } = useEditAddCabin();

  function handleDuplicateCabin() {
    console.log("Duplicate Cabin");
    createEdit({
      name: `Copy of ${cabin.name}`,
      maxCapacity,
      discount,
      regularPrice,
      image,
      // photo: cabin.photo,
    });
  }

  // function handleEditButton() {
  //   setShowForm((prevState) => !prevState);
  // }

  return (
    <Table.Row role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <MaxCapacity>{maxCapacity}</MaxCapacity>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      {/*  we have replaced these 3 buttons with the Floating MENU from UI/Menu */}
      {/* <Buttons> */}
      {/* It's all wrapped into the Modal because the buttons will open a modal */}
      <Modal>
        {/* we have combined the MODAL with the MENUS */}
        {/* Here we have the Menus.Menu - the actual MENU that is open or closed */}
        <Menus.Menu>
          <Menus.Toggle id={id} />

          <Menus.List id={id}>
            <Modal.Opens opensWindowName="edit-form">
              <Menus.Button icon={<GrEdit />}>
                {/* <EditCabin cabin={cabin} /> Edit */}Edit
              </Menus.Button>
            </Modal.Opens>

            <Menus.Button
              onClick={handleDuplicateCabin}
              icon={<GrClone />}
              disabled={isCreateEdit}
            >
              Duplicate
            </Menus.Button>

            {/* Here we use both Modal.Opens and Menus.Button to open the Delete Modal */}
            <Modal.Opens opensWindowName="delete-form">
              <Menus.Button onClick={deleteCabin} icon={<GrTrash />}>
                Delete
              </Menus.Button>
            </Modal.Opens>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete-form">
          <ConfirmDelete
            resourceName={name}
            onConfirm={() => deleteCabin(id)}
            disabled={isDeleting}
          />
        </Modal.Window>

        <Modal.Window name="edit-form">
          <CreateCabinForm
            // cancelButton={setShowForm}
            cabinToEdit={cabin}
          ></CreateCabinForm>
        </Modal.Window>
      </Modal>

      {/* We have replaced this button with a Modal Button */}
      {/* <Button
            onClick={() => deleteCabin(id)}
            disabled={isDeleting}
            variation="secondary"
            size="small"
          >
            <GrTrash />
          </Button> */}
      {/* <Button onClick={() => handleEditButton()}>
            <GrEdit />
          </Button> */}

      {/* replaced the Button with COMPOUND COMPONENT and form in MODAL */}
      {/* <EditCabin cabin={cabin} /> */}

      {/* <Button
          onClick={() => handleDuplicateCabin()}
          disabled={isCreateEdit}
          variation="secondary"
          size="small"
        >
          <GrClone />
        </Button> */}
      {/* </Buttons> */}
      {/* {showForm && (
        <CreateCabinForm cancelButton={setShowForm} cabinToEdit={cabin} />
      )} */}
    </Table.Row>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.object.isRequired,
};
