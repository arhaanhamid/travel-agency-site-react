import { useRef, useEffect } from "react";
import styles from "./style.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";

const Testpage = () => {
  // References for carousel elements
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const unAcceptClickRef = useRef(null);

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
    const items = listHTML.querySelectorAll(`.${styles.item}`);

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

  // Called when a "SEE MORE" button is clicked
  const handleSeeMore = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    // Remove any slide animation classes and show details
    carousel.classList.remove(styles.next, styles.prev);
    carousel.classList.add(styles.showDetail);
  };

  // Called when the "See All" (back) button is clicked
  const handleBack = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.classList.remove(styles.showDetail);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      clearTimeout(unAcceptClickRef.current);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Lundev</div>
        <nav>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      {/* Carousel */}
      <div ref={carouselRef} className={styles.carousel}>
        <div ref={listRef} className={styles.list}>
          {/* Slide Item 1 */}
          <div className={styles.item}>
            <img src={img1} alt="img1" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide Item 2 */}
          <div className={styles.item}>
            <img src={img2} alt="img2" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide Item 3 */}
          <div className={styles.item}>
            <img src={img3} alt="img3" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide Item 4 */}
          <div className={styles.item}>
            <img src={img4} alt="img4" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide Item 5 */}
          <div className={styles.item}>
            <img src={img5} alt="img5" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>

          {/* Slide Item 6 */}
          <div className={styles.item}>
            <img src={img6} alt="img6" />
            <div className={styles.introduce}>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>Aerphone</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos quidem atque et eligendi
                aperiam voluptates beatae maxime.
              </div>
              <button className={styles.seeMore} onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>Aerphone GHTK</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi, modi explicabo quod
                corrupti impedit illo, accusantium in eaque nam quia adipisci
                aut distinctio porro eligendi. Reprehenderit nostrum
                consequuntur ea! Accusamus architecto dolores modi ducimus
                facilis quas voluptatibus! Tempora ratione accusantium magnam
                nulla tenetur autem beatae.
              </div>
              <div className={styles.specifications}>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </div>
              <div className={styles.checkout}>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className={styles.arrows}>
          <button
            id="prev"
            ref={prevButtonRef}
            onClick={() => showSlider("prev")}
          >
            {"<"}
          </button>
          <button
            id="next"
            ref={nextButtonRef}
            onClick={() => showSlider("next")}
          >
            {">"}
          </button>
          <button id="back" ref={backButtonRef} onClick={handleBack}>
            See All &#8599;
          </button>
        </div>
      </div>
    </>
  );
};

export default Testpage;
