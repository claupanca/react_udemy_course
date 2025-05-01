import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList() {
  const cabins = await getCabins();
  console.log("cabin list", cabins);

  if (!cabins.length) return null;

  //   const testing = new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve("Resolved adfter ");
  //     }, 5000)
  //   );

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinList;
