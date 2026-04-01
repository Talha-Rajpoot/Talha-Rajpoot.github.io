import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="s_c">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
