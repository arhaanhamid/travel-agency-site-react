import styles from "./effects.module.css";

{
  /* LEFT NAV ARROW */
}
export const LeftSwiperArrow = ({ requestFrom }) => {
  const popularHotels = requestFrom === "popular-hotels";
  const testimonials = requestFrom === "testimonials";
  const about = requestFrom === "about";
  const customStyles = testimonials
    ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute bottom-5 left-[38%] lg:left-[40%] z-10 h-12 w-12 lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
    : popularHotels
      ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute left-[40%] bottom-5 z-10 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-black/40 transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
      : about
        ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute left-[5%] bottom-[60%] lg:left-[40%] lg:bottom-[0] z-10 h-12 w-12  lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
        : `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12  lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`;
  return (
    <div className={`${customStyles} `}>
      <span
        className={`absolute h-7 w-7 lg:h-8 lg:w-8 border-2 border-dashed border-white rounded-full transition-all duration-300 md:group-hover:scale-[0.6667] ${styles.rotate_hover}`}
      ></span>
      <i className="ri-arrow-left-s-line text-white text-lg h-8 w-8 flex items-center justify-center transform transition-all duration-300 hover:scale-[1] relative"></i>
    </div>
  );
};

{
  /* RIGHT NAV ARROW */
}
export const RightSwiperArrow = ({ requestFrom }) => {
  const popularHotels = requestFrom == "popular-hotels";
  const testimonials = requestFrom === "testimonials";
  const about = requestFrom === "about";

  const customStyles = testimonials
    ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute bottom-5 right-[38%] lg:right-[40%] z-10 h-12 w-12 lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 md:hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
    : popularHotels
      ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute right-[40%] bottom-5 z-10 h-12 w-12 lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
      : about
        ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute right-[5%] bottom-[60%] lg:right-[40%] lg:bottom-[0] z-10 h-12 w-12  lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`
        : `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12  lg:h-14 lg:w-14 bg-black/40 p-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-black/80 ${styles.rotate_hover_parent}`;
  return (
    <div className={customStyles}>
      <span
        className={`absolute h-7 w-7 lg:h-8 lg:w-8 border-2 border-dashed border-white rounded-full transition-all duration-300 md:group-hover:scale-[0.6667] ${styles.rotate_hover}`}
      ></span>

      <i className="ri-arrow-right-s-line text-white text-lg h-8 w-8 flex items-center justify-center transform transition-all duration-300 hover:scale-[1] relative"></i>
    </div>
  );
};
