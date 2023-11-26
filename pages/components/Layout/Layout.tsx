import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subnav from "./Subnav";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Subnav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
