import { Suspense, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Skeleton from "../Skeleton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import FilterSidebar from "./FilterSidebar";

const Services = ({ data, defaultLoc = "" }) => {
  const curLocation = useLocation();
  const packages = curLocation.pathname == "/services/packages";
  const hotels = curLocation.pathname == "/services/hotels";
  const cars = curLocation.pathname == "/services/cars";
  const boats = curLocation.pathname == "/services/boats";
  const activePage = packages
    ? "packages"
    : hotels
      ? "hotels"
      : cars
        ? "cars"
        : boats
          ? "boats"
          : null;
  const [servicesData, setServicesData] = useState([]);

  const navigate = useNavigate();

  // Handler for navigation
  const handleMoreDetails = (id) => {
    navigate(`${curLocation.pathname}/${id}`);
  };

  useEffect(() => {
    try {
      if (data) {
        const parsedData = JSON.parse(data);

        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setServicesData(parsedData);
        }
      }
    } catch (error) {
      console.error("Invalid JSON data:", error);
    }
  }, [data]);

  const locations = servicesData.map((item) => item.location);

  const [searchText, setSearchText] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState(defaultLoc);
  const [sortBy, setSortBy] = useState("");

  const [filters, setFilters] = useState({
    duration: "",
    location: "",
    sortBy: "",
  });

  useEffect(() => {
    applyFilters;
  }, []);

  // When the Apply Filters button is clicked, update the filters state.
  const applyFilters = () => {
    setFilters({ duration, location, sortBy });
    console.log({ searchText, duration, location, sortBy });
  };

  // Compute the final filtered (and sorted) trips using useMemo
  const filteredTrips = useMemo(() => {
    let filtered = servicesData;

    // // Live search filtering based on trip title
    if (searchText) {
      const regex = new RegExp(searchText, "i");
      filtered = filtered.filter((item) => regex.test(item.title));
    }

    // // Apply duration filter if provided.
    // // Assuming the filter is to show trips with a duration less than or equal to the entered days.
    // if (filters.duration) {
    //   filtered = filtered.filter(
    //     (item) => item.duration <= Number(filters.duration)
    //   );
    // }

    // // Apply location filter if provided.
    // if (filters.location) {
    //   filtered = filtered.filter((item) => item.location === filters.location);
    // }

    // // Apply sorting if provided.
    // if (filters.sortBy) {
    //   // Create a shallow copy before sorting.
    //   filtered = [...filtered];

    //   switch (filters.sortBy) {
    //     case "price-high":
    //       filtered.sort((a, b) => b.price - a.price);
    //       break;
    //     case "price-low":
    //       filtered.sort((a, b) => a.price - b.price);
    //       break;
    //     case "duration-high":
    //       filtered.sort((a, b) => b.duration - a.duration);
    //       break;
    //     case "duration-low":
    //       filtered.sort((a, b) => a.duration - b.duration);
    //       break;
    //     default:
    //       break;
    //   }
    // }

    return filtered;
  }, [servicesData, searchText, filters]);

  const handleSearchChange = (e) => setSearchText(e.target.value);

  // Returns a random rotation transform between -5deg and 5deg.
  function randomRotate() {
    const deg = Math.random() * (3 - -3) + -3;
    return `rotate(${deg}deg)`;
  }

  return (
    <div className="flex flex-col w-auto py-[120px] mx-auto gap-10">
      {/* SEARCH INPUT */}
      <div className="flex items-center bg-stone-200 border rounded-lg overflow-hidden flex-1 md:w-[70%] xl:w-[50%] mx-auto">
        <input
          placeholder="Search..."
          className="bg-transparent h-10 sm:h-12 px-3 sm:px-4 py-1 sm:py-2 w-full text-black text-sm sm:text-base placeholder-gray-400 outline-none"
          name="search"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
        <i className="ri-search-2-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 text-gray-400"></i>
        {searchText && (
          <i
            className="ri-close-large-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3  text-gray-400 cursor-pointer"
            onClick={() => setSearchText("")}
          ></i>
        )}
      </div>

      {/* Filter Sidebar and Grid Items */}
      <div className="flex flex-row">
        <div className="md:w-[30%] lg:w-[25%] xl:w-[20%]">
          <FilterSidebar
            servicesData={servicesData}
            setServicesData={setServicesData}
            activePage={activePage}
          />
        </div>

        {/* Grid layout for service items */}
        <div className="md:w-[70%] lg:w-[75%] xl:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[10px] px-[10px]">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((item, index) => (
              <Suspense fallback={<Skeleton />} key={item.id}>
                <div
                  className={`${styles.card}`}
                  style={{ transform: randomRotate() }}
                >
                  <div className="relative">
                    <img src={item.images[0]} alt={`Card ${index} `} />
                    {!boats && (
                      <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-[#4a4a7d] uppercase tracking-wide">
                        {item.location}
                      </span>
                    )}
                    <span className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-[#4a4a7d] uppercase tracking-wide">
                      {packages && item.duration + "-Day Trip"}
                      {(hotels || boats) && item.category}
                      {cars && "Passengers: " + item.passengers}
                    </span>
                  </div>
                  <h2>{item.title}</h2>
                  <p className="line-clamp-5 text-xs/relaxed sm:text-sm/relaxed text-white/95 font-nunito">
                    {item.desc}
                  </p>

                  <div
                    className={`flex justify-between items-end mt-5 h-[50px]`}
                  >
                    <div
                      className={`flex items-center justify-center font-bold bg-transparent border-2 border-[#4a4a7d] rounded-full text-[0.8rem] h-[40px] py-1 px-2 sm:h-[50px] sm:text-[1rem] md:text-[0.8rem] lg:px-2 lg:h-[45px] xl:h-[50px] xl:px-4 sm:px-4 hover:bg-[#4a4a7d] text-[#4a4a7d] hover:text-white transition duration-300 cursor-pointer`}
                      onClick={() => handleMoreDetails(item.id)}
                    >
                      {packages && "Discover Trip"}
                      {hotels && "Discover Hotel"}
                      {boats && "Discover Boat"}
                      {cars && "Discover Car"}
                    </div>
                    <div
                      className={`flex flex-col items-center justify-between h-full text-base `}
                    >
                      <span className="text-[12px] xs:text-xs font-medium text-[#4a4a7d] uppercase">
                        FROM
                      </span>
                      <span className="text-[1rem] sm:text-[1.4rem] lg:text-[0.8rem] xl:text-[1rem] font-bold text-[#4a4a7d]">
                        ₹{item.price}{" "}
                        <small className="font-normal text-xs">
                          {packages && "PP"}
                          {hotels || (boats && "PP")}
                          {cars && ""}
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </Suspense>
            ))
          ) : (
            <div className="text-black">
              <h1 className="text-4xl font-bold mb-8 text-center">
                No results for{" "}
                <span className="font-extrabold">&quot;{searchText}&quot;</span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
