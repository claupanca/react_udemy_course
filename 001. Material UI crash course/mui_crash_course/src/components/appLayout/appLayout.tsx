import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";
import { Grid, Grid2 } from "@mui/material";

const AppLayout = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <Navbar />
      </Grid2>
      <Grid2 size={8}>
        <Outlet />
      </Grid2>
    </Grid2>
  );
};

export default AppLayout;
