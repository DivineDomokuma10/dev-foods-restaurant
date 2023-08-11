import React from "react";

import NavBar from "../components/NavBar";

const HeroSection = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex flex-col bg-black bg-opacity-80">
      <NavBar />
      {children}
    </div>
  );
};

export default HeroSection;
