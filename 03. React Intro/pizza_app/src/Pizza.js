import pizzaData from "./data";
// import { useState } from "react";

function Pizza({ pizzaDetails }) {
  // const pizzaDetails = props.pizzaDetails;

  console.log(pizzaDetails);

  return (
    <li className={`pizza ${pizzaDetails.soldOut ? "sold-out" : ""}`}>
      <img
        src={require(`./assets/${pizzaDetails.photoName}`)}
        alt="Spinaci pizza"
      />
      <div>
        <h3>{pizzaDetails.name}</h3>
        <p>{pizzaDetails.ingredients}</p>
        <span>{pizzaDetails.soldOut ? "SOLD OUT" : pizzaDetails.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
