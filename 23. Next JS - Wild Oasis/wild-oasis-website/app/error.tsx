"use client";

interface ErrorProps {
  error: Error | null; // Assuming `error` is of type `Error`, or `null` when no error.
  reset: () => void; // `reset` is a function that takes no arguments and returns nothing.
}

const Errorr: React.FC<ErrorProps> = ({ error, reset }) => {
  console.log("error is", error?.message);

  return (
    <>
      <h1>Something went wrong ... </h1>
      <h2>{error?.message}</h2>
      <button onClick={() => reset()} className="bg-primary-700 p-4">
        Try Again ...
      </button>
    </>
  );
};

export default Errorr;
