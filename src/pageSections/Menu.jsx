import React from "react";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  return (
    <section
      id="menu"
      className="w-full min-min-h-[80vh] flex flex-col space-y-20 py-5 bg-black bg-opacity-80 md:min-h-[63vh] lg:min-min-h-[80vh]"
    >
      <h1 className="text-center text-3xl text-green-500 font-serif font-medium sm:text-4xl">
        HERE'S OUR TOP DELICACIES
      </h1>
      <aside className="w-full flex justify-center items-center p-5">
        <FoodCard
          price="45"
          title="Rice"
          img="/food1.jpg"
          desp="This is a sweet bowl of rice. Eat and be refresh."
        />

        <FoodCard
          price="45"
          title="Rice"
          img="/food1.jpg"
          desp="This is a sweet bowl of rice. Eat and be refresh."
        />
      </aside>
    </section>
  );
};

export default Menu;
