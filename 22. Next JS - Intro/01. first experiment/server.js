const { createServer } = require("http");
const { parse } = require("path");
const { readFileSync } = require("fs");
const { renderToString } = require("react-dom/server");
const React = require("react");

// const htmlFile = readFileSync(`${__dirname}/index.html`, "utf-8");
const clientJS = readFileSync(`${__dirname}/client.js`, "utf-8");

const pizzas = [
  {
    name: "Focaccia",
    price: 6,
  },
  {
    name: "Pizza Margherita",
    price: 10,
  },
  {
    name: "Pizza Spinaci",
    price: 12,
  },
  {
    name: "Pizza Funghi",
    price: 12,
  },
  {
    name: "Pizza Prosciutto",
    price: 15,
  },
];

function Home() {
  return (
    <div>
      <h1>🍕 Fast React Pizza Co.</h1>
      <p>This page has been rendered with React on the server 🤯</p>

      <h2>Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <span>{count}</span>
    </div>
  );
}

function MenuItem({ pizza }) {
  return (
    <li>
      <h4>
        {pizza.name} (${pizza.price})
      </h4>
      <Counter />
    </li>
  );
}

const server = createServer((req, res) => {
  const pathname = parse(req.url, true).name;

  console.log("pathname", pathname);

  const renderHTMLfromJSx = renderToString(<Home />);
  const html = readFileSync(`${__dirname}/index.html`, "utf-8").replace(
    "%%CONTENT",
    renderHTMLfromJSx
  );

  if (pathname === "") {
    // res.end("Hello world, Homepage");
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end(htmlFile);
    // res.end(renderHTMLfromJSx);
    res.end(html);
  } else if (pathname === "test") {
    res.end("Test page");
  } else if (pathname === "client") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(clientJS);
  } else res.end("404. Wrong path");
});

server.listen(5000, () => {
  console.log("Server listening on 5000...");
});
