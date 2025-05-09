import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  noStore();

  console.log("filter from Cabinlist", filter);

  const cabins = await getCabins();
  // console.log("cabin list", cabins);

  const capacityFilter = { small: 3, medium: 6, large: 10, all: 100 };
  let displayedCabins = cabins.filter(
    (cabin) => cabin.maxCapacity <= capacityFilter[filter]
  );
  console.log("displayed", displayedCabins);

  // if (!cabins.length) return null;
  if (!displayedCabins.length) return null;

  //   const testing = new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve("Resolved adfter ");
  //     }, 5000)
  //   );

  return (
    // <>
    //   {cabins.length > 0 && (
    //     <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
    //       {cabins.map((cabin) => (
    //         <CabinCard cabin={cabin} key={cabin.id} />
    //       ))}
    //     </div>
    //   )}
    // </>
    <>
      {displayedCabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinList;
