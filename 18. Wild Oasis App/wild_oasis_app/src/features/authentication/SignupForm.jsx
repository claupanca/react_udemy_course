import { useForm } from "react-hook-form";
import useSignUp from "./useSignUp";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    // we use this to check for errors when the field looses blur
    mode: "onBlur",
  });

  const { userSignUp, isPending } = useSignUp();

  const onSubmit = (values) => {
    console.log("submit");
    console.log("values", values);
    userSignUp({ email: values.email, password: values.password });
  };

  function handleReset() {
    // we use this to also clear the errors
    reset({}, { clearErrors: true });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "Required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={""}>
        <Input
          type="password"
          id="password"
          {...register("password", { required: "Required" })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            validate: (value, formValues) =>
              // console.log("value", value, "formValue", formValues),
              value === formValues.password || "Passwords don't match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        {/* <Button variation="secondary" type="reset"> */}
        <Button type="reset" variation="secondary" onClick={handleReset}>
          Cancel
        </Button>
        <Button>{!isPending ? `Create new user` : <SpinnerMini />}</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
