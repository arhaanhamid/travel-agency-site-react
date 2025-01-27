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
          <a href="#">Trips</a>
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Searches</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Popular Destinations</a>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search Places" />
        </div>
        <div className={navCSS.CallBtn}>
          <i className="ri-phone-line"></i>
          <p>
            +1 1800 25 2202 <small>Call Your Travel Agent</small>
          </p>
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
