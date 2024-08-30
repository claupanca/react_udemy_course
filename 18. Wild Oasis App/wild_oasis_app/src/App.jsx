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

// const StyledApp = styled.div`
//   /* font-size: 1.4rem; */
//   /* margin: 0 auto; */
//   /* width: 400px; */
//   /* background-color: orange; */
//   padding: 20px;
// `;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* we have placed all Routes inside the layout and use the <Outlet/> to display them */}
          <Route element={<AppLayout />}>
            {/* since we have a duplicate, we use Navigate to */}
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
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
