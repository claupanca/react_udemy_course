import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateCabinForm({ cancelButton }) {
  // react hook form setup
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  // const onSubmit: (data) =>console.log(data)

  const { errors } = formState;
  // console.log("errors", errors);

  const queryClient = useQueryClient();

  //update handler or new cabin
  const { isLoading: isCreate, mutate } = useMutation({
    mutationFn: (data) => addCabin(data),
    // mutationFn: (data) => console.log(data),
    onSuccess: () => {
      // console.log(data);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("Cabin Created");
      // manually reset the form using the form hook
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError() {
    // console.log("error", error);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
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

      <FormRow label="Image" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" />
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
        onClick={() => {
          cancelButton((prevState) => !prevState);
        }}
      >
        Cancel
      </Button>
      <Button type="submit" disabled={isCreate}>
        Add cabin
      </Button>
      {/* </FormRow> */}
    </Form>
  );
}

CreateCabinForm.propTypes = {
  cancelButton: PropTypes.func,
};

export default CreateCabinForm;
