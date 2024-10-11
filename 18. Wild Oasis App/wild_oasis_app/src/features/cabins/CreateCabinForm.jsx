// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
// import { addEditCabin } from "../../services/apiCabins";
import useEditAddCabin from "./useEditAddCabin";

import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import PropTypes from "prop-types";
// import toast from "react-hot-toast";
import Input from "../../ui/Input";

function CreateCabinForm({ onCloseModal, cabinToEdit = {} }) {
  // we are using these for edit a cabin that we will pass into the useForm react hook
  const {
    name,
    adults,
    childrens,
    description,
    regularPrice,
    discount,
    photo,
    id,
  } = cabinToEdit;

  const isEditSession = Boolean(id);

  // react hook form setup
  // const { register, handleSubmit, reset, getValues, formState } = useForm({
  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: {
      name: name,
      adults: adults,
      childrens: childrens,
      regularPrice: regularPrice,
      description: description,
      discount: discount,
      photo: photo,
    },
  });

  // const onSubmit: (data) =>console.log(data)

  const { errors } = formState;
  // console.log("errors", errors);

  // we are using a custom hook for the update and new cabin React Query logic
  const { isCreateEdit, createEdit } = useEditAddCabin(isEditSession, id);

  // const queryClient = useQueryClient();

  //update handler or new cabin
  // const { isLoading: isCreate, mutate } = useMutation({
  //   // const { isLoading: isCreate } = useMutation({
  //   mutationFn: (data) => addEditCabin(data, id),
  //   // mutationFn: (data) => console.log(data),
  //   onSuccess: () => {
  //     // console.log(data);
  //     queryClient.invalidateQueries({ queryKey: ["cabins"] });
  //     toast.success(`${isEditSession ? "Cabin Updated" : "Cabin Created"}`);
  //     // manually reset the form using the form hook
  //     reset();
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });

  function onSubmit(data) {
    console.log("formData", data);
    // we can also access the onSuccess function of React Query in the mutate(createEdit) function
    // createEdit({ ...data, photo: data.photo[0] }, { onSuccess: () => reset() });
    createEdit(
      { ...data, photo: data.photo[0] },
      { onSuccess: () => onCloseModal?.() }
    );
    // passing the reset() from React Form, we will reset the form here, not inside the createEdit logic
  }

  function onError() {
    // console.log("error", error);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      {/* <Form> */}

      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Please enter the name" })}
        />
      </FormRow>

      <FormRow label="Adults" error={errors?.adults?.message}>
        <Input
          type="number"
          id="adults"
          {...register("adults", {
            required: true,
            min: {
              value: 2,
              message: "There is a minimum capacity of 2",
            },
          })}
        />
      </FormRow>

      <FormRow label="Childrens" error={errors?.childrens?.message}>
        <Input
          type="number"
          id="childrens"
          {...register("childrens", { required: true })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: true })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              value <= getValues("regularPrice") ||
              "Discount should be less than regularPrice",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Image">
        <FileInput
          id="image"
          accept="image/*"
          error={errors?.image?.message}
          {...register("photo", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      {/*  we will export all the FormRow into a separate component */}
      {/* <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "Please enter the name" })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="adults">Adults</Label>
        <Input
          type="number"
          id="adults"
          {...register("adults", {
            required: true,
            min: {
              value: 2,
              message: "There is a minimum capacity of 2",
            },
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="childrens">Childrens</Label>
        <Input
          type="number"
          id="childrens"
          {...register("childrens", { required: true })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: true })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) =>
              value <= getValues("regularPrice") ||
              "Discount should be less than regularPrice",
          })}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
      <Button
        variation="secondary"
        type="reset"
        onClick={() => onCloseModal?.()}
      >
        Cancel
      </Button>
      <Button type="submit" disabled={isCreateEdit}>
        {isEditSession ? "Edit Cabin" : "Create New Cabin"}
      </Button>
      {/* </FormRow> */}
    </Form>
  );
}

CreateCabinForm.propTypes = {
  onCloseModal: PropTypes.func,
  cabinToEdit: PropTypes.object,
};

export default CreateCabinForm;
