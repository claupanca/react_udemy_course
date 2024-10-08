import PropTypes from "prop-types";
import styled from "styled-components";
import { GrClone, GrEdit, GrTrash } from "react-icons/gr";

import { formatCurrency } from "../../utils/helpers";
// import { deleteCabin } from "../../services/apiCabins";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useEditAddCabin from "./useEditAddCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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

const Adults = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Children = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const { name, adults, childrens, regularPrice, discount, photo, id } = cabin;

  // We have created a CUSTOM HOOK for DELETE
  const { isDeleting, deleteCabin } = useDeleteCabin();

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
      adults,
      childrens,
      discount,
      regularPrice,
      photo,
      // photo: cabin.photo,
    });
  }

  function handleEditButton() {
    setShowForm((prevState) => !prevState);
  }

  return (
    <>
      <TableRow role="row">
        <Img src={photo} />
        <Cabin>{name}</Cabin>
        <Adults>{adults}</Adults>
        <Children>{childrens}</Children>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <Buttons>
          <button onClick={() => deleteCabin(id)} disabled={isDeleting}>
            {" "}
            <GrTrash />
          </button>
          <button onClick={() => handleEditButton()}>
            {" "}
            <GrEdit />
          </button>
          <button
            onClick={() => handleDuplicateCabin()}
            disabled={isCreateEdit}
          >
            <GrClone />
          </button>
        </Buttons>
      </TableRow>
      {showForm && (
        <CreateCabinForm cancelButton={setShowForm} cabinToEdit={cabin} />
      )}
    </>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.object.isRequired,
};
