// import { useForm } from "react-hook-form";
import useGetSettings from "./useGetSettings";
import useUpdateSetting from "./useUpdateSetting";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  // fetch settings data with custom hook
  const {
    isPending,
    isError,
    settings: {
      breakfastPrice,
      minBookingLength,
      maxBookingLength,
      maxGuestPerBook,
    } = {},
    error,
  } = useGetSettings();

  //use the update settings custom hook
  const { updateSetting, isUpdating } = useUpdateSetting();

  //handle update
  function handleUpdate(e) {
    if (!e.target.value) return;

    console.log("setting is updated", { [e.target.id]: e.target.value });
    updateSetting({ [e.target.id]: e.target.value });
  }

  // set default values for the Form ==> NOT WORKING since settings might be undefined at beginning
  // const { register } = useForm({
  //   defaultValues: {
  //     breakfast: breakfastPrice,
  //     minNights: minBookingLength,
  //     maxNights: maxBookingLength,
  //     maxGuest: maxGuestPerBook,
  //   },
  // });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    throw new Error(error.message);
  }
  console.log("isupdating", isUpdating);

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        {/* <Input type="number" id="min-nights" {...register("minNights")} /> */}
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e)}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        {/* <Input type="number" id="max-nights" {...register("maxNights")} /> */}
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        {/* <Input type="number" id="max-guests" {...register("maxGuest")} /> */}
        <Input
          type="number"
          id="maxGuestPerBook"
          defaultValue={maxGuestPerBook}
          onBlur={(e) => handleUpdate(e)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        {/* <Input type="number" id="breakfast-price" {...register("breakfast")} /> */}
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e)}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
