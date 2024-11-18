import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useFilterStays() {
  const [urlState] = useSearchParams();

  const filterDate = new Date();
  filterDate.setDate(filterDate.getDate() - Number(urlState.get("last")));

  const { data: filterStaysByLast, isPending } = useQuery({
    queryFn: () => getStaysAfterDate(filterDate.toDateString()),
    queryKey: ["staysLast", `last-${urlState.get("last")}`],
  });

  // we compute only the confirmed stays (checked-in or checked-out. NOT UNCONFIRMED)
  const confirmedStays = filterStaysByLast?.filter(
    (item) => item.status === "checked-in" || item.status === "checked-out"
  );

  // console.log("confirmed", confirmedStays);

  return { confirmedStays, isPending };
}
