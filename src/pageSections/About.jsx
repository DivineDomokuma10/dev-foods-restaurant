import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import people from "../tools/people";
import Carousel from "../tools/Carousel";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col bg-[url('/gallery-3.jpg')] bg-no-repeat bg-cover bg-fixed"
    >
      <article className="w-full min-h-[85vh] flex flex-col items-center py-5 bg-black backdrop-blur-md backdrop-filter bg-opacity-90 justify-between space-y-10 sm:p-0 sm:space-y-14 md:min-h-[93vh] md:justify-evenly">
        <motion.h1
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, stiffness: 120 }}
          className="text-center text-3xl text-green-500 font-serif font-medium sm:text-4xl"
        >
          OUR STORY
        </motion.h1>
        <motion.div className="flex flex-col space-y-10 lg:flex-row sm:space-y-10 sm:items-center lg:space-y-0">
          <motion.p
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white leading-6 text-center text-sm px-5 sm:leading-8 md:leading-10 md:px-10 md:text-lg"
          >
            <span className=" text-base font-semibold text-green-600 sm:text-lg md:text-xl">
              DEV FOODS
            </span>{" "}
            dolor sit amet consectetur adipisicing elit. Voluptas ipsam facere
            incidunt aut illum quibusdam consequatur fuga earum natus dolor
            sequi, voluptatum non, culpa doloribus odit. Voluptatem expedita
            autem quos sequi, voluptatum non, culpa doloribus odit. Voluptatem
            expedita autem quos ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas ipsam facere incidunt aut il Lorem ipsum dolor sit.
          </motion.p>
          <img src="./foodbg1.jpg" />
        </motion.div>
      </article>

      <aside className="w-full min-min-h-[80vh] flex flex-col space-y-20 py-5 bg-black bg-opacity-80 md:min-h-[63vh] lg:min-min-h-[80vh]">
        <div className="flex flex-col space-y-5">
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, stiffness: 120 }}
            className="text-center text-3xl text-green-500 py-5 font-serif font-medium sm:text-4xl"
          >
            CLIENTS TESTEMONIES
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="px-2 text-center text-sm text-white md:text-base md:px-32 lg:px-96"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            ducimus quasi debitis sequi officia molestiae explicabo, nulla,
          </motion.p>
        </div>
        <Carousel>
          {people.map((person) => (
            <div
              key={person.id}
              className="w-full flex flex-col px-10 text-white space-y-10 sm:space-y-12 sm:w-44"
            >
              <motion.h1 className="text-xl font-bold sm:text-2xl md:text-start">
                {person.title}
              </motion.h1>
              <p className="text-sm sm:text-base">{person.text}</p>
              <div className="flex space-x-5 items-center">
                <img src={person.pics} className="w-11 h-11 rounded-full" />
                <div className="text-green-400 font-semibold text-xs">
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

      <aside className="w-full min-min-h-[100vh] flex flex-col space-y-20 py-5 bg-black backdrop-blur-md backdrop-filter bg-opacity-90 md:min-min-h-[90vh] md:space-y-36 lg:min-min-h-[115vh]">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-center space-x-4 md:space-x-10">
            <motion.h1
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, stiffness: 120 }}
              className="text-3xl text-green-500 py-5 font-serif font-medium sm:text-4xl"
            >
              OUR BEST CHEFS
            </motion.h1>
          </div>
          <motion.p
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="px-2 text-center text-sm text-white md:text-base md:px-32 lg:px-96"
          >
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            ducimus quasi debitis sequi officia molestiae explicabo, nulla,
          </motion.p>
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
    </section>
  );
};

export default About;
