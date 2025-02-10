import { useEffect } from "react";
import styles from "./style.module.css";

import { activitiesData } from "../../../assets/GlobalData";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate(); // useNavigate hook to handle navigation

  function handleNavigate(type) {
    type === "all"
      ? navigate(`/services/activities`)
      : navigate(`/services/activities/${type}`);
  }

  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");

    const carouselDom = document.querySelector(`.${styles.carousel}`);
    if (!carouselDom) return;

    const sliderDom = carouselDom.querySelector(`.${styles.list}`);
    const thumbnailBorderDom = document.querySelector(`.${styles.thumbnail}`);
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(
      `.${styles.item}`
    );

    // Initial setup: move the first thumbnail item to the end (or as required)
    if (thumbnailItemsDom.length > 0) {
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }

    let timeRunning = 3000;
    let timeAutoNext = 700000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    // Function to show slider
    function showSlider(type) {
      const SliderItemsDom = sliderDom.querySelectorAll(`.${styles.item}`);
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(
        `.${styles.item}`
      );

      if (type === "next") {
        sliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add(styles.next); // If you need to animate, you might consider adding a CSS module class.
      } else {
        sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add(styles.prev);
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove(styles.next);
        carouselDom.classList.remove(styles.prev);
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }

    // Attach event handlers
    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };

    // Cleanup timeouts when the component unmounts
    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <div className={`${styles.font_poppins} text-[12px] mb-20`}>
      {/* carousel */}
      <div className={`${styles.carousel}`}>
        {/* list item */}
        <div className={`${styles.list}`}>
          {activitiesData.map((activity) => (
            <div className={`${styles.item}`} key={activity.id}>
              <img src={activity.images[0]} alt={activity.title} />
              <div className="absolute inset-0 bg-black opacity-30"></div>

              <div className={`${styles.content}`}>
                <div className={`${styles.author} uppercase`}>
                  {activity.location}
                </div>
                <div className={`${styles.title} uppercase`}>
                  {activity.title}
                </div>
                {/* <div className={`${styles.topic}`}>ANIMAL</div> */}
                <div className={`${styles.des} line-clamp-6`}>
                  {activity.desc}
                </div>
                <div className={`${styles.buttons}`}>
                  <button onClick={() => handleNavigate(activity.id)}>
                    View Details
                  </button>
                  <button onClick={() => handleNavigate("all")}>
                    All Activities
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* list thumbnail */}
        <div className={`${styles.thumbnail}`}>
          {activitiesData.map((activity) => (
            <div className={`${styles.item}`} key={activity.id}>
              <img src={activity.images[0]} alt={activity.title} />

              <div className={`${styles.content}`}>
                <div className={`${styles.title}`}>{activity.title}</div>
                {/* <div className={`${styles.description} line-clamp-1`}>
                  {activity.desc}
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* next/prev */}
        <div
          className={`${styles.arrows} gap-1 sm:gap-5 lg:gap-12 left-[10%] sm:left-[15%]`}
        >
          <button id="prev" className="h-10 w-10 md:h-14 md:w-14">
            <i className="ri-arrow-left-wide-line text-lg md:text-xl"></i>
          </button>
          <button id="next" className="h-10 w-10 md:h-14 md:w-14">
            <i className="ri-arrow-right-wide-line text-lg md:text-xl"></i>
          </button>
        </div>
        {/* time running */}
        <div className={`${styles.time}`}></div>
      </div>
    </div>
  );
};

export default Activities;
