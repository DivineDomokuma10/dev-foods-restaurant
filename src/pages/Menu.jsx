import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/tools/Carousel";

const Menu = () => {
  const people = [
    {
      id: 1,
      name: "Divine",
      text: "Odit doloribus dolores, assumenda similique ipsum ad ratione nisi nemo veniam facere maxime tenetur voluptatem corporis numquam vitae illo. Ex, deleniti dolorem?",
    },
    {
      id: 2,
      name: "James",
      text: "Odit doloribus dolores, assumenda similique ipsum ad ratione nisi nemo veniam facere maxime tenetur voluptatem corporis numquam vitae illo. Ex, deleniti dolorem?",
    },
    {
      id: 3,
      name: "John",
      text: "Odit doloribus dolores, assumenda similique ipsum ad ratione nisi nemo veniam facere maxime tenetur voluptatem corporis numquam vitae illo. Ex, deleniti dolorem?",
    },
  ];
  return (
    <section>
      <NavBar />
      Menu
      <Carousel arrs={people}>
        <div key={arr.id} className="flex flex-col sapce-y-5">
          <h1>{arr.name}</h1>
          <p>{arr.desp}</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Menu;
