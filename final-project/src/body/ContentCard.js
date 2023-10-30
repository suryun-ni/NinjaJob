"use client";
import React, { useState } from "react";

export default function SectionCard() {
  const [cards] = useState([
    {
      title: "Card-1",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Card-2",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Card-3",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Card-4",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Card-5",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: "Card-6",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ]);
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center">
        <div className="p-[20px 0px] md:max-w-screen-xl w-full m-auto p-[0px 20px] ">
          <div className="flex flex-wrap justify-between ">
            {cards.map((card, i) => (
              <div
                key={i}
                className=" flex-[0_0_100%] max-w-[100%] md:flex-[0_0_calc(50%-20px)] lg:flex-[0_0_calc(33.33%-20px)] max-w-[calc(33.33%-20px)] w-full bg-[#B9B4C7] rounded-xl p-3.5	mb-3.5 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FAF0E6]  duration-300 
                 max-w-[calc(50%-20px)] "
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="text-[#FAF0E6] bg-[#5C5470] hover:bg-[#352F44] rounded-xl max-w-[120px] h-10 flex justify-center	items-center mt-5 transition duration-300 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Cek Disini
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
