import { Outlet } from "react-router-dom";
import React from "react";
import { Header, Footer } from "../components/common";
const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden min-h-[50vh] "> 
        <Outlet className="min-h-screen" />
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
