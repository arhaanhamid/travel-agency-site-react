import Header from "../Header/Header";
import Memories from "../Memories/Memories";
import PopularTrips from "../PopularTrips/PopularTrips";

const Home = () => {
  return (
    <div className="main">
      <div className="hero-section flex items-center justify-center">
        <div className="blur-overlay"></div>
        <div className="hero-content flex flex-col items-center text-center text-gray-200 gap-10 md:gap-12">
          <h6 className="text-lg md:text-2xl xl:text-3xl">
            Connecting{" "}
            <em className="text-lg md:text-2xl xl:text-3xl text-green-500">
              your
            </em>
            journey with purpose
          </h6>
          <h3 className="text-4xl md:text-6xl xl:text-7xl">
            Unforgettable travel
            <br />
            experiences with
            <br />a{" "}
            <em className="text-4xl md:text-6xl xl:text-7xl text-green-500">
              positive
            </em>{" "}
            impact
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
