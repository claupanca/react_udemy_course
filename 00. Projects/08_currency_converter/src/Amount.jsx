import { useState } from "react";

export default function Amount({ amount, onChange }) {
  function handleAmountChange(e) {
    const value = e.target.value;
    if (!Number(value)) {
      alert("Please enter only numbers");
      return;
    }
    onChange(value);
  }

  return (
    <input
      value={amount}
      onChange={handleAmountChange}
      placeholder="Enter the amount..."
    ></input>
  );
}
