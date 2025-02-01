import { Suspense, useEffect, useMemo, useState } from "react";
import PackageCard from "./PackageCard";
import Skeleton from "./../Skeleton";

const PackageSearch = ({ data }) => {
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    try {
      const parsedData = JSON.parse(data);

      if (Array.isArray(parsedData) && parsedData.length > 0) {
        setTripsData(parsedData);
      }
    } catch (error) {
      console.error("Invalid JSON data:", error);
    }
  }, [data]);

  const locations = tripsData.map((trip) => trip.location);

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
    let filtered = tripsData;

    // Live search filtering based on trip title
    if (searchText) {
      const regex = new RegExp(searchText, "i");
      filtered = filtered.filter((trip) => regex.test(trip.title));
    }

    // Apply duration filter if provided.
    // Assuming the filter is to show trips with a duration less than or equal to the entered days.
    if (filters.duration) {
      filtered = filtered.filter(
        (trip) => trip.duration <= Number(filters.duration)
      );
    }

    // Apply location filter if provided.
    if (filters.location) {
      filtered = filtered.filter((trip) => trip.location === filters.location);
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
  }, [tripsData, searchText, filters]);

  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  return (
    <div className="flex-col  w-full sm:w-[90%] md:w-[80%] lg:w-[75%] my-36 mx-auto">
      <div className="relative mb-8 mt-4 flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 w-full mx-auto p-4 rounded-lg">
        {/* SEARCH INPUT */}
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden flex-1 min-w-[150px] sm:min-w-[200px]">
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
        <div className="bg-gray-800 rounded-lg ">
          <input
            type="number"
            placeholder="Days"
            className="bg-gray-800  h-10 sm:h-12 text-xs sm:text-sm px-3 py-1 sm:py-2 text-white placeholder-gray-400 rounded-lg outline-none w-[60px] sm:w-[70px] min-w-[60px] text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
        <div className="bg-gray-800 rounded-lg ">
          <select
            className="bg-gray-800 h-10 sm:h-12 text-xs sm:text-sm px-3 py-1 sm:py-2 text-white rounded-lg outline-none w-[120px] sm:w-[140px] min-w-[120px]"
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
        <div className="bg-gray-800 rounded-lg flex items-center">
          <select
            className="bg-gray-800 h-10 sm:h-12 text-xs sm:text-sm px-3 p-2 sm:p-3  text-white rounded-lg outline-none w-[170px] sm:w-[190px]"
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
          className="bg-black h-10 sm:h-12 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black border border-black hover:border-2 transition-all w-[110px] sm:w-[130px] min-w-[110px]"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      <div className="flex flex-col gap-20 w-full px-0 sm:px-5 md:px-14 lg:px-36">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <Suspense fallback={<Skeleton />} key={trip.id}>
              <PackageCard trip={trip} requestFrom="package-page" />
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

export default PackageSearch;
