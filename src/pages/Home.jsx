import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HeroSection from "../components/HeroSection";

const Home = () => {
  const navigator = useNavigate();
  return (
    <section className="w-full h-[100vh] bg-[url('/gallery-4.jpg')] bg-no-repeat bg-cover">
      <HeroSection>
        <aside className="w-full h-full flex flex-col items-center justify-center space-y-10 sm:space-y-16">
          <motion.p
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-light text-gray-200 sm:text-3xl sm:font-semibold md:text-4xl md:font-bold lg:font-light"
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
            className="text-center font-light text-gray-200 sm:px-10 sm:text-xl lg:w-1/2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            cumque, aperiam dolore, recusandae voluptate perferendis quos
            corporis aliquid qui suscipit laboriosam quod
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={() => navigator("/order")}
            className="bg-green-500 px-10 py-2 text-2xl font-semibold transition rounded text-gray-100 sm:text-2xl hover:scale-105"
          >
            ORDER
          </motion.button>
        </aside>
      </HeroSection>
    </section>
  );
};

export default Home;
