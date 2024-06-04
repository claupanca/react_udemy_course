import Pizza from "./Pizza";

function Menu(props) {
  const pizzas = props.pizzas;
  console.log("pizzas from menu", pizzas);

  return (
    <main className="menu">
      <h2>Our Pizzas</h2>
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizzaDetails={pizza} />
        ))}
      </div>
    </main>
  );
}

export default Menu;
