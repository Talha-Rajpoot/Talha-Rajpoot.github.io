import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [pulled, setPulled] = useState(false);
  const ropeRef = useRef(null);

  const toggleTheme = () => {
    setPulled(true);
    setTimeout(() => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      setPulled(false);
    }, 400);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="lamp-toggle" onClick={toggleTheme} ref={ropeRef}>
      <div className="lamp-toggle__wire"></div>
      <div className={`lamp-toggle__rope ${pulled ? "lamp-toggle__rope--pulled" : ""}`}>
        <div className="lamp-toggle__handle"></div>
      </div>
      <div className={`lamp-toggle__bulb ${theme === "light" ? "lamp-toggle__bulb--on" : ""}`}>
        <div className="lamp-toggle__bulb-cap"></div>
        <div className="lamp-toggle__bulb-glass"></div>
        <div className="lamp-toggle__bulb-glow"></div>
      </div>
    </div>
  );
};

export default Themetoggle;
