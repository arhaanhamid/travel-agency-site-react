import { Suspense, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton";
import styles from "./styles.module.css";
import FilterSidebar from "./FilterSidebar";

const Services = ({ data, defaultLoc = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const activePage = location.pathname.split("/")[2]; // Get active page from URL

  // Handler for navigation
  const handleMoreDetails = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const [servicesData, setServicesData] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Filter states
  const [selectedDestinations, setSelectedDestinations] = useState([
    defaultLoc,
  ]);
  const [priceRange, setPriceRange] = useState([100, 50000]);
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
      filtered = filtered.filter((item) =>
        selectedDestinations.includes(item.location)
      );
    }

    // Price filter
    filtered = filtered.filter((item) => {
      const price = Number(item.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

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
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
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
    priceRange,
    durationRange,
    selectedActivities,
    sortOption,
    activePage,
  ]);

  // Returns a random rotation transform between -5deg and 5deg.
  function randomRotate() {
    const deg = Math.random() * (3 - -3) + -3;
    return `rotate(${deg}deg)`;
  }

  return (
    <div className="flex flex-col w-auto py-[120px] mx-auto">
      {/* Search Input */}
      <div className="flex items-center bg-white border rounded-lg overflow-hidden flex-1 md:w-[70%] xl:w-[50%] mx-auto">
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
      <div className="border-b-2 border-gray-300 md:mt-10 md:mb-3 "> </div>
      {/* Filter Sidebar and Grid Items */}
      <div className="flex flex-row lg:gap-10">
        <div className="md:w-[30%] lg:w-[25%] xl:w-[18%]">
          <FilterSidebar
            servicesData={servicesData}
            activePage={activePage}
            selectedDestinations={selectedDestinations}
            setSelectedDestinations={setSelectedDestinations}
            defaultLoc={defaultLoc}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            durationRange={durationRange}
            setDurationRange={setDurationRange}
            selectedActivities={selectedActivities}
            setSelectedActivities={setSelectedActivities}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        {/* Grid layout for service items */}
        <div className="md:w-[70%] lg:w-[75%] xl:w-[82%] h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-[10px] gap-x-[20px] gap-y-[60px]">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((item, index) => (
              <Suspense fallback={<Skeleton />} key={item.id}>
                <div
                  className={`${styles.card}`}
                  style={{ transform: randomRotate() }}
                >
                  <div className="relative">
                    <img src={item.images[0]} alt={`Card ${index} `} />
                    {activePage !== "boats" && (
                      <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-[#4a4a7d] uppercase tracking-wide">
                        {item.location}
                      </span>
                    )}
                    <span className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 text-[0.6rem] md:text-[0.6rem] px-2 py-1 lg:p-1 font-semibold flex items-center bg-[#f8f3e8] text-[#4a4a7d] uppercase tracking-wide">
                      {activePage == "packages" && item.duration + "-Day Trip"}
                      {activePage == "activities" &&
                        item.duration + "-Day Activity"}
                      {(activePage == "hotels" || activePage == "boats") &&
                        item.category}
                      {activePage == "cars" && "Passengers: " + item.passengers}
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
                      {activePage == "packages" && "Discover Trip"}
                      {activePage == "hotels" && "Discover Hotel"}
                      {activePage == "boats" && "Discover Boat"}
                      {activePage == "cars" && "Discover Car"}
                      {activePage == "activities" && "Discover Activity"}
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
                          {activePage == "packages" && "PP"}
                          {activePage == "hotels" ||
                            (activePage == "boats" && "PP")}
                          {activePage == "cars" && ""}
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
