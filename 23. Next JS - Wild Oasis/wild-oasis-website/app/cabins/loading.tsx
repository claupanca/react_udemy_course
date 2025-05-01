import Spinner from "@/app/_components/Spinner";

export default function Loader() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200">Loading Cabins Data...</p>
    </div>
  );
}
