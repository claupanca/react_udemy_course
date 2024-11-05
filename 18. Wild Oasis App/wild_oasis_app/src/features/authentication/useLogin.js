import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: userLogin, isPending: loginPending } = useMutation({
    mutationFn: login,
    onSuccess: (userData) => {
      // WE manually set the 'user' cache. IF NOT, the useUser function will fetch the data LATE and the LOGIN screen will remain on screen
      queryClient.setQueryData(["user"], userData.user);
      // we can log here the user data since it's received on the onSuccess
      // console.log("userData", userData);
      // if success, we navigate to the dashboard
      // console.log("navigation");
      navigate("/");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { userLogin, loginPending };
}
