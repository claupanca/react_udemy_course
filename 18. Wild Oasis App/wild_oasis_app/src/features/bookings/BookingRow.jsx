import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import {
  GrCheckmark,
  GrView,
  GrUserAdmin,
  GrFormTrash,
  GrTrash,
} from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import useUpdateBooking from "../check-in-out/useUpdateBooking";
import useDeleteBooking from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: fullName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { mutate, updateLoading } = useUpdateBooking();

  const { mutate: deleteBooking, isLoading } = useDeleteBooking();

  const navigate = useNavigate();

  function handleCheckOut() {
    mutate({ bookingId, data: { status: "checked-out" } });
  }

  function handleDeleteBooking() {
    deleteBooking(bookingId);
  }

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{fullName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Menus.Menu>
        <Menus.Toggle id={bookingId} />

        <Menus.List id={bookingId}>
          {/* on click, we want to NAVIGATE to the booking page */}
          {/* booking details page */}
          <Menus.Button
            onClick={() => navigate(`/bookings/${bookingId}`)}
            icon={<GrView />}
          >
            Booking Details
          </Menus.Button>

          {/* Checkin in Option  */}
          {status == "unconfirmed" && (
            <Menus.Button
              onClick={() => navigate(`/checkin/${bookingId}`)}
              icon={<GrCheckmark />}
            >
              Check-In
            </Menus.Button>
          )}

          {/* checkout option */}
          {status === "checked-in" && (
            <Menus.Button onClick={handleCheckOut} icon={<GrUserAdmin />}>
              Check-out
            </Menus.Button>
          )}

          {/* delete option */}
          <Menus.Button onClick={handleDeleteBooking} icon={<GrTrash />}>
            Delete Booking
          </Menus.Button>

          {/* <Menus.Button>456</Menus.Button>
          <Menus.Button>789</Menus.Button> */}
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default BookingRow;
