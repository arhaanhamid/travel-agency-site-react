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
          <Link to="packages">Packages</Link>
        </li>
        <li>
          <Link to="rentals">Rentals</Link>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        {/* <div className={navCSS.search_wrapper}>
          <i className="ri-search-line"></i>
          <input
            placeholder="Search..."
            name="search"
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            required
          />
        </div> */}
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
