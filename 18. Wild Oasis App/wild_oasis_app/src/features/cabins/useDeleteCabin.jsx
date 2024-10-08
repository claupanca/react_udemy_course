import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  // get the queryClient
  const queryClient = useQueryClient();

  // delete handler
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      // alert("Delete successfull");
      // we use react-hot-toast to display nice notitifaction
      toast.success("Delete successfull");
    },
    onError: (error) => toast.error(error.message, { duration: 2000 }),
  });

  return { isDeleting, deleteCabin };
}
