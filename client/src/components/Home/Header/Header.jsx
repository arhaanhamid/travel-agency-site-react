import { useNavigate } from "react-router-dom";

import headerCSS from "./header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import tripsData from "./../../../assets/GlobalData";

function Header() {
  const navigate = useNavigate(); // useNavigate hook to handle navigation

  function handleNavigate(item) {
    navigate(`/services/packages?loc=${item.location}`);
  }

  return (
    <>
      <div className="w-full flex flex-col gap-7 mt-20 px-[0%] sm:px-[4%] md:px-[8%] py-20">
        <div
          className={`relative h-[300px] sm:h-[480px] w-full flex justify-start items-center p-6 sm:p-14 rounded-none sm:rounded-[18px] overflow-hidden ${headerCSS.imageContainer}`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[18px]"></div>
          <h2 className="relative text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[60px]  md:leading-[75px]">
            Explore The World, <br /> One Unforgattable Journey
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 1500 }}
          modules={[Autoplay]}
          className="w-[80%] -mt-20"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {tripsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  className="p-3 bg-white rounded-[12px]"
                  onClick={() => handleNavigate(item)}
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className={`${headerCSS.image} w-full h-full rounded-[12px]`}
                  />
                  <span className="text-xs font-bold text-gray-700">
                    {item.location}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Header;
