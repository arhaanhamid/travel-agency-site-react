import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TripCard from "./TripCard.jsx";
import tripsData from "../../assets/TripsData.js";

import { useEffect, useState } from "react";

const PopularTrips = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    setTrips(tripsData); // Force state update to trigger re-render
  }, []);
  return (
    <section
      id="popular_trips"
      className="py-16 bg-[#e2e2e2] min-h-[800px] flex flex-col gap-10 md:gap-5 md:flex-row lg:flex-row"
    >
      <div className="pl-6 sm:pl-8 md:pl-12 lg:pl-24 w-full md:w-[40%] lg:w-[40%]">
        <div className="flex h-[600px] items-end p-6 sm:p-8 md:p-10 lg:p-10">
          <div className="max-w-md">
            <span className="uppercase text-xs font-bold tracking-wide text-gray-700">
              Example Trips
            </span>
            <h2 className="text-5xl  font-semibold mt-2">Get inspired</h2>
            <p className="text-lg text-gray-600 mt-4">
              Browse our example trips and get in contact to start planning your
              very own adventure.
            </p>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
        navigation
        className="relative px-4 sm:px-6 lg:px-8 w-full sm:w-[80%] md:w-[60%] lg:w-[60%]"
      >
        {trips.length > 0 ? (
          trips.map((trip, index) =>
            trip.isPopular ? (
              <SwiperSlide key={trip.title || index}>
                <TripCard trip={trip} />
              </SwiperSlide>
            ) : (
              ""
            )
          )
        ) : (
          <p>Loading Trips...</p>
        )}
      </Swiper>
    </section>
  );
};

export default PopularTrips;
