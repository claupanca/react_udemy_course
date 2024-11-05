import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: userLogout, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // console.log("logout");
      queryClient.removeQueries();
      navigate("/login");
    },
  });

  return { userLogout, isPending };
}
