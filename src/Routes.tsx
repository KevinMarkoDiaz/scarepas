import React from "react";
import { Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";

const Routes = () => {
  return (
    <Route path="/">
      <Route index element={<Navigate to="home" replace />} />
      <Route path="contact" element={<Contact />} />
      <Route index path="home" element={<Home />} />
      <Route index path="about" element={<About />} />

      {/* ... etc. */}
    </Route>
  );
};

export default Routes;
