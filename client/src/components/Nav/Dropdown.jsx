import React from "react";
import navCSS from "./nav.module.css";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, setIsOpen, menuHandler, dropdownItems, name }) => {
  return (
    <div
      className="relative  max-w-full"
      onMouseEnter={() =>
        setIsOpen((prev) => ({ ...prev, [name]: !prev[name] }))
      }
      onMouseLeave={() =>
        setIsOpen((prev) => ({ ...prev, [name]: !prev[name] }))
      }
    >
      <a className="relative flex items-center gap-1 cursor-pointer">
        {name}
        <i className={`ri-arrow-right-s-line ${isOpen ? "rotate-90" : ""}`}></i>
      </a>
      <div
        className={`${navCSS.dropdown} absolute top-full mt-0.5 min-w-full bg-white border border-gray-200 shadow-lg flex flex-col transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {dropdownItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              className="block px-4 py-2 bg-white z-10"
              to={item.to}
              onClick={menuHandler}
            >
              <span className="text-[15px] md:text-[11px] text-gray-600">
                {item.name}
              </span>
            </Link>
            {index !== dropdownItems.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* <div
        className={`${navCSS.dropdown} relative flex flex-col justify-center overflow-visible py-6 sm:py-12 hover:min-h-screen `}
      >
        <div className="relative w-full items-center max-w-screen-sm">
          <div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dropdown;
