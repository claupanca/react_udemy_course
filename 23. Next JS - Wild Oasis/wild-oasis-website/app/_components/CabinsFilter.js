"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CabinsFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilterChange(filter) {
    console.log("filter change", filter.target.value);

    const newParams = new URLSearchParams(searchParams);
    newParams.set("capacity", filter.target.value);
    console.log("newParams", newParams);

    replace(`${pathname}?${newParams.toString()}`);
  }

  //   to mark the filter active, we get the searchParams that are in the URLS
  console.log("searchParams", searchParams.get("capacity"));

  return (
    <div className="border border-primary-800 flex items-center">
      <div>Please select capacity: </div>
      <select
        defaultValue={"all"}
        onChange={(e) => handleFilterChange(e)}
        className="px-5 py-2 "
      >
        <option value="small">3 Guests</option>
        <option value="medium">4 to 8 Guests</option>
        <option value="large">8+ Guests</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}
