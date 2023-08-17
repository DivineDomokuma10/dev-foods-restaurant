import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppContext from "../context/context";

const NavBar = () => {
  const navItems = [
    { id: 1, path: "/", text: "Home", active: "active" },
    { id: 2, path: "/menu", text: "Menu", active: "active" },
    { id: 3, path: "/about", text: "About", active: "active" },
    { id: 4, path: "/order", text: "Order", active: "active" },
    { id: 5, path: "/contact", text: "Contact Us", active: "active" },
  ];
  const { toggleSideNav } = useContext(AppContext);

  return (
    <header className="w-full p-4 flex items-center justify-between bg-transparent">
      <h1 className="text-3xl text-gray-300 font-light md:text-4xl">
        <span className="font-bold  text-green-500 text-4xl md:text-5xl">
          Dev
        </span>
        Foods
      </h1>

      <div className="h-full hidden md:flex md:items-center md:p-5 md:space-x-10 lg:space-x-16">
        {navItems.map((navItem) => (
          <NavLink
            to={navItem.path}
            key={navItem.id}
            activeClassName={navItem.active}
            className="text-lg text-gray-300 font-bold transition hover:text-green-500"
          >
            {navItem.text}
          </NavLink>
        ))}
      </div>

      <div className=" md:hidden">
        <span
          className="font-bold text-xl text-gray-300 cursor-pointer hover:text-green-500"
          onClick={toggleSideNav}
        >
          &#9776;
        </span>
      </div>
    </header>
  );
};

export default NavBar;
