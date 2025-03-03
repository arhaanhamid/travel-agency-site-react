import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ErrorPage from "../../../ErrorPage";
import LoadingPage from "../../../LoadingPage";

import { useEffect, useState } from "react";
import api from "../../../api";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../UIComponents/ThreeDCard";

function Destinations() {
  const [packagesData, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // useNavigate hook to handle navigation

  function handleNavigate(item) {
    navigate(`/services/packages?loc=${item.location}`);
  }

  //useeffect to get Packages data from db
  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await api.get("packages");
        setPackages(response.data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPackages();
  }, []);

  if (error) return <ErrorPage />;
  if (loading) return <LoadingPage />;

  return (
    <div className="w-full h-screen flex flex-col lazyLoadRight">
      <div
        className={`relative h-[480px] sm:h-[500px] xl:h-[550px] w-full flex justify-start items-center p-6 sm:p-14 overflow-hidden ${styles.imageContainer}`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h2 className="relative text-white text-2xl sm:text-3xl md:text-4xl leading-[40px] sm:leading-[60px]  md:leading-[75px] z-50">
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
        className="w-[80%] md:w-[70%] -mt-20 md:-mt-28"
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
        {packagesData.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <CardContainer requestFrom="destinations">
                <CardBody
                  className={`${styles.slide} p-2 m-2 bg-white overflow-hidden cursor-pointer`}
                  onClick={() => handleNavigate(item)}
                  requestFrom="destinations"
                >
                  <CardItem
                    translateZ={10}
                    rotateX={10}
                    rotateZ={-2}
                    className="w-full mt-4"
                  >
                    {/* <img
                      src={item.images[0]}
                      alt={item.title}
                      className={`w-full h-full rounded-[12px]`}
                    /> */}
                    <picture>
                      <source srcSet={item.images[0].avif} type="image/avif" />
                      <source srcSet={item.images[0].webp} type="image/webp" />
                      <img
                        src={item.images[0].jpg}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-full rounded-[12px]`}
                      />
                    </picture>
                  </CardItem>
                  <CardItem
                    translateZ={10}
                    translateX={5}
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    <span className="text-xs uppercase font-semibold text-gray-700 tracking-[1px]">
                      {item.location}
                    </span>
                  </CardItem>
                </CardBody>
              </CardContainer>

              {/* <div
                className={`${styles.slide} p-2 m-2 bg-white overflow-hidden`}
                onClick={() => handleNavigate(item)}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className={`${styles.image} w-full h-full rounded-[12px]`}
                />
                <span className="text-xs uppercase font-semibold text-gray-700 tracking-[1px]">
                  {item.location}
                </span>
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Destinations;
