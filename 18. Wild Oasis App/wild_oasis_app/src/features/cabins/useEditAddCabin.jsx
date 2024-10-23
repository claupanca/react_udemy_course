import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditAddCabin(isEditSession, id) {
  const queryClient = useQueryClient();

  const { isLoading: isCreateEdit, mutate: createEdit } = useMutation({
    // const { isLoading: isCreate } = useMutation({
    mutationFn: (data) => addEditCabin(data, id),
    // mutationFn: (data) => console.log(data),
    onSuccess: () => {
      // console.log(data);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success(`${isEditSession ? "Cabin Updated" : "Cabin Created"}`);
      // manually reset the form using the form hook
      // reset();
    },
    onError: (error) => {
      console.log("error", error);
      toast.error(error.message);
    },
  });

  return { isCreateEdit, createEdit };
}
