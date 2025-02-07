import React from "react";
import { Link } from "react-router-dom";
import navCSS from "./nav.module.css";

const Dropdown = ({ menuHandler }) => {
  // Example items; duplicates are included here for testing scrollability.
  const dropdownItems = [
    { name: "Hotels", to: "/services/hotels" },
    { name: "Houseboats", to: "/services/boats" },
    { name: "Houseboats", to: "/services/boats" },
    { name: "Houseboats", to: "/services/boats" },
    { name: "Transport", to: "/services/cars" },
  ];

  return (
    <div
      className={`${navCSS.dropdown} relative flex flex-col justify-center overflow-hidden py-6 sm:py-12`}
    >
      <div className="relative w-full items-center mx-auto max-w-screen-sm">
        {/* The container with the "group" class makes it easy to control the dropdown */}
        <div id="bouton" className="relative group w-full">
          {/* Dropdown trigger */}
          <button
            type="button"
            className="flex items-center gap-4 cursor-pointer focus:outline-none"
          >
            <span className="text-black">Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${navCSS.dropdown_svg} w-6 h-6 transition-transform duration-200 group-hover:rotate-90`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          <div
            className="absolute bg-black w-[100px] mt-2 opacity-0 hidden flex-col 
                       group-hover:flex group-hover:opacity-100 transition-opacity duration-200 
                       max-h-60 overflow-y-auto"
          >
            {dropdownItems.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  className="block px-4 py-2 hover:bg-gray-700"
                  to={item.to}
                  onClick={menuHandler}
                >
                  <span className="text-[15px] text-gray-300">{item.name}</span>
                </Link>
                {/* Optionally add a divider after each item except the last one */}
                {index !== dropdownItems.length - 1 && (
                  <hr className="border-gray-600" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
