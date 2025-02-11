import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import tripsData from "../../../assets/GlobalData";

function Destinations() {
  const navigate = useNavigate(); // useNavigate hook to handle navigation

  function handleNavigate(item) {
    navigate(`/services/packages?loc=${item.location}`);
  }

  return (
    <div className="w-full flex flex-col gap-7 px-[0%] sm:px-[4%] md:px-[8%]">
      <div
        className={`relative h-[300px] sm:h-[480px] w-full flex justify-start items-center p-6 sm:p-14 rounded-none sm:rounded-[18px] overflow-hidden ${styles.imageContainer}`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[18px]"></div>
        <h2 className="font-montserrat relative text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[60px]  md:leading-[75px]">
          Explore The World, <br /> One Unforgettable Journey
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
        className="w-[80%] md:w-[90%] -mt-20 md:-mt-28"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {tripsData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className={`${styles.slide} p-2 bg-white`}
                onClick={() => handleNavigate(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className={`${styles.image} w-full h-full rounded-[12px]`}
                />
                <span className="text-xs font-montserrat uppercase font-semibold text-gray-700">
                  {item.location}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Destinations;
