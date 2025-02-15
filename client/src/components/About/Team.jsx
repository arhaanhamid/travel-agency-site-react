import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { teamsData } from "../../assets/GlobalData";

import { useEffect, useState } from "react";
import { LeftSwiperArrow } from "../../components/UIComponents/UIComponents";
import { RightSwiperArrow } from "../../components/UIComponents/UIComponents";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    setTeams(teamsData); // Force state update to trigger re-render
  }, []);
  return (
    <section
      className={`about relative px-5 sm:px-10 md:px-16 lg:px-10 xl:px-20 md:py-10`}
    >
      <h1 className="text-3xl md:text-[40px] xl:text-[50px] text-center text-blue-500 mb-10 lg:mb-20">
        Our Team
      </h1>

      {/* Carousel Container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
        }}
        // loop={true}
        // navigation
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        lazy="true"
      >
        {teams.length > 0 ? (
          teams.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:gap-16 xl:gap-20">
                <div className="flex flex-col">
                  <h4 className="text-[26px] font-semibold xl:text-[32px] text-center lg:text-start text-blue-500">
                    {item.name}
                  </h4>
                  <h5 className="text-[12px] font-semibold xl:text-[32px] text-center lg:text-start text-blue-500">
                    {item.title}
                  </h5>
                  <p className="text-sm mt-5 text-center lg:text-start text-gray-700 leading-7">
                    {item.desc}
                  </p>
                </div>

                <div className="row-start-1 lg:col-start-2 h-[250px] w-[200px] sm:h-[300px] sm:w-[250px] md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-full  mb-5 sm:mb-10 place-self-center relative overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="px-1 w-auto h-full z-0 object-cover transition-transform duration-300 ease-in-out hover:scale-125"
                    loading="lazy"
                  />

                  <div
                    className={`absolute w-full  text-white p-3 sm:p-4 px-5 lg:px-3 xl:px-10 bottom-0 left-0 bg-gradient-to-t from-gray-600 via-black/80  pt-4 sm:pt-6 md:pt-10`}
                  >
                    <h5 className="uppercase text-[10px] sm:text-[14px] md:text-[12px] sm:mb-2 font-semibold">
                      {item.title}
                    </h5>
                    <h3
                      className={`text-[15px] sm:text-[20px] md:text-[20px] uppercase font-semibold  mb-0`}
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading Team Information...</p>
        )}
      </Swiper>
      <LeftSwiperArrow requestFrom="about" />
      <RightSwiperArrow requestFrom="about" />
    </section>
  );
};

export default Team;
