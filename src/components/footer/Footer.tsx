import React from "react";
import FooterBrand from "./subcomponets/FooterBrand.tsx";
import FooterDescription from "./subcomponets/FooterDescription.tsx";
import FooterNav from "./subcomponets/FooterNav.tsx";
import FooterScMedia from "./subcomponets/FooterScMedia.tsx";

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

Footer.Brand = FooterBrand;
Footer.Description = FooterDescription;
Footer.Nav = FooterNav;
Footer.ScMedia = FooterScMedia;

export default Footer;
