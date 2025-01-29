import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import TripCard from "./TripCard";

import tour1 from "./../../assets/Trips01.jpg";
import tour2 from "./../../assets/Trips02.jpg";
import tour3 from "./../../assets/Trips03.jpg";
import tour4 from "./../../assets/Trips04.jpg";
import tour5 from "./../../assets/Trips05.jpg";
import { useEffect, useState } from "react";

const popularTrips = [
  {
    image: tour1,
    location: "Paris",
    duration: "3",
    title: "Paris in the Spring",
    desc: "Experience the beauty of Paris with its rich culture and history.",
    price: "500",
  },
  {
    image: tour2,
    location: "Tokyo",
    duration: "5",
    title: "Tokyo Adventure",
    desc: "Explore the vibrant city of Tokyo with its unique culture and cuisine.",
    price: "800",
  },
  {
    image: tour3,
    location: "New York",
    duration: "4",
    title: "New York City Escape",
    desc: "Experience the hustle and bustle of the Big Apple.",
    price: "700",
  },
  {
    image: tour4,
    location: "Bali",
    duration: "7",
    title: "Bali Beach Retreat",
    desc: "Relax on the beautiful beaches of Bali and enjoy the tropical paradise.",
    price: "900",
  },
  {
    image: tour5,
    location: "Rome",
    duration: "4",
    title: "Historic Rome",
    desc: "Discover the ancient ruins and rich history of Rome.",
    price: "600",
  },
];

const PopularTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    setTrips(popularTrips); // Force state update to trigger re-render
  }, []);
  return (
    <section className="py-16 bg-[#f5f3ef] min-h-[800px] flex items-end">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        className="relative px-4 sm:px-6 lg:px-8"
      >
        <SwiperSlide className="pl-6 sm:pl-8 md:pl-12 lg:pl-24 !w-full sm:!w-[calc(50%-20px)]">
          <div className="flex h-[600px] items-end p-6 sm:p-8 md:p-10 lg:p-10">
            <div className="max-w-md">
              <span className="uppercase text-xs font-bold tracking-wide text-gray-700">
                Example Trips
              </span>
              <h2 className="text-5xl  font-semibold mt-2">Get inspired</h2>
              <p className="text-lg text-gray-600 mt-4">
                Browse our example trips and get in contact to start planning
                your very own adventure.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {trips.length > 0 ? (
          trips.map((item, index) => (
            <SwiperSlide key={item.title || index}>
              <TripCard item={item} />
            </SwiperSlide>
          ))
        ) : (
          <p>Loading Trips...</p>
        )}
      </Swiper>
    </section>
  );
};

export default PopularTrips;
