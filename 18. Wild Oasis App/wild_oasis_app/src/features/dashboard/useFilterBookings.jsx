import { useMutation } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";

export default function useFilterBookingsByLast() {
  const { mutate: filterBookingsByLast, isPending } = useMutation({
    mutationFn: getBookingsAfterDate,
    onSuccess: (data) => {
      console.log("date", data);
    },
  });

  return { filterBookingsByLast, isPending };
}
