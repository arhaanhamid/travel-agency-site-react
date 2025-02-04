import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useParams } from "react-router-dom";
import tripsData from "../../assets/TripsData";
import {
  LeftSwiperArrow,
  RightSwiperArrow,
} from "../UIComponents/UIComponents";

const CarDetailPage = () => {
  const [tripData, setTripData] = useState("");
  const [loading, setLoading] = useState(true);

  const { packageId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const data = tripsData.filter((item) => item.id == packageId);
        setTripData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTripData([]);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [packageId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  function handleInquire() {
    alert("Package Inquiry Form Here");
  }

  function handleBook() {
    alert("Package Booking Form Here");
  }

  return (
    <div className=" bg-gray-200">
      <div className="relative max-w-screen-lg mx-auto py-24 sm:py-24 md:py-124 lg:py-24 px-1">
        {/* Image Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          lazy="true"
        >
          {tripData.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative max-w-screen-md mb-8 h-64 sm:h-80 md:h-96 mx-auto">
                  <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-black/70 via-transparent"></div>
                  <img
                    src={image}
                    alt={tripData.title}
                    className="w-full object-cover h-64 sm:h-80 md:h-96 rounded-lg"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-bold uppercase tracking-wide px-3 py-1 bg-black text-gray-200">
                    {tripData.location}
                  </span>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h5 className="text-sm sm:text-base font-bold text-white">
                      {tripData.duration}-Day Trip
                    </h5>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100 leading-tight">
                      {tripData.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <LeftSwiperArrow />
          <RightSwiperArrow />
        </Swiper>

        {/* Travel Inclusive Items */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {tripData.inclusions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-2 rounded-md min-w-[80px] sm:min-w-[100px] py-2"
            >
              <i className={`${item.icon} text-2xl sm:text-[30px]`}></i>
              <span className="text-xs sm:text-sm mt-1">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Description */}
        <div className="mt-12 max-w-screen-md mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
          <p className="pb-6">{tripData.desc}</p>
        </div>
        {/* Timeline Section */}
        <div className="mx-auto mt-12 max-w-full">
          <div className="relative wrap overflow-hidden p-0 sm:p-5">
            <div className="absolute border-transparent md:border-gray-700 md:border-opacity-20 h-full border left-1/2" />
            {tripData.timelineData.map((item, index) => {
              const isRight = index % 2 === 0;
              const bgColor = isRight ? "bg-gray-400" : "bg-green-500";
              const textColor = isRight ? "text-gray-800" : "text-white";
              return (
                <div
                  key={index}
                  className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
                    !isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* This spacer is hidden on small screens */}
                  <div className="hidden md:block md:w-5/12" />
                  <div className="z-20 mb-3 mt-5 md:mb-0 md:mt-0 flex items-center bg-gray-800 shadow-xl w-8 h-8 rounded-full ">
                    <h1 className="mx-auto text-white font-semibold text-lg">
                      {index + 1}
                    </h1>
                  </div>
                  <div
                    className={`w-full md:w-5/12 p-4 rounded-lg shadow-xl ${bgColor} ${textColor}`}
                  >
                    <h3 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
                      {item.day}
                    </h3>
                    <h3 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                      {item.title}
                    </h3>
                    <p className="block mb-8 font-sans text-base antialiased font-semibold leading-relaxed">
                      {item.summary}
                    </p>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex items-center justify-evenly w-full mt-20">
          <button
            className="h-[60px] md:w-[200px] lg:w-[250px] bg-black hover:bg-white hover:text-black border border-black hover:border-solid rounded-lg"
            onClick={handleInquire}
          >
            Inquire More
          </button>
          <button
            className="h-[60px] md:w-[200px] lg:w-[250px] bg-black hover:bg-white hover:text-black border border-black hover:border-solid rounded-lg"
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
