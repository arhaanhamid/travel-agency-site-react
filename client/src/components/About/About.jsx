import { useLocation } from "react-router-dom";
import Team from "./Team";
import { useEffect } from "react";
const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section className="about mt-[80px]">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          className="absolute h-full w-full object-cover object-[70%]"
          src="/assets/destinations_panaroma_03.jpg"
          alt="hero background"
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="w-max h-full flex flex-col justify-center pl-5 sm:pl-10 md:pl-20 lg:pl-28 xl:pl-40">
          <h2 className="font-montserrat tracking-normal leading-[1.3] text-white mb-4 text-4xl lg:text-4xl z-10">
            About Us
          </h2>
          <p className="font-montserrat text-sm md:text-xl font-normal leading-relaxed text-gray-200 mb-10 z-10">
            Discover our journey and vision.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col -mt-20 max-w-[90%] md:max-w-[80%] mx-auto bg-white rounded-lg pb-10 gap-20">
        {/* Why Choose Us Section */}
        <div
          id="whychooseus"
          className="flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center lg:h-screen gap-10 sm:gap-14 lg:gap-5 sm:px-10 md:sm:px-16 lg:sm:px-8"
        >
          <div className="h-[600px] w-full relative overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg lazyLoadLeft">
            <img
              src="/assets/hero_bg.jpg"
              alt="hero_image"
              className="absolute px-1 left-0 top-0 w-full h-full z-0 object-cover"
            />
          </div>
          <div className="lazyLoadRight">
            <h1 className="text-3xl md:text-[40px] xl:text-[50px] text-center text-indigo-500 mb-10 lazyLoadRight">
              Why Choose Us?
            </h1>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed md:leading-[28px] max-w-3xl px-5 mx-auto lazyLoadRight">
              We are a leading travel agency committed to making your travel
              dreams come true. With years of experience, personalized service,
              and unique travel experiences, we ensure every journey is
              unforgettable. Our expert team designs custom itineraries tailored
              to your interests, providing insider access to hidden gems around
              the world. Trust us to take care of all the details while you
              relax and enjoy the adventure.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div id="ourteam" className="lazyLoadDown">
          <Team />
        </div>

        {/* Work With Us Section */}
        <div
          id="workwithus"
          className="flex flex-col lg:grid lg:grid-cols-2 h-screen py-auto my-auto lg:mx-10 lg:gap-10"
        >
          <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] lg:w-full mb-10 w-full relative overflow-hidden rounded-none md:rounded-lg flex items-center justify-center lazyLoadLeft">
            <img
              src="/assets/hero_bg.jpg"
              alt="hero_image"
              className="px-1 w-auto h-full z-0 object-cover transition-transform duration-300 ease-in-out hover:scale-125"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col sm:px-10 md:px-16 lg:px-1 place-self-center lazyLoadRight">
            <h1 className="text-3xl md:text-[40px] xl:text-[50px] text-center lg:text-start text-indigo-500 mb-10 lazyLoadRight">
              Work With Us
            </h1>
            <p className="text-sm text-center lg:text-start text-gray-700 leading-7 lazyLoadRight">
              We love collaborating with talented individuals who share our
              passion for travel. Interested in a partnership or joining the
              team? <br />
              Enquire below or email us at info@achievementtravels.com
            </p>
            <a
              href="mailto:info@achievementtravels.com"
              className="text-center lg:text-start underline underline-offset-8 text-indigo-500 text-lg mt-5 transition-all duration-300 hover:no-underline hover:scale-105 lazyLoadRight"
            >
              Join Us at AchievementTravels
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
