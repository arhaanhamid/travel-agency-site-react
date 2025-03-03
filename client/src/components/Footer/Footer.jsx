import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { iconsData } from "../../../public/assets/GlobalData";
import api from "../../api";
import ErrorPage from "../../ErrorPage";
import LoadingPage from "../../LoadingPage";

function Footer() {
  const [packagesData, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const phoneNumber = 1234657890;

  //useeffect to get Packages data from db
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
    <footer className="footer relative z-10 bg-stone-900 text-stone-100">
      <div className="mx-auto md:mx-10 lg:mx-16 max-w-7xl px-2 sm:px-6 py-4 sm:py-6 md:py-10">
        {/* Main Grid */}
        <div className="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-1 sm:gap-5 md:gap-20 ">
          {/* Section 1: Destinations */}
          <div className="hidden md:flex md:flex-col">
            <h2 className="uppercase font-montserrat font-bold lg:font-semibold lg:text-[13px] tracking-[1px] text-lg mb-2 md:mb-3 lg:mb-5">
              Destinations
            </h2>
            <ul className="flex flex-col space-y-2">
              {packagesData.slice(0, 7).map((item) => (
                <Link
                  to={`/services/packages?loc=${item.location}`}
                  key={item._id}
                >
                  {item.location}
                </Link>
              ))}
            </ul>
          </div>

          {/* Section 2: Tailored Experience */}
          <div className="hidden md:flex md:flex-col">
            <h2 className="uppercase font-montserrat font-bold lg:font-semibold lg:text-[13px] tracking-[1px] text-lg mb-2 md:mb-3 lg:mb-5">
              Tailored Experience
            </h2>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to={`/services/packages?tag=small`}>
                Small Group Departures
              </Link>
              <Link to={`/services/packages?tag=cheap`}>Affordable Dreams</Link>
              <Link to={`/services/packages?tag=private`}>Private Tours</Link>
              <Link to={`/services/packages?tag=solo`}>Solo Tours</Link>
              <Link to={`/services/packages?tag=tour`}>Foody Tours</Link>
              <Link to={`/services/packages?tag=religious`}>
                Religious Tours
              </Link>
              <Link to={`/forms/general`}>Let Us Guide You</Link>
            </ul>
          </div>

          {/* Section 3: Private Rentals */}
          <div className="hidden md:flex md:flex-col">
            <h2 className="uppercase font-montserrat font-bold lg:font-semibold lg:text-[13px] tracking-[1px] text-lg mb-2 md:mb-3 lg:mb-5">
              Services
            </h2>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to={`/services/hotels`}>Hotels</Link>
              <Link to={`/services/boats`}>Houseboats</Link>
              <Link to={`/services/cars`}>Cars</Link>
              <Link to={`/services/activities`}>Activities</Link>
            </ul>
          </div>

          {/* Section 4: About */}
          <div className="hidden md:flex md:flex-col">
            <h2 className="uppercase font-montserrat font-bold lg:font-semibold lg:text-[13px] tracking-[1px] text-lg mb-2 md:mb-3 lg:mb-5">
              About Us
            </h2>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to={`/about#whychooseus`}>Why choose us?</Link>
              <Link to={`/about#ourteam`}>Our Team</Link>
              <Link to={`/about#workwithus`}>Work with us</Link>
            </ul>
          </div>

          {/* Section 5: About & Contact */}
          <div className="flex flex-col items-center text-center md:items-start md:text-start md:row-start-1 md:col-start-3 xl:col-start-5">
            <Link to="/">
              <img
                src="../../assets/logo.png"
                alt="logo"
                className="h-16 sm:h-20 mb-5 md:h-16 md:mb-4 "
              />
            </Link>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to="mailto:info@achievementtravels.com">
                info@achievementtravels.com
              </Link>
              <Link to={`tel:+91${phoneNumber}`}>India: +91 {phoneNumber}</Link>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-stone-300 dark:border-stone-600" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              to="#"
              aria-label="instagram"
              className="text-neutral-600
              hover:text-neutral-800 dark:text-neutral-200
              dark:hover:text-neutral-400"
            >
              <i className={`${iconsData.facebook} sm:text-[20px]`}></i>
            </Link>
            <Link
              to="#"
              aria-label="instagram"
              className="text-neutral-600
              hover:text-neutral-800 dark:text-neutral-200
              dark:hover:text-neutral-400"
            >
              <i className={`${iconsData.instagram} sm:text-[20px]`}></i>
            </Link>
            <Link
              to="#"
              aria-label="twitter"
              className="text-neutral-600
              hover:text-neutral-800 dark:text-neutral-200
              dark:hover:text-neutral-400"
            >
              <i className={`${iconsData.twitter} sm:text-[20px]`}></i>
            </Link>
            <Link
              to="#"
              aria-label="linkedin"
              className="text-neutral-600
              hover:text-neutral-800 dark:text-neutral-200
              dark:hover:text-neutral-400"
            >
              <i className={`${iconsData.linkedin} sm:text-[20px]`}></i>
            </Link>
          </div>
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} AchievementTravels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
