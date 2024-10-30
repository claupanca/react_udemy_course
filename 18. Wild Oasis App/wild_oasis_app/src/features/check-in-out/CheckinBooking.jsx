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
import { getBookings } from "../../services/apiBookings";
import Checkbox from "../../ui/Checkbox";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [bookingPaid, setBookingPaid] = useState(false);

  const moveBack = useMoveBack();

  const urlState = useParams();

  const { isLoading, isError, error, booking } = useGetBooking(urlState.id);

  // we use this to check if it's paid.
  // If it's already paid, se set the state to PAID
  useEffect(() => {
    setBookingPaid(booking?.isPaid || false);
  }, [booking?.isPaid]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    throw new Error(error.message);
  }

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
  } = booking;

  function handleCheckin() {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          onChange={() => setBookingPaid((prevState) => !prevState)}
          // checked={bookingPaid}
          id="confirm"
          checked={bookingPaid}
          disabled={bookingPaid}
        >
          I confirm the booking is PAID
        </Checkbox>
      </Box>

      <ButtonGroup>
        {bookingPaid && (
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
