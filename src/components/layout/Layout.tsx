import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar.tsx";
import Footer from "../footer/Footer.tsx";
import icon from "../../assets/icon/hamburger.svg";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";
import useObserverHeader from "../../helpers/observer.js";
const Layout = ({ children }) => {
  useObserverHeader();

  return (
    <>
      <Navbar
        id="header"
        classname={
          "relative z-10 grid-cols-10 grid gap-20 h-20 items-center border-slate-950 bg-gray-50 transition-all ease-in-out "
        }
      >
        <Navbar.Brand classname={" h-16 col-span-2 justify-self-center"}>
          <img src={icon} className="h-16"></img>
        </Navbar.Brand>
        <Navbar.Nav classname={"col-span-3 col-start-5 "}>
          <ul className="grid gap-4 grid-cols-3">
            <li>
              <Link to="/"> home</Link>
            </li>
            <li>
              <Link to="/contact"> contact</Link>
            </li>
            <li>
              <Link to="/about"> about us</Link>
            </li>
          </ul>
        </Navbar.Nav>
        <Navbar.Sm classname={" col-start-9"}>
          <ul className="flex gap-8">
            <li>
              <a href="https://www.instagram.com/supercolombianafood/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/supercolombianafood/">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Navbar.Sm>
      </Navbar>
      <Navbar
        id="header2"
        classname={
          "-translate-y-48 grid-cols-10 grid gap-20 h-10 items-center border-slate-950 bg-gray-50 transition-all ease-linear duration-300 "
        }
      >
        <Navbar.Brand classname={" h-16 col-span-2 justify-self-center"}>
          <img src={icon} className="h-10"></img>
        </Navbar.Brand>
        <Navbar.Nav classname={"col-span-3 col-start-5 "}>
          <ul className="grid gap-4 grid-cols-3">
            <li>
              <Link to="/"> home</Link>
            </li>
            <li>
              <Link to="/contact"> contact</Link>
            </li>
            <li>
              <Link to="/about"> about us</Link>
            </li>
          </ul>
        </Navbar.Nav>
        <Navbar.Sm classname={" col-start-9"}>
          <ul className="flex gap-8">
            <li>
              <a href="https://www.instagram.com/supercolombianafood/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/supercolombianafood/">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Navbar.Sm>
      </Navbar>
      {children}
      <div className="min-h-80">body</div>
      <div className="min-h-80">body</div>

      <Footer>
        <Footer.Brand />
        footer
      </Footer>
    </>
  );
};

export default Layout;
