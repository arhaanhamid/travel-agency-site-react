import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { testimonialsData } from "../../../../public/assets/GlobalData";

import { useEffect, useState } from "react";
import { LeftSwiperArrow } from "./../../UIComponents/UIComponents";
import { RightSwiperArrow } from "./../../UIComponents/UIComponents";
import { useLocation } from "react-router-dom";
import ErrorPage from "../../../ErrorPage";
import LoadingPage from "../../../LoadingPage";

import api from "../../../api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const contactPadding = "mt-10 md:mt-20 sm:px-2 md:px-4 lg:px-8 xl:px-28";

  //useeffect to get Testimonials data from db
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await api.get("testimonials");
        setTestimonials(response.data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (error) return <ErrorPage />;
  if (loading) return <LoadingPage />;

  return (
    <section
      className={`relative pb-32 ${location.pathname === "/contact" ? contactPadding : "sm:px-10 md:px-16 lg:px-36 xl:px-80"}`}
    >
      <h1 className="text-[30px] md:text-[40px] xl:text-[50px] text-center text-indigo-500">
        What our clients say
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
        loop={true}
        // navigation
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        lazy="true"
      >
        {testimonials.length > 0 ? (
          testimonials.map((item, index) => (
            <SwiperSlide key={item._id || index}>
              <div className="content relative p-10">
                <span className="absolute top-0 left-2 text-[70px] text-indigo-500">
                  “
                </span>
                <p className="text-sm text-center text-gray-700 leading-7">
                  {item.desc}
                </p>
                <span className="absolute bottom-0 right-2 rotate-180 text-[70px] text-indigo-500">
                  “
                </span>
              </div>
              <h4 className="text-[26px] xl:text-[32px] text-center text-indigo-500">
                {item.name}
              </h4>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading Testimonials...</p>
        )}
      </Swiper>
      <LeftSwiperArrow requestFrom="testimonials" />
      <RightSwiperArrow requestFrom="testimonials" />
    </section>
  );
};

export default Testimonials;

// import TripCard from "./TripCard.jsx";

// import { useEffect, useState } from "react";

// const PopularTrips = () => {
//   const [trips, setTrips] = useState([]);
//   useEffect(() => {
//     setTrips(tripsData); // Force state update to trigger re-render
//   }, []);
//   return (
//     <section
//       id="popular_trips"
//       className="relative py-16 bg-[#e2e2e2] min-h-[800px] flex flex-col gap-10 md:gap-5 md:flex-row lg:flex-row"
//     >
//       <div className="pl-6 sm:pl-8 md:pl-12 lg:pl-24 w-full md:w-[40%] lg:w-[40%]">
//         <div className="flex h-[600px] items-end p-6 sm:p-8 md:p-10 lg:p-10">
//           <div className="max-w-md">
//             <span className="uppercase text-xs font-bold tracking-wide text-gray-700">
//               Example Trips
//             </span>
//             <h2 className="text-5xl  font-semibold mt-2">Get inspired</h2>
//             <p className="text-lg text-gray-600 mt-4">
//               Browse our example trips and get in contact to start planning your
//               very own adventure.
//             </p>
//           </div>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={20}
//         slidesPerView={1}
//         loop={true}
//         breakpoints={{
//           768: { slidesPerView: 1 },
//           1024: { slidesPerView: 2 },
//           1280: { slidesPerView: 2 },
//         }}
//         // navigation
//         className="relative px-4 sm:px-6 lg:px-8 w-full sm:w-[80%] md:w-[60%] lg:w-[60%]"
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         lazy="true"
//       >
//         {trips.length > 0 ? (
//           trips.map((trip, index) =>
//             trip.isPopular ? (
//               <SwiperSlide key={trip.title || index}>
//                 <TripCard trip={trip} />
//               </SwiperSlide>
//             ) : (
//               ""
//             )
//           )
//         ) : (
//           <p>Loading Trips...</p>
//         )}
//       </Swiper>
//       <LeftSwiperArrow requestFrom="popular-trips" />
//       <RightSwiperArrow requestFrom="popular-trips" />
//     </section>
//   );
// };
