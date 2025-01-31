import Header from "../Header/Header";
import Memories from "../Memories/Memories";
import PopularTrips from "../PopularTrips/PopularTrips";

const Home = () => {
  return (
    <div className="main">
      <div className="hero-section">
        <div className="blur-overlay"></div>
        <div className="hero-content">
          <h6>Connecting your journey with purpose</h6>
          <h3>
            Unforgettable travel
            <br />
            experiences with
            <br />a <em>positive</em> impact
          </h3>
        </div>
      </div>
      <Header />
      <Memories />
      <PopularTrips />
    </div>
  );
};

export default Home;
