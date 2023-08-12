import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import Carousel from "../components/tools/Carousel";

const About = () => {
  const navigator = useNavigate();

  return (
    <section className="w-full flex flex-col bg-[url('/gallery-3.jpg')] bg-no-repeat bg-cover bg-fixed">
      <HeroSection>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-10">
          <motion.p
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl font-light text-gray-200 sm:text-4xl sm:font-semibold md:text-4xl md:font-bold lg:font-extralight"
          >
            Best in Town
          </motion.p>
          <motion.h1
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-5xl font-bold font-serif text-center text-green-500 leading-[50px] sm:text-6xl sm:px-20"
          >
            MORE ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center font-light text-gray-200 sm:px-10 sm:text-lg lg:w-1/2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            cumque, aperiam dolore, recusandae voluptate perferendis quos
            corporis aliquid qui suscipit laboriosam quod
          </motion.p>
        </div>
      </HeroSection>

      <article className="w-full h-[90vh] flex flex-col items-center bg-gray-300 justify-center space-y-10 md:py-7 md:h-[100vh] md:space-y-20">
        <h1 className="text-center text-4xl text-green-500 font-serif font-medium sm:text-5xl">
          OUR STORY
        </h1>
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0">
          <p className="leading-6 text-center text-sm px-5 sm:text-base sm:leading-8 md:leading-10 md:px-10 md:text-lg">
            <span className=" text-lg font-semibold text-green-600 sm:text-xl md:text-2xl">
              DEV FOODS
            </span>{" "}
            dolor sit amet consectetur adipisicing elit. Voluptas ipsam facere
            incidunt aut illum quibusdam consequatur fuga earum natus dolor
            sequi, voluptatum non, culpa doloribus odit. Voluptatem expedita
            autem quos sequi, voluptatum non, culpa doloribus odit. Voluptatem
            expedita autem quos ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit.
          </p>
          <p className="leading-6 text-center text-sm px-5 sm:text-base sm:leading-8 md:leading-10 md:px-10 md:text-lg">
            natus dolor sequi, voluptatum non, culpa doloribus odit. Voluptatem
            expedita autem quos ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptas ipsam facere incidunt
            aut illum quibusdam consequatur fuga earum natus dolor sequi elit.
            Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas ipsam facere incidunt aut
            illum quibusdam consequatur fuga earum natus dolor sequi.
          </p>
        </div>
        <div className="hidden space-x-20 pt-10 md:flex">
          <button
            onClick={() => navigator("/menu")}
            className="bg-red-500 font-medium text-white rounded p-2 px-4 text-lg hover:scale-105"
          >
            See our Menu
          </button>
          <button
            onClick={() => navigator("/order")}
            className="bg-green-500 font-medium text-white rounded p-2 px-4 text-lg hover:scale-105"
          >
            Place your Order
          </button>
        </div>
      </article>

      <div className="w-full h-[80vh] flex flex-col space-y-5 bg-black bg-opacity-95 py-5">
        <h1 className="text-center text-4xl text-green-500 font-serif font-medium sm:text-5xl">
          CLIENTS TESTEMONIES
        </h1>
      </div>
      <Carousel />
    </section>
  );
};

export default About;
