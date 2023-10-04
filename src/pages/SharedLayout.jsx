import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/generalcomponents/Footer";
import NavBar from "../components/generalcomponents/NavBar";
import Copyright from "../components/generalcomponents/Copyright";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default SharedLayout;
