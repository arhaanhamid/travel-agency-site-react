import styles from "./effects.module.css";

{
  /* LEFT NAV ARROW */
}
export const LeftSwiperArrow = ({ requestFrom }) => {
  const popularHotels = requestFrom === "popular-hotels";
  const testimonials = requestFrom === "testimonials";
  const customStyles = testimonials
    ? `flex items-center justify-center group cursor-pointer custom-prev absolute bottom-10 left-[35%] sm:left-[40%] lg:left-[43%] xl:left-[45%] z-10 h-10 md:h-12 w-10 md:w-12 bg-white p-2 rounded-full md:hover:scale-150 transition-transform duration-300 ${styles.rotate_hover_parent}`
    : popularHotels
      ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute left-4 ${popularHotels && "left-1/3 lg:left-1/3"} top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-white p-2 rounded-full transition-transform duration-300 hover:scale-150 ${styles.rotate_hover_parent}`
      : `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-white p-2 rounded-full transition-transform duration-300 hover:scale-150 ${styles.rotate_hover_parent}`;
  return (
    <div className={`${customStyles} `}>
      <span
        className={`absolute h-6 md:h-7 w-6 md:w-7 border-2 border-dashed border-black rounded-full transition-all duration-300 md:group-hover:scale-[0.6667] ${styles.rotate_hover}`}
      ></span>
      <i className="ri-arrow-left-s-line text-black text-lg h-8 w-8 flex items-center justify-center transform transition-all duration-300 md:group-hover:scale-[0.6667] relative"></i>
    </div>
  );
};

{
  /* RIGHT NAV ARROW */
}
export const RightSwiperArrow = ({ requestFrom }) => {
  const popularHotels = requestFrom == "popular-hotels";
  const testimonials = requestFrom === "testimonials";
  const customStyles = testimonials
    ? `flex items-center justify-center group cursor-pointer custom-next absolute bottom-10 right-[35%] sm:right-[40%] lg:right-[43%] xl:right-[45%] z-10 h-10 md:h-12 w-10 md:w-12 bg-white p-2 rounded-full transition-transform duration-300 md:hover:scale-150 ${styles.rotate_hover_parent}`
    : popularHotels
      ? `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute right-4 ${popularHotels && "right-4 lg:right-4 "}  top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-white p-2 rounded-full transition-transform duration-300 hover:scale-150 ${styles.rotate_hover_parent}`
      : `hidden md:flex md:items-center md:justify-center group cursor-pointer custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 bg-white p-2 rounded-full transition-transform duration-300 hover:scale-150 ${styles.rotate_hover_parent}`;
  return (
    <div className={customStyles}>
      <span
        className={`absolute h-6 md:h-7 w-6 md:w-7 border-2 border-dashed border-black rounded-full transition-all duration-300 md:group-hover:scale-[0.6667] ${styles.rotate_hover}`}
      ></span>

      <i className="ri-arrow-right-s-line text-black text-lg h-8 w-8 flex items-center justify-center transform transition-all duration-300 md:group-hover:scale-[0.6667] relative"></i>
    </div>
  );
};
