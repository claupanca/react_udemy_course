import Pizza from "./Pizza";

function Menu({ pizzas }) {
  // const pizzas = props.pizzas;
  console.log("pizzas from menu", pizzas);

  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      <p>Pizza just like in Italy</p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizzaDetails={pizza} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
