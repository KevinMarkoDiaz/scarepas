import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
