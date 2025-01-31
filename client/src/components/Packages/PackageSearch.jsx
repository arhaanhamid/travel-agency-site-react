import { Suspense, useMemo, useState } from "react";
// import WidePostCard from "./WidePostCard";
import TripCard from "../PopularTrips/TripCard";
import Skeleton from "./../Skeleton";

const PackageSearch = ({ tripsData }) => {
  const locations = ["kashmir", "ladakh"];
  const parsedTrips = JSON.parse(tripsData);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const filteredTrips = useMemo(() => {
    if (!searchText) return parsedTrips;

    const regex = new RegExp(searchText, "i");
    const searchedTrips = parsedTrips.filter((trip) => regex.test(trip.title));

    return searchedTrips;
  }, [searchText, parsedTrips]);

  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  const applyFilters = () => {
    console.log({ searchText, duration, location, sortBy });
    // Implement the filter logic here
  };

  return (
    <div className="flex-col  w-full sm:w-[90%] md:w-[80%] lg:w-[75%] my-36 mx-auto">
      <div className="relative mb-12 mt-6 flex items-center justify-center gap-4 w-full mx-auto p-6  rounded-lg flex-wrap">
        {/* SEARCH INPUT */}
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden flex-1 min-w-[200px]">
          <input
            placeholder="Search..."
            className="bg-transparent h-12 px-4 py-2 w-full text-white placeholder-gray-400 outline-none"
            name="search"
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            required
          />
          <svg
            className="w-12 h-12 p-3 text-gray-400"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>

        {/* DURATION INPUT */}
        <input
          type="number"
          placeholder="Days"
          className="bg-gray-800 h-12 border text-sm border-gray-700 px-4 py-2 text-white placeholder-gray-400 rounded-lg outline-none w-[70px] min-w-[70px] text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={duration}
          onChange={handleDurationChange}
        />

        {/* LOCATION SELECT */}
        <select
          className="bg-gray-800 h-12 border text-sm border-gray-700 px-4 py-2 text-white rounded-lg outline-none w-[140px] min-w-[140px]"
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

        {/* SORT SELECT */}
        <select
          className="bg-gray-800 h-12 border text-sm border-gray-700 px-4 py-2 text-white rounded-lg outline-none w-[110px] min-w-[110px]"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
          <option value="duration-low">Duration: Low to High</option>
          <option value="duration-high">Duration: High to Low</option>
        </select>

        {/* FILTER BUTTON */}
        <button
          className="bg-black text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-white hover:text-black border border-black hover:border-2 transition-all w-[150px] min-w-[150px]"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      <div className="flex flex-col gap-20 w-full px-0 sm:px-5 md:px-15 lg:px-20 xl:px-20">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => (
            <Suspense fallback={<Skeleton />} key={trip.id}>
              <TripCard trip={trip} />
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
