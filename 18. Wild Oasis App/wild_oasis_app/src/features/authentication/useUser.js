import { useMutation, useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

// we are using this to STORE the user data from DB
export default function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  // console.log("data", data);
  // if the user is authenticated, we compute the data here directly
  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated" ? true : false,
  };
}
