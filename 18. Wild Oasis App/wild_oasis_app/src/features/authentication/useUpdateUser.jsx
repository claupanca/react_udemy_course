import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useUpdateUser() {
  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      // console.log("success");
      toast.success("User Updated Successfully");
    },
  });

  return { updateUser, isPending };
}
