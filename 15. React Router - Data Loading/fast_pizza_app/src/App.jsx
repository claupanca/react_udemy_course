import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Order, { orderLoader } from "./features/order/Order";
import CreateOrder, { orderAction } from "./features/order/CreateOrder";
import Menu, { menuLoader } from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
// import Home from "./ui/Home";

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        // we also place the ErrorElement here so that it's in the Layout
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        // we define params using :orderId
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        // we also place the ErrorElement here so that it's in the Layout
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
