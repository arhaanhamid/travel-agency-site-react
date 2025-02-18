import memoriesCSS from "./memories.module.css";
import MemoriesImg1 from "../../../assets/memories/travelport1.jpg";
import MemoriesImg2 from "../../../assets/memories/travelport2.jpg";
import MemoriesImg3 from "../../../assets/memories/travelport4.jpg";
import MemoriesImg4 from "../../../assets/memories/travelport3.jpg";
import MemoriesImg5 from "../../../assets/memories/travelport5.jpg";
import MemoriesImg6 from "../../../assets/memories/travelport6.jpg";
import MemoriesImg7 from "../../../assets/memories/travelport7.jpg";
import { useNavigate } from "react-router-dom";

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
        <img src={MemoriesImg1} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <span onClick={() => handleDiscoverTrip("small")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg2} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <span onClick={() => handleDiscoverTrip("cheap")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg3} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Undiscover Tours</h3>
          <span onClick={() => handleDiscoverTrip("random")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg4} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>
            Let Our Experts Pan <br />
            Your 2024 Jouney
          </h3>
          <span onClick={() => handleDiscoverTrip("expert")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg5} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <span onClick={() => handleDiscoverTrip("religious")}>
            View Tours
          </span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg6} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <span onClick={() => handleDiscoverTrip("solo")}>View Tours</span>
        </div>
      </div>
      <div className={memoriesCSS.MemoriesCard}>
        <img src={MemoriesImg7} alt="Memories-img" />

        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <span onClick={() => handleDiscoverTrip("private")}>View Tours</span>
        </div>
      </div>
    </div>
  );
}

export default Memories;
