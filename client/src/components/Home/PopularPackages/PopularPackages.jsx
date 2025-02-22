import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
// import packages from "../../../../public/assets/GlobalData";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../ErrorPage";
import LoadingPage from "../../../LoadingPage";
import api from "../../../api";

const PopularPackages = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  function handleNavigate(type) {
    type === "all"
      ? navigate(`/services/packages`)
      : navigate(`/services/packages/${type}`);
  }

  useEffect(() => {
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;
    if (!carouselDom || !sliderDom || !thumbnailBorderDom) return;

    // Move the first thumbnail item to the end
    const thumbnailItems = thumbnailBorderDom.querySelectorAll(
      `.${styles.item}`
    );
    if (thumbnailItems.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItems[0]);
    }

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextButtonRef.current?.click();
    }, timeAutoNext);

    // Function to show slider
    function showSlider(direction) {
      const sliderItems = sliderDom.querySelectorAll(`.${styles.item}`);
      const thumbnailItems = thumbnailBorderDom.querySelectorAll(
        `.${styles.item}`
      );

      if (direction === "next") {
        sliderDom.appendChild(sliderItems[0]);
        thumbnailBorderDom.appendChild(thumbnailItems[0]);
        carouselDom.classList.add(styles.next);
      } else {
        sliderDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselDom.classList.add(styles.prev);
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove(styles.next);
        carouselDom.classList.remove(styles.prev);
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextButtonRef.current?.click();
      }, timeAutoNext);
    }

    // Attach event handlers (re-enable next button functionality)
    nextButtonRef.current.onclick = () => showSlider("next");
    prevButtonRef.current.onclick = () => showSlider("prev");

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

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
    <div className={`fontMont text-[12px]`}>
      <div ref={carouselRef} className={`${styles.carousel}`}>
        {/* slider list */}
        <div ref={sliderRef} className={`${styles.list}`}>
          {packages.map((item) => (
            <div className={`${styles.item}`} key={item._id}>
              <img src={item.images[0]} alt={item.title} />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div
                className={`${styles.content} flex flex-col md:gap-2 pr-[30%] md:pl-10 lg:pl-28`}
              >
                <div className={`${styles.author} uppercase`}>
                  {item.location}
                </div>
                <div className={`${styles.title} uppercase md:text-5xl`}>
                  {item.title}
                </div>
                <div className={`${styles.des} line-clamp-6`}>{item.desc}</div>
                <div className={`${styles.buttons}`}>
                  <button
                    onClick={() => handleNavigate(item._id)}
                    className="px-2 py-1 md:px-4 md:py-2 font-semibold uppercase text-xs max-w-[150px]"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleNavigate("all")}
                    className="px-2 py-1 md:px-4 md:py-2 font-semibold uppercase text-xs max-w-[150px]"
                  >
                    All Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* thumbnail list */}
        <div ref={thumbnailRef} className={`${styles.thumbnail}`}>
          {packages.map((activity) => (
            <div className={`${styles.item}`} key={activity._id}>
              <img src={activity.images[0]} alt={activity.title} />
              <div className={`${styles.content}`}>
                <div className={`${styles.title}`}>{activity.title}</div>
              </div>
            </div>
          ))}
        </div>
        {/* arrows */}
        <div
          className={`${styles.arrows} gap-1 sm:gap-5 lg:gap-12 left-[10%] sm:left-[15%]`}
        >
          <button ref={prevButtonRef} className="h-10 w-10 md:h-14 md:w-14">
            <i className="ri-arrow-left-wide-line text-lg md:text-xl"></i>
          </button>
          <button ref={nextButtonRef} className="h-10 w-10 md:h-14 md:w-14">
            <i className="ri-arrow-right-wide-line text-lg md:text-xl"></i>
          </button>
        </div>
        {/* running time indicator */}
        <div className={`${styles.time}`}></div>
      </div>
    </div>
  );
};

export default PopularPackages;
