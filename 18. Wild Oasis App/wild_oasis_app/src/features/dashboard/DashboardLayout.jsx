import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useFilterBookingsByLast from "./useFilterBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const [urlState] = useSearchParams();
  // const [filter, setFilter] = useState();

  useEffect(() => {
    // setFilter(Number(urlState.get("last")));
    const date = new Date();
    date.setDate(date.getDate() - Number(urlState.get("last")));

    filterBookingsByLast(date.toDateString());
  }, [urlState]);

  // console.log("date", date);

  // console.log("filter", filter);

  const { filterBookingsByLast, isPending } = useFilterBookingsByLast();

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Todays activity</div>
      <div>Chart for Stay durations</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}
