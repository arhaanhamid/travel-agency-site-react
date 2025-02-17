import bg_vid from "../../../assets/hero_bg_vid.mp4";

const Hero = () => {
  return (
    <div className="hero-section fontFraunces relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Image (only on mobile) */}
      <div className="blur-overlay md:hidden"></div>
      {/* Background Video (only on desktop) */}

      <video
        preload="auto"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bg_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blackish Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-gray-200 gap-10 md:gap-12">
        <h6 className="text-lg md:text-2xl xl:text-3xl">
          Connecting{" "}
          <em className="text-lg md:text-2xl xl:text-3xl text-indigo-500">
            your
          </em>{" "}
          journey with purpose
        </h6>
        <h3 className="text-4xl md:text-6xl xl:text-7xl">
          Unforgettable travel
          <br />
          experiences with
          <br />a{" "}
          <em className="text-4xl md:text-6xl xl:text-7xl text-indigo-500">
            positive
          </em>{" "}
          impact
        </h3>
      </div>
    </div>
  );
};

export default Hero;
