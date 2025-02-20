import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HotelCard from "./HotelCard.jsx";
import { hotelsData } from "../../../../public/assets/GlobalData.js";
import { LeftSwiperArrow } from "../../UIComponents/UIComponents.jsx";
import { RightSwiperArrow } from "../../UIComponents/UIComponents.jsx";

import { useEffect, useState } from "react";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    setHotels(hotelsData); // Force state update to trigger re-render
  }, []);
  return (
    <section className="relative py-16 bg-gray-200 min-h-[800px] flex flex-col gap-10 md:gap-5 md:flex-row lg:flex-row">
      <div className="sm:pl-8 md:pl-6 lg:pl-12 xl:pl-24 w-full md:w-[40%] lg:w-[40%]">
        <div className="flex h-[600px] items-end p-6 sm:p-8 md:p-10 lg:p-10">
          <div className="max-w-md">
            <span className="uppercase text-xs font-bold tracking-wide text-gray-700">
              Popular Hotels
            </span>
            <h2 className="font-montserrat text-4xl font-semibold mt-2 uppercase">
              Get excited
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Browse our popular hotels and get in contact right now to start
              planning your very own vacation in comfort.
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
        // navigation
        className="relative px-4 sm:px-6 lg:px-8 w-full sm:w-[80%] md:w-[60%] lg:w-[60%]"
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        lazy="true"
      >
        {hotels.length > 0 ? (
          hotels.map((hotel, index) =>
            hotel.category == "Premium" ? (
              <SwiperSlide key={hotel.title || index}>
                <HotelCard hotel={hotel} />
              </SwiperSlide>
            ) : (
              ""
            )
          )
        ) : (
          <p>Loading Hotels...</p>
        )}
      </Swiper>
      <LeftSwiperArrow requestFrom="popular-hotels" />
      <RightSwiperArrow requestFrom="popular-hotels" />
    </section>
  );
};

export default Hotels;
