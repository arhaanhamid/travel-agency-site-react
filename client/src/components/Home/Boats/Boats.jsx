import { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";
// import { boats } from "../../../../public/assets/GlobalData";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../ErrorPage";
import LoadingPage from "../../../LoadingPage";

import api from "../../../api";

const Boats = () => {
  const [boats, setBoats] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const unAcceptClickRef = useRef(null);

  const navigate = useNavigate();
  function handleNavigate(type) {
    type === "all"
      ? navigate(`/services/boats`)
      : navigate(`/services/boats/${type}`);
  }

  // Function to perform the slide transition
  const showSlider = (type) => {
    // Disable the buttons until the animation is complete
    if (nextButtonRef.current && prevButtonRef.current) {
      nextButtonRef.current.style.pointerEvents = "none";
      prevButtonRef.current.style.pointerEvents = "none";
    }
    const carousel = carouselRef.current;
    const listHTML = listRef.current;
    if (!carousel || !listHTML) return;

    // Remove any animation classes
    carousel.classList.remove(styles.next, styles.prev);

    // Get all slide items by using the module’s item class
    const items = listHTML.querySelectorAll(`.${styles.sliderItem}`);

    if (type === "next") {
      // Move the first slide to the end, then add the "next" class
      listHTML.appendChild(items[0]);
      carousel.classList.add(styles.next);
    } else {
      // Move the last slide to the beginning, then add the "prev" class
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add(styles.prev);
    }

    // Re-enable the buttons after 2000ms (as in your original code)
    clearTimeout(unAcceptClickRef.current);
    unAcceptClickRef.current = setTimeout(() => {
      if (nextButtonRef.current && prevButtonRef.current) {
        nextButtonRef.current.style.pointerEvents = "auto";
        prevButtonRef.current.style.pointerEvents = "auto";
      }
    }, 2000);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(unAcceptClickRef.current);
    };
  }, []);

  //useeffect to get Boats data from db
  useEffect(() => {
    async function fetchBoats() {
      try {
        const response = await api.get("boats");
        setBoats(response.data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBoats();
  }, []);

  if (error) return <ErrorPage />;
  if (loading) return <LoadingPage />;

  return (
    <div
      ref={carouselRef}
      className={`${styles.carousel} xl:py-20 lazyLoadLeft`}
    >
      <div ref={listRef} className={styles.list}>
        {boats.map((boat) => (
          <div className={`${styles.sliderItem} `} key={boat._id}>
            <img
              src={boat.images[0]}
              alt={boat.title}
              className="w-1/2 absolute right-0 top-[55%] sm:top-[60%] rounded-[15px] transform -translate-y-[55%] sm:-translate-y-[60%] transition-[right] duration-[1500ms]"
            />
            <div className={`${styles.introduce} flex flex-col gap-2 sm:gap-5`}>
              <div
                className={`${styles.title} font-montserrat uppercase text-xs sm:text-sm font-medium`}
              >
                {boat.location}
              </div>
              <div
                className={`${styles.topic} font-montserrat leading-tight uppercase text-2xl sm:text-3xl font-semibold`}
              >
                {boat.title}
              </div>
              <div
                className={`${styles.des} text-gray-700 text-xs sm:text-sm leading-[16px] mt-5 line-clamp-6 md:w-[280px] overflow-hidden`}
              >
                {boat.desc}
              </div>

              <div
                className={`flex flex-col items-center mt-5 sm:flex-row sm:gap-5`}
              >
                <button
                  className={`${styles.seeMore} w-max mt-[20px] p-[5px] text-xs sm:text-sm uppercase font-bold tracking-[2px]`}
                  onClick={() => handleNavigate(boat._id)}
                >
                  VIEW DETAILS
                </button>
                <button
                  className={`${styles.seeMore} w-max mt-[20px] p-[5px] text-xs sm:text-sm uppercase font-bold tracking-[2px]`}
                  onClick={() => handleNavigate("all")}
                >
                  SEE ALL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-1 left-2 pb-5 sm:pb-10 w-full max-w-[90%] flex justify-around">
        <button
          id="prev"
          ref={prevButtonRef}
          onClick={() => showSlider("prev")}
          className="w-10 h-10 rounded-full border border-[#5555] text-lg bottom-[20%] left-[10%] flex items-center justify-center hover:bg-white hover:border-none hover:scale-125 transition-all"
        >
          <i className="ri-arrow-left-wide-line text-lg md:text-xl"></i>
        </button>
        <button
          id="next"
          ref={nextButtonRef}
          onClick={() => showSlider("next")}
          className="w-10 h-10 rounded-full border border-[#5555] text-lg bottom-[20%] left-[10%] flex items-center justify-center hover:bg-white hover:border-none hover:scale-125 transition-all"
        >
          <i className="ri-arrow-right-wide-line text-lg md:text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Boats;
