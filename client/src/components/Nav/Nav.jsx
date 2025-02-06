// import { useRef } from "react";
// import navCSS from "./../Nav/Nav.module.css";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// function Nav() {
//   const menu = useRef();

//   const menuHandler = () => {
//     menu.current.classList.toggle(navCSS.activeMenu);
//   };
//   return (
//     <div className={navCSS.Nav_wrapper}>
//       <div className={navCSS.logo}>
//         <Link to="/">AchievementTravels</Link>
//       </div>

//       <ul ref={menu}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <HashLink smooth to="/#popular_trips">
//             Popular Trips
//           </HashLink>
//         </li>
//         <li>
//           <HashLink smooth to="/#memories">
//             Memories
//           </HashLink>
//         </li>
//         <li>
//           <Link to="/services/packages">Packages</Link>
//         </li>

//         {/* <Link to="rentals">Rentals</Link> */}
//         <li>
//           <div
//             className={`${navCSS.dropdown} relative flex hover:min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12`}
//           >
//             <div className="relative w-full items-center mx-auto max-w-screen-sm">
//               <div id="bouton" className="relative group/bouton w-full">
//                 <button className="relative flex items-center gap-4">
//                   Services
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className={`${navCSS.dropdown_svg} w-6 h-6 group-hover/bouton:rotate-90`}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m8.25 4.5 7.5 7.5-7.5 7.5"
//                     />
//                   </svg>
//                 </button>
//                 <div className="absolute bg-white opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
//                   <Link className="px-4 py-4" to="/services/hotels">
//                     <span className="text-[15px] text-gray-600 cursor-pointer">
//                       Hotels
//                     </span>
//                   </Link>
//                   <hr />
//                   <Link className="px-4 py-4" to="/services/boats">
//                     <span className="text-[15px] text-gray-600 cursor-pointer">
//                       Houseboats
//                     </span>
//                   </Link>
//                   <hr />
//                   <Link className="px-4 py-4" to="/services/cars">
//                     <span className="text-[15px] text-gray-600 cursor-pointer">
//                       Transport
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>
//       </ul>

//       <div className={navCSS.nav_btns}>
//         <div className={navCSS.CallBtn}>
//           <i className="ri-phone-line"></i>
//           <h4>Contact Us</h4>
//         </div>
//         <i
//           className="ri-menu-2-line"
//           onClick={menuHandler}
//           id={navCSS.bars}
//         ></i>
//       </div>
//     </div>
//   );
// }

// export default Nav;
import { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };
  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <Link to="/">AchievementTravels</Link>
      </div>

      <ul ref={menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <HashLink smooth to="/#popular_trips">
            Popular Trips
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#memories">
            Memories
          </HashLink>
        </li>
        <li>
          <Link to="/services/packages">Packages</Link>
        </li>

        {/* <Link to="rentals">Rentals</Link> */}
        <li>
          <div
            className={`${navCSS.dropdown} relative flex hover:min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12`}
          >
            <div className="relative w-full items-center mx-auto max-w-screen-sm">
              <div id="bouton" className="relative group/bouton w-full">
                <button className="relative flex items-center gap-4">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`${navCSS.dropdown_svg} w-6 h-6 group-hover/bouton:rotate-90`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
                <div className="absolute bg-white opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
                  <Link className="px-4 py-4" to="/services/hotels">
                    <span className="text-[15px] text-gray-600 cursor-pointer">
                      Hotels
                    </span>
                  </Link>
                  <hr />
                  <Link className="px-4 py-4" to="/services/boats">
                    <span className="text-[15px] text-gray-600 cursor-pointer">
                      Houseboats
                    </span>
                  </Link>
                  <hr />
                  <Link className="px-4 py-4" to="/services/cars">
                    <span className="text-[15px] text-gray-600 cursor-pointer">
                      Transport
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div className={navCSS.CallBtn}>
          <i className="ri-phone-line"></i>
          <h4>Contact Us</h4>
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
