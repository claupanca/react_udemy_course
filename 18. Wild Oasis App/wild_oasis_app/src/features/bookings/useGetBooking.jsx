import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export default function useGetBooking(id) {
  const {
    isLoading,
    isError,
    error,
    data: booking,
  } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBooking(id),
  });

  return { isLoading, isError, error, booking };
}
