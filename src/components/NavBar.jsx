import React, { useContext } from "react";

import AppContext from "../context/context";

const NavBar = () => {
  const navItems = [
    { id: 1, path: "#hero", text: "Home", active: "active" },
    { id: 3, path: "#about", text: "About", active: "active" },
    { id: 2, path: "#menu", text: "Menu", active: "active" },
    { id: 4, path: "#reservation", text: "Reservation", active: "active" },
    { id: 5, path: "#contact", text: "Contact Us", active: "active" },
  ];
  const { toggleSideNav } = useContext(AppContext);

  return (
    <header className="w-full fixed top-0 left-0 z-50 p-2 flex bg-gray-700 bg-opacity-30 backdrop-blur-md backdrop-fliter items-center justify-between bg-transparent md:p-0 md:px-2">
      <h1 className="text-2xl text-gray-300 font-light md:text-3xl">
        <span className="font-bold  text-green-500 text-2xl md:text-4xl">
          Dev
        </span>
        Foods
      </h1>

      <nav className="h-full hidden md:flex md:items-center md:p-3 md:space-x-10 lg:space-x-16">
        {navItems.map((navItem) => (
          <a
            href={navItem.path}
            key={navItem.id}
            className="text-base text-gray-300 font-semibold transition hover:text-green-500"
          >
            {navItem.text}
          </a>
        ))}
      </nav>

      <div className=" md:hidden">
        <span
          className="font-bold text-lg text-gray-300 cursor-pointer hover:text-green-500"
          onClick={toggleSideNav}
        >
          &#9776;
        </span>
      </div>
    </header>
  );
};

export default NavBar;
