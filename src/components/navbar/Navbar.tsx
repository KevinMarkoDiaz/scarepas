import React from "react";
import Brand from "./subcomponents/Brand.tsx";
import Nav from "./subcomponents/Nav.tsx";
import NavBarSM from "./subcomponents/NavBarSM.tsx";

function Navbar({ classname, children }) {
  return <div className={classname}>{children}</div>;
}

Navbar.Brand = Brand;
Navbar.Nav = Nav;
Navbar.Sm = NavBarSM;
export default Navbar;
