import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Menu from "./features/menu/Menu";
// import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    // we define params using :orderId
    path: "/order/:orderId",
    element: <Order />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
