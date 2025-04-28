import React from "react";
import Navigation from "../components/navigation";

// export default function Page() {
const Page: React.FC = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const dummyData = await res.json();
  console.log("dummyData", dummyData);

  return (
    <div>
      {/* <Navigation /> */}
      <h1>Cabins page</h1>

      {dummyData.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </div>
  );
};

export default Page;
