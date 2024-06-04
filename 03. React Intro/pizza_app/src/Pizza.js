import pizzaData from "./data";
// import { useState } from "react";

function Pizza(props) {
  const pizzaDetails = props.pizzaDetails;

  console.log(pizzaDetails);

  return (
    <div className={`pizza ${pizzaDetails.soldOut ? "sold-out" : ""}`}>
      <img
        src={require(`./assets/${pizzaDetails.photoName}`)}
        alt="Spinaci pizza"
      />
      <div>
        <h3>{pizzaDetails.name}</h3>
        <p>{pizzaDetails.ingredients}</p>
        <span>{pizzaDetails.price}</span>
      </div>
    </div>
  );
}

export default Pizza;
