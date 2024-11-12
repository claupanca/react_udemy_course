import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      // console.log("success");
      toast.success("User Updated Successfully");
      queryClient.setQueryData(["user"], user);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  return { updateUser, isPending };
}
