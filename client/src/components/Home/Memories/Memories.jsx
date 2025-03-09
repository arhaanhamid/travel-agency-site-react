import memoriesCSS from "./memories.module.css";
import { Link } from "react-router-dom";
const memoriesImages = {
  memories1: {
    avif: "/assets/memories/travelport1.avif",
    webp: "/assets/memories/travelport1.webp",
    jpg: "/assets/memories/travelport1.jpg",
  },
  memories2: {
    avif: "/assets/memories/travelport2.avif",
    webp: "/assets/memories/travelport2.webp",
    jpg: "/assets/memories/travelport2.jpg",
  },
  memories3: {
    avif: "/assets/memories/travelport3.avif",
    webp: "/assets/memories/travelport3.webp",
    jpg: "/assets/memories/travelport3.jpg",
  },
  memories4: {
    avif: "/assets/memories/travelport4.avif",
    webp: "/assets/memories/travelport4.webp",
    jpg: "/assets/memories/travelport4.jpg",
  },
  memories5: {
    avif: "/assets/memories/travelport5.avif",
    webp: "/assets/memories/travelport5.webp",
    jpg: "/assets/memories/travelport5.jpg",
  },
  memories6: {
    avif: "/assets/memories/travelport6.avif",
    webp: "/assets/memories/travelport6.webp",
    jpg: "/assets/memories/travelport6.jpg",
  },
  memories7: {
    avif: "/assets/memories/travelport7.avif",
    webp: "/assets/memories/travelport7.webp",
    jpg: "/assets/memories/travelport7.jpg",
  },
};

function Memories() {
  return (
    <div id="memories" className={`${memoriesCSS.Memories_wrapper} `}>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories1.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories1.webp} type="image/webp" />
          <img
            src={memoriesImages.memories1.jpg}
            alt="Memory Image 1"
            loading="lazy"
          />
        </picture>

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <Link to="/services/packages?tag=small">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories2.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories2.webp} type="image/webp" />
          <img
            src={memoriesImages.memories2.jpg}
            alt="Memory Image 2"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <Link to="/services/packages?tag=cheap">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories3.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories3.webp} type="image/webp" />
          <img
            src={memoriesImages.memories3.jpg}
            alt="Memory Image 3"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>Foody Tours</h3>
          <Link to="/services/packages?tag=tour">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories4.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories4.webp} type="image/webp" />
          <img
            src={memoriesImages.memories4.jpg}
            alt="Memory Image 4"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>
            Let Our Experts Pan <br />
            Your 2024 Jouney
          </h3>
          <Link to="/forms/general">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories5.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories5.webp} type="image/webp" />
          <img
            src={memoriesImages.memories5.jpg}
            alt="Memory Image 5"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <Link to="/services/packages?tag=religious">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories6.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories6.webp} type="image/webp" />
          <img
            src={memoriesImages.memories6.jpg}
            alt="Memory Image 6"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <Link to="/services/packages?tag=solo">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <picture>
          <source srcSet={memoriesImages.memories7.avif} type="image/avif" />
          <source srcSet={memoriesImages.memories7.webp} type="image/webp" />
          <img
            src={memoriesImages.memories7.jpg}
            alt="Memory Image 7"
            loading="lazy"
          />
        </picture>
        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <Link to="/services/packages?tag=private">View Tours</Link>
        </div>
      </div>
    </div>
  );
}

export default Memories;
