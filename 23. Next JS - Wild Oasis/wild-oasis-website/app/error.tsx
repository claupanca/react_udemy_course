"use client";

export default function Error({ error, reset }) {
  console.log("error is", error.message);

  return (
    <>
      <h1>Something went wrong ... </h1>
      <h2>{error.message}</h2>
      <button onClick={() => reset()} className="bg-primary-700 p-4">
        Try Again ...
      </button>
    </>
  );
}
