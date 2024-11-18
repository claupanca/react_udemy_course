import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useFilterBookingsByLast() {
  const [urlState] = useSearchParams();

  const filterDate = new Date();
  filterDate.setDate(filterDate.getDate() - Number(urlState.get("last")));

  const { data: filterBookingsbyLast, isPending } = useQuery({
    queryFn: () => getBookingsAfterDate(filterDate.toDateString()),
    queryKey: ["bookingsLast", `last-${urlState.get("last")}`],
  });

  return { filterBookingsbyLast, isPending };
}
