import React, { useRef, useState } from "react";
import navCSS from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef();
  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };

  const dropdownItems = [
    { name: "Hotels", to: "/services/hotels" },
    { name: "Houseboats", to: "/services/boats" },
    { name: "Transport", to: "/services/cars" },
  ];
  return (
    <div className={navCSS.Nav_wrapper}>
      <div>
        <Link to="/testpage" onClick={menuHandler}>
          <span className="text-[18px] lg:text-[22px] font-bold lg:font-extrabold flex text-center leading-3">
            Achievement
            <br className="hidden sm:block lg:hidden" />
            Travels
          </span>
        </Link>
      </div>

      <ul ref={menu}>
        <li>
          <Link to="/" onClick={menuHandler}>
            Home
          </Link>
        </li>
        <li>
          <HashLink smooth to="/#popular_trips" onClick={menuHandler}>
            Popular Trips
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#memories" onClick={menuHandler}>
            Memories
          </HashLink>
        </li>
        <li>
          <Link to="/services/packages" onClick={menuHandler}>
            Packages
          </Link>
        </li>

        <li>
          <div
            className={`${navCSS.dropdown} relative flex hover:min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12`}
          >
            <div className="relative w-full items-center mx-auto max-w-screen-sm">
              <div
                id="bouton"
                className="relative group  w-[100px]"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a className="relative flex items-center gap-1 cursor-pointer">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={` w-3 h-3 lg:w-4 lg:h-4 ${isOpen ? "rotate-90" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>

                <div
                  className={`absolute bg-white py-1 opacity-0 hidden flex-col group-hover:flex group-hover:opacity-100 max-h-60 overflow-y-auto ${isOpen ? "opacity-100 flex" : "opacity-0 hidden"}`}
                >
                  {dropdownItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <Link
                        className="px-2 py-2"
                        to={item.to}
                        onClick={menuHandler}
                      >
                        <span className="text-[15px] text-gray-600">
                          {item.name}
                        </span>
                      </Link>
                      {index !== dropdownItems.length - 1 && (
                        <hr className="border-gray-600" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div
          className={`${navCSS.CallBtn} hidden sm:flex sm:flex-col lg:flex-row items-center gap-0 lg:gap-2 text-center text-[12px] lg:text-[14px] font-bold`}
        >
          <i className="ri-phone-line"></i>
          Contact Us
        </div>
        <i
          className="ri-menu-2-line"
          onClick={menuHandler}
          id={navCSS.bars}
        ></i>
      </div>
    </div>
  );
}

export default Nav;
