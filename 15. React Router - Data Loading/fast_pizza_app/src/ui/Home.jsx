import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { userLocation } from "../features/user/userSlice";

function Home() {
  const userName = useSelector((store) => store.user.user);

  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl font-semibold text-green-800 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-red-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName == "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue ordering, {userName}
        </Button>
      )}
      {/*<div></div>
      <Link to="/order/new">Add new Order</Link> */}
    </div>
  );
}

export default Home;
