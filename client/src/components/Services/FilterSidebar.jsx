import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Range } from "react-range";
import styles from "./styles.module.css";

const FilterSidebar = ({
  servicesData,
  activePage,
  selectedDestinations,
  setSelectedDestinations,
  selectedPacktag,
  setSelectedPacktag,
  defaultLoc,
  defaultTag,
  // priceRange,
  // setPriceRange,
  durationRange,
  setDurationRange,
  selectedActivities,
  setSelectedActivities,
  sortOption,
  setSortOption,
}) => {
  // Refs and state for mobile menu
  const filterMenu = useRef();
  const bars = useRef();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [showMoreDestinations, setShowMoreDestinations] = useState(false);
  const [showMorePacktag, setShowMorePacktag] = useState(false);
  const [showMoreActivities, setShowMoreActivities] = useState(false);
  //can do this in mongoDB but tired
  const tagsLabel = {
    solo: "Solo Travel",
    small: "Small Groups Departures",
    cheap: "Affordable Dreams",
    tour: "Foody Tours",
    religious: "Religious Tours",
    private: "Private Touring",
  };

  const menuHandler = () => {
    setIsSidebarActive((prev) => !prev);
    filterMenu.current.classList.toggle(styles.activeFilterMenu);
    bars.current.classList.toggle(styles.activeBars);
  };

  // Dynamic filter options
  const destinations = useMemo(() => {
    if (["packages", "hotels", "activities"].includes(activePage)) {
      const locations = servicesData.map(
        (item) => item.location && item.location
      );
      const counts =
        locations &&
        locations.reduce((acc, loc) => {
          acc[loc] = (acc[loc] || 0) + 1;
          return acc;
        }, {});
      return Object.entries(counts).map(([name, count]) => ({ name, count }));
    }
    return [];
  }, [servicesData, activePage]);

  const packtags = useMemo(() => {
    if (["packages"].includes(activePage)) {
      // Extract all tags from each item and flatten the result into a single array
      const tags = servicesData.flatMap((item) => item.tags || []);
      // Count the occurrences of each tag
      const counts = tags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {});
      // Convert the counts object to an array of { name, count } objects
      return Object.entries(counts).map(([name, count]) => ({ name, count }));
    }
    return [];
  }, [servicesData, activePage]);

  // Function to be called when activePage changes
  const onActivePageChange = () => {
    clearAllFilters();
  };

  // useEffect to run the function when activePage changes
  useEffect(() => {
    onActivePageChange();
  }, [activePage]);

  const activitiesData = useMemo(() => {
    if (activePage === "activities") {
      const activities = servicesData.map((item) => item.title && item.title);
      const counts =
        activities &&
        activities.reduce((acc, loc) => {
          acc[loc] = (acc[loc] || 0) + 1;
          return acc;
        }, {});
      return Object.entries(counts).map(([name, count]) => ({
        name,
        count,
      }));
    }
    return [];
  }, [servicesData, activePage]);

  // Sort options
  const sortOptions = [
    // "Price: Low to High",
    // "Price: High to Low",
    ...(activePage === "packages"
      ? ["Days: Low to High", "Days: High to Low"]
      : []),
    "Name: A - Z",
    "Name: Z - A",
    "Latest",
  ];

  const clearAllFilters = () => {
    setSelectedDestinations([]);
    setSelectedPacktag([]);
    // setPriceRange([100, 50000]);
    setDurationRange([1, 7]);
    setSelectedActivities([]);
    setSortOption("Latest");
    setShowMoreDestinations(false);
    setShowMorePacktag(false);
    setShowMoreActivities(false);
  };

  useEffect(() => {
    if (defaultLoc) {
      setSelectedDestinations(() => [defaultLoc]);
    } else {
      setSelectedDestinations([]);
    }
    if (defaultTag) {
      setSelectedPacktag(() => [defaultTag]);
    } else {
      setSelectedPacktag([]);
    }
  }, [defaultLoc, defaultTag]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the navigation type indicates a reload
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

    if (isReload) {
      // Remove query parameters by navigating to only the pathname
      navigate(location.pathname, { replace: true });
    }
  }, [navigate, location.pathname]);

  const DESTINATION_DISPLAY_COUNT = 5;
  const TAG_DISPLAY_COUNT = 5;
  const ACTIVITY_DISPLAY_COUNT = 5;

  const displayedDestinations = showMoreDestinations
    ? destinations
    : destinations.slice(0, DESTINATION_DISPLAY_COUNT);

  const displayedPacktags = showMorePacktag
    ? packtags
    : packtags.slice(0, TAG_DISPLAY_COUNT);

  const displayedActivities = showMoreActivities
    ? activitiesData
    : activitiesData.slice(0, ACTIVITY_DISPLAY_COUNT);

  // Rest of your FilterSidebar component remains similar, using dynamic destinations and activities...

  return (
    <div className="relative">
      {/* Mobile Filter Menu toggle */}
      {isSidebarActive && (
        <div
          className={`${styles.backdrop} md:hidden`}
          onClick={menuHandler}
        ></div>
      )}
      <div
        ref={bars}
        className={`${styles.bars} flex items-center justify-center md:hidden`}
        onClick={menuHandler}
      >
        <i
          className={`ri-arrow-right-wide-line text-lg md:text-xl ${isSidebarActive && "rotate-180"}`}
        ></i>
      </div>

      {/* Filter Menu Sidebar*/}
      <div
        ref={filterMenu}
        className={`${styles.filterMenu} border-2 border-gray-300 rounded-[5px] p-5`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-bold">Filters</h2>
          <button
            onClick={clearAllFilters}
            className="text-red-400 text-xs w-auto font-semibold hover:underline"
          >
            Clear all
          </button>
        </div>
        <hr className="my-3" />

        {/* Sort Section */}
        <section className="my-6">
          <h3 className="text-md font-semibold mb-6">Sort</h3>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full border border-gray-300 text-sm rounded p-1 focus:outline-none focus:border-indigo-500"
          >
            {sortOptions.map((option, idx) => (
              <option
                key={idx}
                value={option}
                className="text-indigo-500  text-sm"
              >
                {option}
              </option>
            ))}
          </select>
        </section>
        <hr className="my-3" />

        {/* Destinations Filter */}
        <section className={`mb-6 ${activePage === "cars" && "hidden"}`}>
          <h3 className="text-md font-semibold mb-3">Destinations</h3>
          <div className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedDestinations.length === destinations.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDestinations(destinations.map((d) => d.name));
                  } else {
                    setSelectedDestinations([]);
                  }
                }}
              />
              <p className=" text-xs">Show All</p>
            </label>
          </div>
          <ul className="space-y-2">
            {displayedDestinations.map((dest, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedDestinations.includes(dest.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedDestinations((prev) => [
                            ...prev,
                            dest.name,
                          ]);
                        } else {
                          setSelectedDestinations((prev) =>
                            prev.filter((item) => item !== dest.name)
                          );
                        }
                      }}
                    />
                    <p className=" text-xs">{dest.name}</p>
                  </label>
                  <p className="text-gray-500 text-xs">{dest.count}</p>
                </div>
              </li>
            ))}
          </ul>
          {destinations.length > DESTINATION_DISPLAY_COUNT && (
            <button
              onClick={() => setShowMoreDestinations((prev) => !prev)}
              className="text-left w-auto mt-2 text-xs font-bold text-indigo-500 hover:underline"
            >
              {showMoreDestinations ? "Show Less" : "Show More"}
            </button>
          )}
        </section>
        <hr className="my-3" />

        {/* Tags Filter */}
        <section className={`mb-6 ${activePage !== "packages" && "hidden"}`}>
          <h3 className="text-md font-semibold mb-3">Tags</h3>
          <div className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedPacktag.length === packtags.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedPacktag(packtags.map((tag) => tag.name));
                  } else {
                    setSelectedPacktag([]);
                  }
                }}
              />
              <p className="text-xs">Show All</p>
            </label>
          </div>
          <ul className="space-y-2">
            {displayedPacktags.map((tag, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedPacktag.includes(tag.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPacktag((prev) => [...prev, tag.name]);
                        } else {
                          setSelectedPacktag((prev) =>
                            prev.filter((item) => item !== tag.name)
                          );
                        }
                      }}
                    />
                    <p className="text-xs">{tagsLabel[tag.name]}</p>
                  </label>
                  <p className="text-gray-500 text-xs">{tag.count}</p>
                </div>
              </li>
            ))}
          </ul>
          {packtags.length > TAG_DISPLAY_COUNT && (
            <button
              onClick={() => setShowMorePacktag((prev) => !prev)}
              className="text-left w-auto mt-2 text-xs font-bold text-indigo-500 hover:underline"
            >
              {showMorePacktag ? "Show Less" : "Show More"}
            </button>
          )}
        </section>
        <hr className="my-3" />

        {/* Activities Filter */}
        <section
          className={`my-6 ${activePage === "activities" ? "" : "hidden"}`}
        >
          <h3 className="text-md font-semibold mb-6">Activities</h3>
          {/* "Show All" checkbox to select/deselect all activities */}
          <div className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedActivities.length === activitiesData.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedActivities(activitiesData.map((a) => a.name));
                  } else {
                    setSelectedActivities([]);
                  }
                }}
              />
              <span className=" text-xs">Show All</span>
            </label>
          </div>
          <ul className="space-y-2">
            {displayedActivities.map((activity, idx) => (
              <li key={idx}>
                <div className="flex justify-between items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedActivities.includes(activity.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedActivities((prev) => [
                            ...prev,
                            activity.name,
                          ]);
                        } else {
                          setSelectedActivities((prev) =>
                            prev.filter((item) => item !== activity.name)
                          );
                        }
                      }}
                    />
                    <p className=" text-xs">{activity.name}</p>
                  </label>
                  <p className="text-gray-500 text-xs">{activity.count}</p>
                </div>
              </li>
            ))}
          </ul>
          {activitiesData.length > ACTIVITY_DISPLAY_COUNT && (
            <button
              onClick={() => setShowMoreActivities((prev) => !prev)}
              className="text-left w-auto mt-2 text-xs font-bold text-indigo-500 hover:underline"
            >
              {showMoreActivities ? "Show Less" : "Show More"}
            </button>
          )}
        </section>
        <hr className={`my-3 ${activePage === "activities" ? "" : "hidden"}`} />

        {/* Price Range Filter */}
        {/* <div className="my-6">
          <h3 className="text-md font-semibold mb-6">Price</h3>
          <Range
            step={100}
            min={100}
            max={50000}
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => {
              const { key, ...restProps } = props;

              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-0.5 bg-indigo-500 rounded-full"
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => {
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-4 w-4 bg-indigo-500 border-2 border-indigo-500 rounded-full shadow-md focus:outline-none"
                />
              );
            }}
          />
          <div className="flex justify-between mt-3">
            <span className="text-xs">${priceRange[0]}</span>
            <span className="text-xs">${priceRange[1]}</span>
          </div>
        </div>
        <hr className="my-3" /> */}
        {/* Duration Range Filter */}
        <div className="my-6">
          <h3 className="text-md font-semibold mb-6">Duration</h3>
          <Range
            step={1}
            min={1}
            max={30}
            values={durationRange}
            onChange={(values) => setDurationRange(values)}
            renderTrack={({ props, children }) => {
              const { key, ...restProps } = props;

              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-0.5 bg-indigo-500 rounded-full"
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => {
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-4 w-4 bg-indigo-500 border-2 border-indigo-500 rounded-full shadow-md focus:outline-none"
                />
              );
            }}
          />
          <div className="flex justify-between mt-3">
            <span className="text-xs">{durationRange[0]} Days</span>
            <span className="text-xs">{durationRange[1]} Days</span>
          </div>
        </div>
        <hr className="my-3" />
      </div>
    </div>
  );
};

export default FilterSidebar;
