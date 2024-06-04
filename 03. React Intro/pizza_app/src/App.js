import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

import "./index.css";
import pizzaData from "./data";
import { useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState(pizzaData);

  console.log("pizzas", pizzas);

  return (
    <div className="container">
      <Header />
      <Menu pizzas={pizzas} />
      <Footer />
    </div>
  );
}

export default App;
