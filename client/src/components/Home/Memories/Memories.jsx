import memoriesCSS from "./memories.module.css";
import { Link } from "react-router-dom";
const memoriesImages = {
  memoriesImg1: "/assets/memories/travelport1.jpg",
  memoriesImg2: "/assets/memories/travelport2.jpg",
  memoriesImg3: "/assets/memories/travelport4.jpg",
  memoriesImg4: "/assets/memories/travelport3.jpg",
  memoriesImg5: "/assets/memories/travelport5.jpg",
  memoriesImg6: "/assets/memories/travelport6.jpg",
  memoriesImg7: "/assets/memories/travelport7.jpg",
};

function Memories() {
  return (
    <div id="memories" className={`${memoriesCSS.Memories_wrapper} `}>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg1} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <Link to="/services/packages?tag=small">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg2} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <Link to="/services/packages?tag=cheap">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg3} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Foody Tours</h3>
          <Link to="/services/packages?tag=tour">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg4} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>
            Let Our Experts Pan <br />
            Your 2024 Jouney
          </h3>
          <Link to="/forms/general">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg5} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <Link to="/services/packages?tag=religious">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg6} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <Link to="/services/packages?tag=solo">View Tours</Link>
        </div>
      </div>
      <div className={`${memoriesCSS.MemoriesCard} lazyLoadRight`}>
        <img src={memoriesImages.memoriesImg7} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <Link to="/services/packages?tag=private">View Tours</Link>
        </div>
      </div>
    </div>
  );
}

export default Memories;
