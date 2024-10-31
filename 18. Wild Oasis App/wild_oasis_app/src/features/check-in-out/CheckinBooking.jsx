import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useGetBooking from "../bookings/useGetBooking";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { getBookings, updateBooking } from "../../services/apiBookings";
import Checkbox from "../../ui/Checkbox";
import useUpdateBooking from "./useUpdateBooking";
import useGetSettings from "../settings/useGetSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [bookingPaid, setBookingPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const moveBack = useMoveBack();

  const urlState = useParams();

  const { mutate, updateLoading } = useUpdateBooking();

  const { isLoading, isError, error, booking } = useGetBooking(urlState.id);

  // we use the useSEttings hook to get the breakfast price
  // const { settings, isLoading: isLoadingSettings } = useGetSettings();

  // console.log("settings", settings);

  // we use this to check if it's paid.
  // If it's already paid, se set the state to PAID
  useEffect(() => {
    setBookingPaid(booking?.isPaid || false);
  }, [booking?.isPaid]);

  // if there is already breakfast, we will check the box
  // useEffect(() => {
  //   setAddBreakfast(booking?.hasBreakfast || false);
  // }, [booking?.hasBreakfast]);

  // useEffect(() => {
  //   mutateBreakfast(bookingId, breakfast);
  // }, [breakfast]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    throw new Error(error.message);
  }

  if (updateLoading) {
    return <Spinner />;
  }

  // if (isLoadingSettings) {
  //   return <Spinner />;
  // }

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
    status,
  } = booking;

  function handleCheckin() {
    mutate({
      bookingId,
      data: { status: "checked-in", isPaid: true },
    });
    // mutation.mutate(bookingId, { status: "checked-in" });
  }

  // const optionalBreakfastPrice =
  //   settings?.breakfastPrice * numGuests * numNights;

  // function handleBreakfast() {
  //   setAddBreakfast((prevState) => !prevState);
  //   // if(addBreakfast)setBookingPaid((prevState) => !prevState);
  // }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {/* <Box>
        <Checkbox
          onChange={handleBreakfast}
          // checked={bookingPaid}
          id="confirm"
          checked={addBreakfast}
        >
          {addBreakfast
            ? "Breakfast included"
            : `Include breakfast for ${optionalBreakfastPrice} ?`}
        </Checkbox>
      </Box> */}

      <Box>
        <Checkbox
          onChange={() => setBookingPaid((prevState) => !prevState)}
          // checked={bookingPaid}
          id="confirm"
          checked={bookingPaid}
          disabled={bookingPaid}
        >
          {/* {!addBreakfast */}I confirm the booking is PAID
          {/* {/* : `I confirm the guest has PAID ${
                totalPrice + optionalBreakfastPrice */}
          {/* } (${totalPrice} + ${optionalBreakfastPrice})`} */}
        </Checkbox>
      </Box>

      <ButtonGroup>
        {bookingPaid && status === "unconfirmed" && (
          <Button onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
