/* eslint-disable no-unused-vars */
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col px-5 py-20">
      <div>
        <h1 className="text-4xl font-bold">To-do list app.</h1>
        <p className="text-lg font-normal py-3">
          Insert your list item below and click "Add"
        </p>
      </div>

      <div className="flex flex-row py-5">
        <input className="px-3 py-2 w-full mr-5 font-medium rounded-md outline-none " type="text" placeholder="Type your new goal hear..." />
        <button className="bg-[#7AB2B2] px-5 cursor-pointer rounded-md text-white font-medium transform transition-transform duration-150 hover:scale-95 active:scale-100">Add</button>

      </div>
    </div>
  );
};

export default Content;
