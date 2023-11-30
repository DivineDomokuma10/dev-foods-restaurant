import React from "react";
import { FaPlus } from "react-icons/fa";

const FoodCard = ({ img, title, desp, price }) => {
  return (
    <div className="w-full flex flex-col space-y-5 bg-gray-200 p-3 rounded-lg">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-60 rounded-lg transition hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-3xl font-bold text-gray-700">{title}</h3>
        <p>{desp}</p>
        <div className="w-full flex items-center justify-between">
          <h5 className="text-2xl text-gray-600 font-bold">${price}</h5>
          <button className="bg-green-500 p-3 rounded-md hover:bg-green-600 hover:">
            <FaPlus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
