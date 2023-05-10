import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-220px)] lg:mx-48">
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
