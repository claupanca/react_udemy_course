import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useUpdateBooking(id) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (id) => {
      updateBooking(id, { status: "checked-in", isPaid: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("Booking updated");
      navigate("/");
    },
  });

  return mutation;
}
