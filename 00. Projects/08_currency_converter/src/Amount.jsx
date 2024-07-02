import { useState } from "react";

export default function Amount({ amount, onChange }) {
  function handleAmountChange(e) {
    // const value = e.target.value;
    // if (value === "") {
    //   onChange("0");
    // }
    // if (!Number(value)) {
    //   alert("Please enter only numbers");
    //   return;
    // }
    onChange(Number(e.target.value));
  }

  return (
    <input
      value={amount}
      onChange={handleAmountChange}
      placeholder="Enter the amount..."
      type="number"
    ></input>
  );
}
