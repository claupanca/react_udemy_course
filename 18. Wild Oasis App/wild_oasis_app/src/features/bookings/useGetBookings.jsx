import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useGetBookings() {
  const [urlState, setUrlState] = useSearchParams();
  // we search the status params that we have set in the BookingTableOperations
  // console.log(urlState.get("status"));
  const filterValue = urlState.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { filterBy: "status", filterValue: filterValue };

  const sortBy =
    urlState.get("sortBy") === "start-date"
      ? "startDate"
      : urlState.get("sortBy") === "amount"
      ? "totalPrice"
      : null;
  const order = urlState.get("order") === "asc" ? true : false;
  const sort = !sortBy && !order ? null : { sortBy: sortBy, order: order };

  // console.log("sortby", sortBy);
  // console.log("order", order);
  // console.log("sort", sort);

  const {
    isPending,
    error,
    data: bookings,
    isError,
  } = useQuery({
    queryKey: ["bookings", filter, sort],
    // queryFn: getBookings,
    // we transform this into ()=> getBookings() so we can use the status
    queryFn: () => getBookings({ filter, sort }),
  });

  return { isPending, error, bookings, isError };
}
