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
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {/* we are displaying the Loader above everything, when needed */}
      {/* so we are not conditionally showing the loader or the content */}
      {navigation.state === "loading" ? <Spinner /> : ""}

      <Header />

      <div className="overflow-scroll bg-gray-100">
        <main className="mx-auto max-w-2xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
