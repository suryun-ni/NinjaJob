"use client";

import React, { Button, Navbar } from "flowbite-react";

export default function Footer() {
  return (
    <footer className="bg-[#5C5470] shadow  dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-[#B9B4C7] sm:text-center dark:text-[#FAF0E6]">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SamberCode™
          </a>
          . Tengku Surya .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#B9B4C7] dark:text-[#FAF0E6] sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
