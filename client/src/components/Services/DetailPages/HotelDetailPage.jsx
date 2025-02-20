import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useParams } from "react-router-dom";
import { hotelsData } from "../../../../public/assets/GlobalData";
import { iconsData } from "../../../../public/assets/GlobalData";
import {
  LeftSwiperArrow,
  RightSwiperArrow,
} from "../../UIComponents/UIComponents";
import Modal from "../../UIComponents/Modal";

const HotelDetailPage = () => {
  const [hotelData, setHotelData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState({
    book: false,
    inquire: false,
    subject: "",
  });

  const { hotelId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const data = hotelsData.filter((item) => item.id == hotelId);
        setHotelData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setHotelData([]);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [hotelId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
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
          {hotelData.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative max-w-screen-md mb-8 h-64 sm:h-80 md:h-96 mx-auto">
                  <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-black/70 via-transparent"></div>
                  <img
                    src={image}
                    alt={hotelData.title}
                    className="w-full object-cover h-64 sm:h-80 md:h-96 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          <LeftSwiperArrow />
          <RightSwiperArrow />
        </Swiper>

        {/* component */}
        <div className="w-full mx-auto rounded-lg overflow-hidden">
          {/* Hotel Details */}
          <div className="p-3 sm:px-5 md:px-8 lg:px-28 flex flex-col gap-5 md:gap-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {hotelData.title}
            </h1>

            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                4.5 ★
              </span>
              <span className="text-sm text-gray-500 ml-2">1,234 reviews</span>
            </div>

            {/* Hotel Inclusive Items */}
            <div className="text-sm text-gray-700">
              <h1 className="font-bold">Hotel Amenities:</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {hotelData.amenities.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex lg:flex-col lg:items-center gap-2 border-2 rounded-md min-w-[80px] sm:min-w-[100px] py-2"
                    >
                      <i
                        className={`${iconsData[item.label]} text-2xl sm:text-[30px]`}
                      ></i>
                      <span className="text-xs sm:text-sm mt-1">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="flex items-center justify-between mt-3">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  ₹{hotelData.price}
                  <small className="font-normal text-xs text-gray-600">
                    /night
                  </small>
                </span>
              </div>
            </div> */}

            <div className="flex space-x-4 lg:">
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    subject: hotelData.title,
                    book: true,
                  }))
                }
              >
                Book Now
              </button>
              <button
                className="flex-1 bg-gray-200 hover:bg-indigo-700 text-indigo-700 hover:text-gray-200 border-2 border-solid border-indigo-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    subject: hotelData.title,
                    inquire: true,
                  }))
                }
              >
                Inquire More
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 p-3 max-w-screen-md mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>{hotelData.desc}</p>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} requestFrom="hotel" />
    </div>
  );
};

export default HotelDetailPage;
