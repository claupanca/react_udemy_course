import {
  GrCatalog,
  GrCheckboxSelected,
  GrCurrency,
  GrUser,
} from "react-icons/gr";
import Stat from "../dashboard/Stat";

export default function Stats({ bookings, confirmedStays }) {
  // 1. Number of Bookings
  const numBookings = bookings.length;

  // 2. Number of stys
  const numStays = confirmedStays.length;

  // 3.Occupancy Rate
  const numGuests = confirmedStays.reduce(
    (total, item) => (total = total + item.numGuests),
    0
  );

  // 4. Sales
  const sales = bookings.reduce(
    (total, item) => (total = total + item.totalPrice),
    0
  );

  return (
    <>
      <Stat
        icon={<GrCatalog />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<GrCheckboxSelected />}
        title="Check Ins"
        value={numStays}
        color="indigo"
      />
      <Stat icon={<GrUser />} title="Guests" value={numGuests} color="yellow" />
      <Stat
        icon={<GrCurrency />}
        title="Sales"
        value={`$${sales}`}
        color="green"
      />
    </>
  );
}
