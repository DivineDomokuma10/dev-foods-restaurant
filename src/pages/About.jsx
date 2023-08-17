import React from "react";
import { motion } from "framer-motion";
import { LuChefHat } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Map from "../components/Map";
import people from "../tools/people";
import Carousel from "../tools/Carousel";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const About = () => {
  const navigator = useNavigate();

  return (
    <section className="w-full flex flex-col bg-[url('/gallery-3.jpg')] bg-no-repeat bg-cover bg-fixed">
      <HeroSection>
        <div className="w-full min-h-full flex flex-col items-center justify-center space-y-10">
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

      <article className="w-full min-h-[85vh] flex flex-col items-center bg-black backdrop-blur-md backdrop-filter bg-opacity-95 justify-center space-y-10 sm:space-y-14 md:min-h-[93vh] md:justify-evenly">
        <h1 className="text-center text-4xl text-green-500 font-serif font-medium sm:text-5xl">
          OUR STORY
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10 lg:flex-row sm:space-y-10 lg:space-y-0"
        >
          <p className="text-white leading-6 text-center text-sm px-5 sm:text-base sm:leading-8 md:leading-10 md:px-10 md:text-lg">
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
          <p className="text-white leading-6 text-center text-sm px-5 sm:text-base sm:leading-8 md:leading-10 md:px-10 md:text-lg">
            natus dolor sequi, voluptatum non, culpa doloribus odit. Voluptatem
            expedita autem quos ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptas ipsam facere incidunt
            aut illum quibusdam consequatur fuga earum natus dolor sequi elit.
            Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas ipsam facere incidunt aut
            illum quibusdam consequatur fuga earum natus dolor sequi.
          </p>
        </motion.div>
        <div className="hidden space-x-20 pt-10 md:flex">
          <motion.button
            onClick={() => navigator("/menu")}
            className="bg-red-500 font-medium text-white rounded p-2 px-4 text-lg hover:scale-105"
          >
            See our Menu
          </motion.button>
          <motion.button
            onClick={() => navigator("/order")}
            className="bg-green-500 font-medium text-white rounded p-2 px-4 text-lg hover:scale-105"
          >
            Place your Order
          </motion.button>
        </div>
      </article>

      <aside className="w-full min-min-h-[80vh] flex flex-col space-y-20 py-5 bg-black bg-opacity-80 md:min-h-[63vh] lg:min-min-h-[80vh] ">
        <div className="flex flex-col space-y-5">
          <h1 className="text-center text-4xl text-green-500 py-5 font-serif font-medium sm:text-5xl">
            CLIENTS TESTEMONIES
          </h1>
          <p className="text-center text-white md:px-32 lg:px-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            ducimus quasi debitis sequi officia molestiae explicabo, nulla,
          </p>
        </div>
        <Carousel>
          {people.map((person) => (
            <div
              key={person.id}
              className="w-full flex flex-col px-10 text-white space-y-10 sm:space-y-12 sm:w-44"
            >
              <h1 className="text-2xl font-bold sm:text-3xl md:text-start">
                {person.title}
              </h1>
              <p className="sm:">{person.text}</p>
              <div className="flex space-x-5 items-center">
                <img src={person.pics} className="w-12 h-12 rounded-full" />
                <div className="text-green-400 font-semibold">
                  <span className="text-green-400 font-semibold">
                    {person.name}
                  </span>
                  <p className="text-white font-semibold">Customer</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </aside>

      <aside className="w-full min-min-h-[100vh] flex flex-col space-y-20 py-5 bg-black backdrop-blur-md backdrop-filter bg-opacity-95 md:min-min-h-[90vh] md:space-y-36 lg:min-min-h-[115vh]">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-center space-x-4 md:space-x-10">
            <LuChefHat className="text-4xl text-green-500" />
            <h1 className="text-4xl text-green-500 py-5 font-serif font-medium sm:text-5xl">
              OUR BEST CHEFS
            </h1>
          </div>
          <p className="text-center text-white md:px-32 lg:px-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            ducimus quasi debitis sequi officia molestiae explicabo, nulla,
          </p>
        </div>
        <Carousel>
          {people.map((person) => (
            <div
              key={person.id}
              className="w-full flex flex-col px-10 text-white space-y-10 sm:space-y-12 sm:w-44"
            >
              <div className="font-semibold flex flex-col items-center space-y-6">
                <img src={person.pics} className="w-56" />
                <div className="flex flex-col space-y-3">
                  <span className="text-white text-center font-bold lg:text-xl">
                    {person.name.toUpperCase()}
                  </span>
                  <p className="text-gray-300 font-light text-center">
                    Food Chef
                  </p>
                  <span className="flex text-gray-300 space-x-2 justify-center lg:space-x-5">
                    <FaFacebookF className="text-sm  hover:text-green-500 lg:text-base" />
                    <FaTwitter className="text-sm  hover:text-green-500 lg:text-base" />
                    <FaInstagram className="text-sm hover:text-green-500 lg:text-base" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </aside>

      <Map />

      <Footer />
    </section>
  );
};

export default About;
