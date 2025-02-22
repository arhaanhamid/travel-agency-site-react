import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useParams } from "react-router-dom";
// import tripsData from "../../../../public/assets/GlobalData";
import { iconsData } from "../../../../public/assets/GlobalData";
import {
  LeftSwiperArrow,
  RightSwiperArrow,
} from "../../UIComponents/UIComponents";
import Modal from "../../UIComponents/Modal";
import ErrorPage from "../../../ErrorPage";
import LoadingPage from "../../../LoadingPage";
import api from "../../../api";

const PackageDetailPage = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState({
    book: false,
    inquire: false,
    subject: "",
  });

  const { dataId } = useParams();
  console.log(dataId);

  //useeffect to get data from db
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`packages/${dataId}`);
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError(true);
        setData("");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [dataId]);

  if (error) return <ErrorPage />;
  if (loading) return <LoadingPage />;

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
          {data.images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative max-w-screen-md mb-8 h-64 sm:h-80 md:h-96 mx-auto">
                  <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-black/70 via-transparent"></div>
                  <img
                    src={image}
                    alt={data.title}
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
          {/* Product Details */}
          <div className="p-3 sm:px-5 md:px-8 lg:px-28 flex flex-col gap-5 md:gap-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {data.title}
            </h1>

            {/* <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                4.5 ★
              </span>
              <span className="text-sm text-gray-500 ml-2">1,234 reviews</span>
            </div> */}

            {/* Travel Inclusive Items */}
            <div className="text-sm text-gray-700">
              <h1 className="font-bold">Package Amenities:</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.amenities.map((item, index) => {
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
                        {item.label == "duration" && "-Day Trip"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="flex items-center justify-between mt-3">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  {data.price}
                  <small className="font-normal text-xs">PP</small>
                </span>
              </div>
            </div> */}

            <div className="flex space-x-4 lg:">
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    subject: data.title,
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
                    subject: data.title,
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
          <p>{data.desc}</p>
        </div>
        {/* Timeline Section */}
        <div className="mx-auto mt-12 max-w-full">
          <h1 className="text-center font-bold mb-5 shadow uppercase">
            {`What we're gonna do...`}
          </h1>
          <div className="relative wrap overflow-hidden p-0 sm:p-5">
            <div className="absolute border-transparent md:border-gray-700 md:border-opacity-20 h-full border left-1/2" />
            {data.timelineData.map((item, index) => {
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
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} requestFrom="package" />
    </div>
  );
};

export default PackageDetailPage;
