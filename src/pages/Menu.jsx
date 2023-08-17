import React from "react";
import NavBar from "../components/NavBar";

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
    </section>
  );
};

export default Menu;
