import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useUpdateBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // we use this for both check-in and check-out
  //  it all depends in the data obj
  const { mutate, isLoading: updateLoading } = useMutation({
    mutationFn: ({ bookingId, data }) => {
      updateBooking(bookingId, { ...data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Booking updated");
      navigate("/");
    },
  });

  return { mutate, updateLoading };
}
