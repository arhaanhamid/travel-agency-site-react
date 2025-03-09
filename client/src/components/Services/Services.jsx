import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import FilterSidebar from "./FilterSidebar";
import { CardBody, CardContainer, CardItem } from "../UIComponents/ThreeDCard";

const Services = ({ data, defaultLoc = "", defaultTag = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = location.pathname.split("/")[2]; // Get active page from URL

  // Handler for navigation
  const handleMoreDetails = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const [servicesData, setServicesData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState([
    defaultLoc,
  ]);
  const [selectedPacktag, setSelectedPacktag] = useState([defaultTag]);
  // const [priceRange, setPriceRange] = useState([100, 50000]);
  const [durationRange, setDurationRange] = useState([1, 30]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [sortOption, setSortOption] = useState("Latest");

  const handleSearchChange = (e) => setSearchText(e.target.value);
  //Useeffect to parse incoming data to proper JSON
  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        if (Array.isArray(parsedData)) {
          setServicesData(parsedData);
          // Initialize price range based on data
          // const prices = parsedData.map(item => Number(item.price));
          // setPriceRange([Math.min(...prices), Math.max(...prices)]);
        }
      } catch (error) {
        console.error("Error parsing data:", error);
      }
    }
  }, [data]);

  const filteredTrips = useMemo(() => {
    let filtered = [...servicesData];

    // Search filter
    if (searchText) {
      const regex = new RegExp(searchText, "i");
      filtered = filtered.filter((item) => regex.test(item.title));
    }

    // Destination filter
    if (selectedDestinations.length > 0) {
      filtered = filtered.filter((item) => {
        if (activePage === "packages") {
          Array.isArray(item.location) &&
            item.location.some((loc) => selectedDestinations.includes(loc));
        }
        return selectedDestinations.includes(item.location);
      });
    }
    // Package Type filter

    if (selectedPacktag.length > 0) {
      filtered = filtered.filter((item) => {
        return (
          item.tags && item.tags.some((tag) => selectedPacktag.includes(tag))
        );
      });
    }

    // Price filter
    // filtered = filtered.filter((item) => {
    //   const price = Number(item.price);
    //   return price >= priceRange[0] && price <= priceRange[1];
    // });

    // Duration filter (packages only)
    if (activePage === "packages") {
      filtered = filtered.filter((item) => {
        const duration = Number(item.duration);
        return duration >= durationRange[0] && duration <= durationRange[1];
      });
    }

    // Activity filter
    if (selectedActivities.length > 0) {
      filtered = filtered.filter((item) =>
        selectedActivities.includes(item.title)
      );
    }

    // Sorting
    switch (sortOption) {
      // case "Price: Low to High":
      //   filtered.sort((a, b) => a.price - b.price);
      //   break;
      // case "Price: High to Low":
      //   filtered.sort((a, b) => b.price - a.price);
      //   break;
      case "Days: Low to High":
        filtered.sort((a, b) => a.duration - b.duration);
        break;
      case "Days: High to Low":
        filtered.sort((a, b) => b.duration - a.duration);
        break;
      case "Name: A - Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Name: Z - A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Latest":
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [
    servicesData,
    searchText,
    selectedDestinations,
    selectedPacktag,
    // priceRange,
    durationRange,
    selectedActivities,
    sortOption,
    activePage,
  ]);

  return (
    <div className="flex flex-col w-auto py-[120px] mx-auto">
      {/* Search Input */}
      <div className="flex items-center overflow-hidden flex-1 md:w-[70%] xl:w-[50%] mx-auto">
        <input
          placeholder="Search..."
          className="bg-gray-200 h-10 sm:h-12 px-3 sm:px-4 py-1 sm:py-2 w-full text-black text-sm sm:text-base placeholder-gray-400 outline-none"
          name="search"
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
        <i className="ri-search-2-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 bg-gray-200 text-gray-400"></i>
        {searchText && (
          <i
            className="ri-close-large-line w-10 h-10 sm:w-12 sm:h-12 p-2 sm:p-3 bg-gray-200 text-gray-400 cursor-pointer"
            onClick={() => setSearchText("")}
          ></i>
        )}
      </div>
      <div className="border-b-2 border-indigo-200 mt-10 mb-5 md:mb-3 "> </div>
      {/* Filter Sidebar and Grid Items */}
      <div className="flex flex-row lg:gap-10">
        <div className="md:w-[30%] lg:w-[25%] xl:w-[18%]">
          <FilterSidebar
            servicesData={servicesData}
            activePage={activePage}
            selectedDestinations={selectedDestinations}
            setSelectedDestinations={setSelectedDestinations}
            selectedPacktag={selectedPacktag}
            setSelectedPacktag={setSelectedPacktag}
            defaultLoc={defaultLoc}
            defaultTag={defaultTag}
            // priceRange={priceRange}
            // setPriceRange={setPriceRange}
            durationRange={durationRange}
            setDurationRange={setDurationRange}
            selectedActivities={selectedActivities}
            setSelectedActivities={setSelectedActivities}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {/* Grid layout for service items */}
        <div className="md:w-[70%] lg:w-[75%] xl:w-[82%] h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-[10px] gap-x-[20px] gap-y-[60px]">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((item, index) => (
              <CardContainer key={item._id} className="lazyLoadDown">
                <CardBody className={`${styles.card}`}>
                  <CardItem
                    translateZ={5}
                    rotateX={1}
                    rotateZ={-1}
                    className="w-full mt-4"
                  >
                    <div className="relative">
                      <picture>
                        {item.images[0].avif && (
                          <source
                            srcSet={item.images[0].avif}
                            type="image/avif"
                          />
                        )}
                        {item.images[0].webp && (
                          <source
                            srcSet={item.images[0].webp}
                            type="image/webp"
                          />
                        )}
                        <img
                          src={item.images[0].jpg}
                          alt={`Card ${index}`}
                          loading="lazy"
                        />
                      </picture>

                      {activePage !== "cars" && (
                        <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-indigo-900 uppercase tracking-wide">
                          {activePage === "packages"
                            ? item.location.length > 1
                              ? "Multi-Location"
                              : item.location
                            : item.location}
                        </span>
                      )}
                      <span className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-indigo-900 uppercase tracking-wide">
                        {activePage == "packages" &&
                          item.duration + "-Day Trip"}
                        {activePage == "activities" &&
                          item.duration + "-Day Activity"}
                        {(activePage == "hotels" || activePage == "boats") &&
                          item.category}
                        {activePage == "cars" &&
                          "Passengers: " + item.passengers}
                      </span>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ={10}
                    translateX={5}
                    className="w-full text-center text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    <h2>{item.title}</h2>
                  </CardItem>
                  <CardItem
                    translateZ={10}
                    translateX={5}
                    className="min-w-full text-center text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    <p className="line-clamp-5 text-xs/relaxed sm:text-sm/relaxed text-white/95">
                      {item.desc}
                    </p>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={10}
                    as="button"
                    className="w-full px-4 py-2 rounded-xl text-xs font-bold my-5"
                  >
                    <div
                      className={`w-full flex items-center justify-center font-bold bg-transparent border-2 border-indigo-900 rounded-full text-[0.8rem] h-[40px] py-1 px-2 sm:h-[50px] sm:text-[1rem] md:text-[0.8rem] lg:px-2 lg:h-[45px] xl:h-[50px] xl:px-4 sm:px-4 hover:bg-indigo-900 text-indigo-900 hover:text-white transition duration-300 cursor-pointer`}
                      onClick={() => handleMoreDetails(item._id)}
                    >
                      {activePage == "packages" && "Discover Trip"}
                      {activePage == "hotels" && "Discover Hotel"}
                      {activePage == "boats" && "Discover Boat"}
                      {activePage == "cars" && "Discover Car"}
                      {activePage == "activities" && "Discover Activity"}
                    </div>
                  </CardItem>
                  {/* <CardItem>
                      <div
                        className={`flex flex-col items-center justify-between h-full text-base `}
                      >
                        <span className="text-[12px] xs:text-xs font-medium text-indigo-900 uppercase">
                          FROM
                        </span>
                        <span className="text-[1rem] sm:text-[1.4rem] lg:text-[0.8rem] xl:text-[1rem] font-bold text-indigo-900">
                          ₹{item.price}{" "}
                          <small className="font-normal text-xs">
                            {activePage == "packages" && "PP"}
                            {activePage == "hotels" ||
                              (activePage == "boats" && "PP")}
                            {activePage == "cars" && ""}
                          </small>
                        </span>
                      </div>
                    </CardItem> */}
                </CardBody>
              </CardContainer>
            ))
          ) : (
            <div className="text-black">
              <h1 className="text-4xl font-bold mb-8 text-center h-screen flex flex-col items-center justify-center">
                No results for
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
