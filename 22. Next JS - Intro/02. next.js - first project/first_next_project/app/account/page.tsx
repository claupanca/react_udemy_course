import Counter from "../components/Counter";
import Navigation from "../components/navigation";

const Page: React.FC = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <h1>Account page</h1>
      <Counter users={"some data"} />
    </div>
  );
};

export default Page;
