import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: userSignUp, isPending } = useMutation({
    mutationFn: ({ email, password }) => {
      signUp({ email, password });
    },
    onSuccess: () => {
      toast.success("User Created Successfully");
    },
  });

  return { userSignUp, isPending };
}
