function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log("isOpen", isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently Open");
  // } else {
  //   alert("Sorry we are closed");
  // }

  // // hour < 21 ? alert("Restaurant is Open") : alert("Restaurant is Closed");

  return (
    <footer className="footer ">
      {isOpen && (
        <div className="order">
          <p>{new Date().toLocaleTimeString("EN")} We are currently Open</p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </footer>
  );
}

export default Footer;
