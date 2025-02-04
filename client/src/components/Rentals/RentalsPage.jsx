import { useEffect } from "react";
import styles from "./style.module.css";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";

const RentalsPage = () => {
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
    <div className={`${styles.font_poppins} text-[12px]`}>
      {/* carousel */}
      <div className={`${styles.carousel}`}>
        {/* list item */}
        <div className={`${styles.list}`}>
          <div className={`${styles.item}`}>
            <img src={img1} alt="img1" />
            <div className={`${styles.content}`}>
              <div className={`${styles.author}`}>LUNDEV</div>
              <div className={`${styles.title}`}>DESIGN SLIDER</div>
              <div className={`${styles.topic}`}>ANIMAL</div>
              <div className={`${styles.des}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={`${styles.buttons}`}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img2} alt="img2" />
            <div className={`${styles.content}`}>
              <div className={`${styles.author}`}>LUNDEV</div>
              <div className={`${styles.title}`}>DESIGN SLIDER</div>
              <div className={`${styles.topic}`}>ANIMAL</div>
              <div className={`${styles.des}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={`${styles.buttons}`}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img3} alt="img3" />
            <div className={`${styles.content}`}>
              <div className={`${styles.author}`}>LUNDEV</div>
              <div className={`${styles.title}`}>DESIGN SLIDER</div>
              <div className={`${styles.topic}`}>ANIMAL</div>
              <div className={`${styles.des}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={`${styles.buttons}`}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img4} alt="img4" />
            <div className={`${styles.content}`}>
              <div className={`${styles.author}`}>LUNDEV</div>
              <div className={`${styles.title}`}>DESIGN SLIDER</div>
              <div className={`${styles.topic}`}>ANIMAL</div>
              <div className={`${styles.des}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={`${styles.buttons}`}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        {/* list thumbnail */}
        <div className={`${styles.thumbnail}`}>
          <div className={`${styles.item}`}>
            <img src={img1} alt="img1 thumbnail" />
            <div className={`${styles.content}`}>
              <div className={`${styles.title}`}>Name Slider</div>
              <div className={`${styles.description}`}>Description</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img2} alt="img2 thumbnail" />
            <div className={`${styles.content}`}>
              <div className={`${styles.title}`}>Name Slider</div>
              <div className={`${styles.description}`}>Description</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img3} alt="img3 thumbnail" />
            <div className={`${styles.content}`}>
              <div className={`${styles.title}`}>Name Slider</div>
              <div className={`${styles.description}`}>Description</div>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <img src={img4} alt="img4 thumbnail" />
            <div className={`${styles.content}`}>
              <div className={`${styles.title}`}>Name Slider</div>
              <div className={`${styles.description}`}>Description</div>
            </div>
          </div>
        </div>
        {/* next/prev */}
        <div className={`${styles.arrows}`}>
          <button id="prev">-</button>
          <button id="next">+</button>
        </div>
        {/* time running */}
        <div className={`${styles.time}`}></div>
      </div>
    </div>
  );
};

export default RentalsPage;
