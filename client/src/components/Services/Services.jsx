import { Suspense, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Skeleton from "../Skeleton";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Services = ({ data }) => {
  const curLocation = useLocation();
  const packages = curLocation.pathname == "/services/packages";
  const hotels = curLocation.pathname == "/services/hotels";
  const cars = curLocation.pathname == "/services/cars";
  const boats = curLocation.pathname == "/services/boats";
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
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [filters, setFilters] = useState({
    duration: "",
    location: "",
    sortBy: "",
  });

  // When the Apply Filters button is clicked, update the filters state.
  const applyFilters = () => {
    setFilters({ duration, location, sortBy });
    console.log({ searchText, duration, location, sortBy });
  };

  // Compute the final filtered (and sorted) trips using useMemo
  const filteredTrips = useMemo(() => {
    let filtered = servicesData;

    // Live search filtering based on trip title
    if (searchText) {
      const regex = new RegExp(searchText, "i");
      filtered = filtered.filter((item) => regex.test(item.title));
    }

    // Apply duration filter if provided.
    // Assuming the filter is to show trips with a duration less than or equal to the entered days.
    if (filters.duration) {
      filtered = filtered.filter(
        (item) => item.duration <= Number(filters.duration)
      );
    }

    // Apply location filter if provided.
    if (filters.location) {
      filtered = filtered.filter((item) => item.location === filters.location);
    }

    // Apply sorting if provided.
    if (filters.sortBy) {
      // Create a shallow copy before sorting.
      filtered = [...filtered];

      switch (filters.sortBy) {
        case "price-high":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "price-low":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "duration-high":
          filtered.sort((a, b) => b.duration - a.duration);
          break;
        case "duration-low":
          filtered.sort((a, b) => a.duration - b.duration);
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [servicesData, searchText, filters]);

  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  // Returns a random rotation transform between -5deg and 5deg.
  function randomRotate() {
    const deg = Math.random() * (5 - -5) + -5;
    return `rotate(${deg}deg)`;
  }

  return (
    <div className="flex-col w-full sm:w-[90%] md:w-[90%] lg:w-[85%] xl:lg:w-[75%] my-36 mx-auto">
      <div className="relative mb-8 mt-4 flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 w-full mx-auto p-4 rounded-lg">
        {/* SEARCH INPUT */}
        <div className="flex items-center bg-[#4a4a7d] rounded-lg overflow-hidden flex-1 min-w-[150px] sm:min-w-[200px]">
          <input
            placeholder="Search..."
            className="bg-transparent h-10 sm:h-12 px-3 sm:px-4 py-1 sm:py-2 w-full text-white text-sm sm:text-base placeholder-gray-400 outline-none"
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

        {/* DURATION INPUT */}
        <div
          className={`${packages ? "block" : "hidden"} bg-[#4a4a7d] rounded-lg `}
        >
          <input
            type="number"
            placeholder="Days"
            className="bg-[#4a4a7d]  h-10 sm:h-12 text-xs sm:text-sm px-3 py-1 sm:py-2 text-white placeholder-gray-400 rounded-lg outline-none w-[60px] sm:w-[70px] min-w-[60px] text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={duration}
            onChange={handleDurationChange}
          />
          {duration && (
            <i
              className="ri-close-large-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3  text-gray-400 cursor-pointer"
              onClick={() => setDuration("")}
            ></i>
          )}
        </div>

        {/* LOCATION SELECT */}
        <div
          className={`${boats ? "hidden" : "block"} bg-[#4a4a7d] rounded-lg`}
        >
          <select
            className="bg-[#4a4a7d] h-10 sm:h-12 text-xs sm:text-sm px-3 py-1 sm:py-2 text-white rounded-lg outline-none w-[120px] sm:w-[140px] min-w-[120px]"
            value={location}
            onChange={handleLocationChange}
          >
            <option className="text-gray-400" value="">
              Destination
            </option>
            {locations.map((loc, index) => (
              <option key={index} value={loc} className="text-white">
                {loc}
              </option>
            ))}
          </select>
          {location && location !== "Destination" && (
            <i
              className="ri-close-large-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3  text-gray-400 cursor-pointer"
              onClick={() => setLocation("Destination")}
            ></i>
          )}
        </div>

        {/* SORT SELECT */}
        <div className="bg-[#4a4a7d] rounded-lg flex items-center">
          <select
            className="bg-[#4a4a7d] h-10 sm:h-12 text-xs sm:text-sm px-3 p-2 sm:p-3  text-white rounded-lg outline-none w-[170px] sm:w-[190px]"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="">Sort By</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
            <option value="duration-low">Duration: Low to High</option>
            <option value="duration-high">Duration: High to Low</option>
          </select>
          {sortBy && sortBy !== "Sort By" && (
            <i
              className="ri-close-large-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 text-gray-400 cursor-pointer"
              onClick={() => setSortBy("Sort By")}
            ></i>
          )}
        </div>

        {/* FILTER BUTTON */}
        <button
          className="bg-black h-10 sm:h-12 w-[140px] min-w-[140px] text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black border-2 border-solid border-white hover:border-black transition-all"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      {/* Grid layout for service items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((item, index) => (
            <Suspense fallback={<Skeleton />} key={item.id}>
              <div
                key={index}
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

                <div className={`flex justify-between items-end mt-5 h-[50px]`}>
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
  );
};

export default Services;
