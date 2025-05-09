// import CabinCard from "@/app/_components/CabinCard";
// import { getCabins } from "../_lib/data-service";

import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import CabinsFilter from "@/app/_components/CabinsFilter";

export const metadata = {
  title: "Cabins",
};

// to revalidate (refetch data)
export const revalidate = 3600;

export default function Page({
  searchParams,
}: {
  // searchParams switches the page to DYNAMIC RENDERING
  searchParams: { [key: string]: string };
}) {
  // CHANGE
  // const cabins = [];
  // moved to the Cabin List to Suspense
  // const cabins = await getCabins();

  // console.log("cabins", cabins);
  console.log("search params", searchParams);
  // small - medium - large - all
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        {`Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.`}
      </p>

      <div className="flex justify-end mb-8">
        <CabinsFilter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>

      {/* we moved the data fething in the CabinList component */}
      {/* {cabins.length > 0 && ( 
        // <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
        //   {cabins.map((cabin) => (
        //     <CabinCard cabin={cabin} key={cabin.id} />
        //   ))}
        // </div>
      )} */}
    </div>
  );
}
