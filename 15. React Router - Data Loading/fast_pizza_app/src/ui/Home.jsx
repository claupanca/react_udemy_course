import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <Link to="/menu">Menu</Link>
      <div></div>
      <Link to="/order/new">Add new Order</Link>
    </div>
  );
}

export default Home;
