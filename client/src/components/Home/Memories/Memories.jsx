import memoriesCSS from "./memories.module.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleDiscoverTrip = (type) => {
    switch (type) {
      case "small":
        navigate(`/services/packages/`);
        break;
      case "cheap":
        navigate(`/services/packages/`);
        break;
      case "random":
        navigate(`/services/packages/`);
        break;
      case "expert":
        navigate(`/services/packages/`);
        break;
      case "religious":
        navigate(`/services/packages/`);
        break;
      case "solo":
        navigate(`/services/packages/`);
        break;
      case "private":
        navigate(`/services/packages/`);
        break;
      default:
        navigate(`/services/packages/`);
        break;
    }
  };
  return (
    <div id="memories" className={`${memoriesCSS.Memories_wrapper} `}>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg1} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <span onClick={() => handleDiscoverTrip("small")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg2} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <span onClick={() => handleDiscoverTrip("cheap")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg3} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Undiscover Tours</h3>
          <span onClick={() => handleDiscoverTrip("random")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg4} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>
            Let Our Experts Pan <br />
            Your 2024 Jouney
          </h3>
          <span onClick={() => handleDiscoverTrip("expert")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg5} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <span onClick={() => handleDiscoverTrip("religious")}>
            View Tours
          </span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg6} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <span onClick={() => handleDiscoverTrip("solo")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={memoriesImages.memoriesImg7} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <span onClick={() => handleDiscoverTrip("private")}>View Tours</span>
        </div>
      </div>
    </div>
  );
}

export default Memories;
