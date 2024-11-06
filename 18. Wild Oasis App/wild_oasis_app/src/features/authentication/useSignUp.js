import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: userSignUp, isPending } = useMutation({
    mutationFn: ({ email, password, fullName }) => {
      signUp({ email, password, fullName });
    },
    onSuccess: () => {
      toast.success(
        "User Created Successfully. Please verify the new account with the email address"
      );
    },
  });

  return { userSignUp, isPending };
}
