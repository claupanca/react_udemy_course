import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl font-semibold text-green-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-red-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
      {/* <Link to="/menu">Menu</Link>
      <div></div>
      <Link to="/order/new">Add new Order</Link> */}
    </div>
  );
}

export default Home;
