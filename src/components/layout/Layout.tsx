import React from "react";
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar classname={"bg-gray-200 grid-cols-5 grid h-16 items-center"}>
        <Navbar.Brand classname={"bg-gray-300 h-10 justify-self-center"}>
          logo
        </Navbar.Brand>
        <Navbar.Nav
          classname={"bg-gray-400 col-span-3 h-10 justify-self-center"}
        >
          nav nav nav
        </Navbar.Nav>
        <Navbar.Sm classname={"bg-gray-500 h-10 justify-self-center"}>
          social media
        </Navbar.Sm>
      </Navbar>
      {children}
      <Footer>
        <Footer.Brand />
      </Footer>
    </>
  );
};

export default Layout;
