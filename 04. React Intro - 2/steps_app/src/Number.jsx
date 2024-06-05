function Number({ number, isActive }) {
  // console.log("number active", number, isActive);

  return <div className={isActive ? "active" : ""}>{number}</div>;
}

export default Number;
