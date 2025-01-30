import { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };
  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">AchievementTravels</a>
      </div>

      <ul ref={menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Popular Trips</a>
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Packages</a>
        </li>
        <li>
          <a href="#">Rentals</a>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search Places" />
        </div>
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
