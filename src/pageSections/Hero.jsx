import React from "react";
import { motion } from "framer-motion";

import NavBar from "../components/NavBar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[100vh] flex flex-col  bg-black bg-opacity-80 md:space-y-14"
    >
      <NavBar />
      <aside className="w-full h-full flex flex-col items-center justify-center space-y-10 sm:space-y-8">
        <motion.p
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl font-light text-gray-200 sm:text-3xl sm:font-semibold md:font-bold lg:font-light"
        >
          We serve
        </motion.p>
        <motion.h1
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-4xl font-bold font-serif text-center text-green-500 sm:text-6xl"
        >
          BEST QUALITY FOOD
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center font-light text-gray-200 sm:px-10 sm:text-base lg:w-1/2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque,
          aperiam dolore, recusandae voluptate perferendis quos corporis aliquid
          qui suscipit laboriosam quod
        </motion.p>
        <motion.a
          href="#order"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-green-500 px-10 py-2 text-xl font-semibold transition rounded text-gray-100 hover:scale-105"
        >
          ORDER
        </motion.a>
      </aside>
    </section>
  );
};

export default Hero;
