import { useContext } from "react";
import { motion } from "framer-motion";

import AppContext from "../context/context";

const SideBar = () => {
  const { toggleSideNav } = useContext(AppContext);
  const navItems = [
    { id: 1, path: "#hero", text: "Home", active: "active" },
    { id: 3, path: "#about", text: "About", active: "active" },
    { id: 2, path: "#menu", text: "Menu", active: "active" },
    { id: 4, path: "#reservation", text: "Reservation", active: "active" },
    { id: 5, path: "#contact", text: "Contact Us", active: "active" },
  ];

  return (
    <motion.nav
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ stiffness: 0 }}
      className="w-full h-full flex flex-col justify-between shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 bg-gray-500 fixed left-0 top-0 z-30"
    >
      <div>
        <div className="w-full p-2 flex justify-end">
          <span
            className="font-bold text-4xl text-gray-300 cursor-pointer hover:text-green-500"
            onClick={toggleSideNav}
          >
            &times;
          </span>
        </div>
        <div className="w-full flex flex-col py-20 items-center space-y-5">
          {navItems.map((navItem) => (
            <a
              href={navItem.path}
              key={navItem.id}
              onClick={toggleSideNav}
              className="w-full flex items-center justify-center text-white text-3xl font-semibold p-2 transition hover:text-white hover:bg-green-400"
            >
              {navItem.text}
            </a>
          ))}
        </div>
      </div>
      <h1 className="w-full flex p-2 items-center justify-center text-xl text-green-500 font-light">
        <span className="font-bold text-gray-900">Dev</span>Foods
      </h1>
    </motion.nav>
  );
};

export default SideBar;
