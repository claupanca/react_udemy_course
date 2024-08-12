import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";

import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

export default function AppLayout() {
  // we use this to check if the state of the app is Loading or not from
  // react-router itself
  const navigation = useNavigation();
  // console.log("navigation", navigation);

  return (
    <div className="layout">
      {/* we are displaying the Loader above everything, when needed */}
      {/* so we are not conditionally showing the loader or the content */}
      {navigation.state === "loading" ? <Spinner /> : ""}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
