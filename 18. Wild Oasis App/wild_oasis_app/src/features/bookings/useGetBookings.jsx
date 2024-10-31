import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import page_size from "../../utils/constants";

export default function useGetBookings() {
  const [urlState, setUrlState] = useSearchParams();
  // we search the status params that we have set in the BookingTableOperations
  // console.log(urlState.get("status"));
  //  filter by
  const filterValue = urlState.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { filterBy: "status", filterValue: filterValue };

  // sort by
  const sortBy =
    urlState.get("sortBy") === "start-date"
      ? "startDate"
      : urlState.get("sortBy") === "amount"
      ? "totalPrice"
      : null;
  const order = urlState.get("order") === "asc" ? true : false;
  const sort = !sortBy && !order ? null : { sortBy: sortBy, order: order };

  // Pagination
  const currentPage = !urlState.get("page") ? 1 : Number(urlState.get("page"));
  let pagination = {
    start: currentPage * page_size() - page_size(),
    end: currentPage * page_size() - 1,
  };

  // console.log("sortby", sortBy);
  // console.log("order", order);
  // console.log("sort", sort);

  const {
    isPending,
    error,
    data: bookings,
    isError,
  } = useQuery({
    queryKey: ["bookings", filter, sort, pagination],
    // queryFn: getBookings,
    // we transform this into ()=> getBookings() so we can use pass arguments
    queryFn: () => getBookings({ filter, sort, pagination }),
  });

  // PRE-FETCHING
  //  we need the queryClient
  const queryClient = useQueryClient();

  // we use the prefetchQuery function
  // queryClient.prefetchQuery({
  //   queryKey: [
  //     "bookings",
  //     filter,
  //     sort,
  //     (pagination = {
  //       start: pagination.start + page_size(),
  //       end: pagination.end + page_size(),
  //     }),
  //   ],
  //   // we need to prefetch the page + 1 data
  //   queryFn: () =>
  //     getBookings({
  //       filter,
  //       sort,
  //       pagination: {
  //         start: pagination.start + page_size(),
  //         end: pagination.end + page_size(),
  //       },
  //       // pagination,
  //     }),
  // });

  return { isPending, error, bookings, isError };
}
