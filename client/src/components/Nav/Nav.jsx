import { useEffect, useMemo, useRef, useState } from "react";
import navCSS from "./nav.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import ErrorPage from "../../ErrorPage";
import LoadingPage from "../../LoadingPage";
import api from "../../api";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState({
    services: false,
    destinations: false,
  });

  useEffect(() => {
    // Remove the activeMenu class if it exists
    if (menu.current && menu.current.classList.contains(navCSS.activeMenu)) {
      menu.current.classList.remove(navCSS.activeMenu);
    }
  }, [location]);

  const menu = useRef();
  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };

  const services = [
    { name: "Hotels", to: "/services/hotels" },
    { name: "Houseboats", to: "/services/boats" },
    { name: "Transport", to: "/services/cars" },
    { name: "Activities", to: "/services/activities" },
  ];

  const destinations = useMemo(() => {
    if (packages.length > 0) {
      const locations = new Set([
        ...packages.flatMap((item) => item.location || []),
      ]);
      const loc_add = Array.from(locations).map((loc) => {
        return {
          name: loc,
          to: `services/packages?loc=${loc}`,
        };
      });
      return loc_add;
    }
    return [];
  }, [packages]);

  function navigateContact() {
    navigate("/contact");
  }

  //useeffect to get Package data from db
  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await api.get("packages");
        setPackages(response.data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);
  if (error) return <ErrorPage />;
  if (loading) return <LoadingPage />;

  return (
    <div
      className={`navbar ${navCSS.Nav_wrapper} ${location.pathname === "/" ? "bg-[rgba(0,0,0,0.3)] text-white" : "bg-white text-gray-500"}`}
    >
      <div>
        <Link to="/" onClick={menuHandler}>
          <img src="/assets/logo.png" alt="logo" className="h-[70px]" />
        </Link>
      </div>

      <ul ref={menu}>
        <li>
          <Link to="/" onClick={menuHandler}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services/packages" onClick={menuHandler}>
            Packages
          </Link>
        </li>
        <li>
          <Dropdown
            isOpen={isOpen.destinations}
            setIsOpen={setIsOpen}
            menuHandler={menuHandler}
            dropdownItems={destinations}
            name={"destinations"}
          />
        </li>

        <li>
          <Dropdown
            isOpen={isOpen.services}
            setIsOpen={setIsOpen}
            menuHandler={menuHandler}
            dropdownItems={services}
            name={"services"}
          />
        </li>
        <li>
          <Link to="/about" onClick={menuHandler}>
            About Us
          </Link>
        </li>
      </ul>

      <div className={navCSS.nav_btns}>
        <div
          className={`${navCSS.CallBtn} flex md:flex-col lg:flex-row items-center text-center gap-2 md:gap-0 lg:gap-2 font-semibold cursor-pointer hover:scale-110 hover:text-indigo-500 transition-all duration-300`}
          onClick={navigateContact}
        >
          <i className="ri-phone-line"></i>
          <span className="hidden sm:flex text-[14px] md:text-[12px]">
            Contact Us
          </span>
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
