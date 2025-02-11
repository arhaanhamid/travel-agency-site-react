import Destinations from "./Destinations/Destinations";
import Memories from "./Memories/Memories";
import PopularPackages from "./PopularPackages/PopularPackages";
import Testimonials from "./Testimonials/Testimonials";
import Activities from "./Activities/Activities";
import Hero from "./Hero/Hero";
import Boats from "./Boats/Boats";

const Home = () => {
  return (
    <div className="main  gap-32">
      <Hero />
      <PopularPackages />
      <Destinations />
      <Activities />
      <Memories />
      <Boats />
      <Testimonials />
    </div>
  );
};

export default Home;
