import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: userLogin, isPending: loginPending } = useMutation({
    mutationFn: login,
    onSuccess: (userData) => {
      // we can log here the user data since it's received on the onSuccess
      console.log("userData", userData);
      // if success, we navigate to the dashboard
      navigate("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { userLogin, loginPending };
}