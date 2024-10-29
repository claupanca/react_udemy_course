// import styled from "styled-components";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

import Booking from "./pages/Booking";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ReactQueryDevtools,
  // ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

// React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// import { createClient } from "@supabase/supabase-js";
// import { SupaBase_Key, SupaBase_Url } from "../config";

// const StyledApp = styled.div`
//   /* font-size: 1.4rem; */
//   /* margin: 0 auto; */
//   /* width: 400px; */
//   /* background-color: orange; */
//   padding: 20px;
// `;

// Supabase test
// const SUPABASE_KEY = SupaBase_Key();
// const SUPABASE_URL = SupaBase_Url();

// const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// // console.log("supabase", supabase);
// async function fetchData() {
//   const { data, error } = await supabase.from("bookings").select("*");

//   if (error) console.log("error", error);
//   if (data) console.log("data", data);
// }

// fetchData();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* we have placed all Routes inside the layout and use the <Outlet/> to display them */}
          <Route element={<AppLayout />}>
            {/* since we have a duplicate, we use Navigate to */}
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:id" element={<Booking />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Floating Dev Tools */}
      <ReactQueryDevtools initialIsOpen={"open"} />
      {/* FIxed element Dev Tools */}
      {/* <ReactQueryDevtoolsPanel setIsOpen={true} /> */}
      <Toaster />
    </QueryClientProvider>
  );
}

// we are NOT GOING TO use createBrowserRouter
// because we don't need the loaders

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <StyledApp />,
//     children: [
//       {
//         path: "/bookings",
//         element: <Bookings />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
