import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useFilterBookingsByLast from "./useFilterBookings";
import Spinner from "../../ui/Spinner";
import useFilterStays from "./useFilterStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  // const [urlState] = useSearchParams();
  // const [filter, setFilter] = useState();

  const { filterBookingsbyLast, isPending: bookingsPending } =
    useFilterBookingsByLast();
  const { confirmedStays, isPending: staysPending } = useFilterStays();

  // console.log("bookings", filterBookingsbyLast);
  // console.log("stays", confirmedStays);

  // console.log("filter", filter);

  if (bookingsPending || staysPending) {
    return <Spinner />;
  }

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={filterBookingsbyLast}
        confirmedStays={confirmedStays}
      ></Stats>
      <div>Todays activity</div>
      <div>Chart for Stay durations</div>
      <SalesChart />
    </StyledDashboardLayout>
  );
}
