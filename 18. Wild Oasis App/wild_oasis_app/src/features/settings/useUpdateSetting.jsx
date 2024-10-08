import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success("Setting Updated");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: () => {
      toast.error("Setting cannot be updated");
    },
  });

  return { updateSetting, isUpdating };
}
