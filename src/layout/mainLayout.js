import React from "react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
