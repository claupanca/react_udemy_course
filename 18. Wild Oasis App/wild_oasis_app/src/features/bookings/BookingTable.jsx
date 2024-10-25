import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

import Spinner from "../../ui/Spinner";
import useGetBookings from "./useGetBookings";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { isPending, error, bookings, isError } = useGetBookings();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <span>Error ... {error.message}</span>;
  }

  // console.log("bookings", bookings);

  return (
    <Menus>
      <Table columnsa="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body>
          {bookings.data.map((booking) => (
            <BookingRow booking={booking} key={booking.id} />
          ))}
        </Table.Body>

        <Table.Footer>
          <Pagination totalResults={bookings.count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
