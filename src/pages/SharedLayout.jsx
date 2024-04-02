import React from "react";
import { Outlet } from "react-router-dom";
import { Reservation } from "../components/homecomponents";
import { Copyright, Footer, NavBar } from "../components/generalcomponents";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Reservation /> */}
      <Footer />
      <Copyright />
    </>
  );
};

export default SharedLayout;
