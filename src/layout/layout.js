import React from "react";
import { useLocation } from "react-router-dom";
import CopyRight from "./copyright";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  let location = useLocation();
  console.log(location.pathname)

  const homeback = {
    backgroundImage: 'url("/assets/images/homeback.png")',
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover"
  };

  return (
    <div className={`flex flex-col bg-black items-center min-h-screen justify-between relative`} style={location.pathname === "/" || location.pathname === "/home" ? homeback:{}}>
      <div className="xl:w-120 lg:w-110 md:w-100 flex justify-between flex-col h-full z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
      <CopyRight />
    </div>
  );
};

export default Layout;
