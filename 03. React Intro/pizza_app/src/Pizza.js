import pizzaData from "./data";
// import { useState } from "react";

function Pizza() {
  // const [pizzas, setPizzas] = useState(pizzaData);

  // console.log(pizzas);

  return (
    <div>
      <h3>Pizza Spinacchi</h3>
      <p>Tomato and mozarella</p>
      <img src={require("./assets/pizzas/spinaci.jpg")} alt="Spinaci pizza" />
      <ul>
        {pizzaData.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
