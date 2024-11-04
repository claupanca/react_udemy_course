import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import useGetBooking from "./useGetBooking";
import Spinner from "../../ui/Spinner";
import useUpdateBooking from "../check-in-out/useUpdateBooking";
import useDeleteBooking from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  /* justify-items: center; */
`;

function BookingDetail() {
  // const booking = {};
  // const status = "checked-in";

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  // fetch the data usint the URL State from the useParams()
  const urlState = useParams();
  // console.log("urlState", urlState);
  const bookingId = urlState.id;

  const { isLoading, isError, error, booking } = useGetBooking(bookingId);
  // console.log("booking", booking);
  const status = booking?.status;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { mutate: deleteBooking, isLoading: deleteLoading } =
    useDeleteBooking();

  const { mutate, updateLoading } = useUpdateBooking();

  function handleCheckOut() {
    mutate({ bookingId, data: { status: "checked-out" } });
  }

  function handleDeleteBooking() {
    deleteBooking(bookingId);
  }

  if (isLoading || deleteLoading) {
    return <Spinner />;
  }

  if (isError) {
    throw new Error(error.message);
  }

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "checked-in" && (
          <Button variation="primary" onClick={handleCheckOut}>
            Check Out
          </Button>
        )}

        {status == "unconfirmed" && (
          <Button
            variation="primary"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check In
          </Button>
        )}

        {status === "checked-out" && (
          <Button variation="primary" onClick={handleDeleteBooking}>
            Delete
          </Button>
        )}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
