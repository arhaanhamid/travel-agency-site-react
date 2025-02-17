import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  // Handler for navigation
  const handleDiscoverHotel = () => {
    navigate(`/services/hotels/${hotel.id}`);
  };
  return (
    <div className="h-[600px] w-full relative overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg">
      <img
        src={hotel.images[0]}
        alt={hotel.title}
        className="absolute px-1 left-0 top-0 w-full h-full z-0 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-125"
        loading="lazy"
      />
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-semibold flex items-center px-3 py-1 bg-gray-800 text-white uppercase tracking-wide">
        {hotel.location}
      </span>
      <div
        className={`absolute w-full  text-white p-3 sm:p-4 px-5 md:px-10 lg:px-3 xl:px-10 bottom-0 left-0 bg-gradient-to-t from-gray-600 via-black/80  pt-4 sm:pt-6`}
      >
        <h5 className="uppercase text-xs font-semibold">{hotel.category}</h5>
        <h3
          className={`text-[30px] md:text-[32px] uppercase font-semibold  mb-2 sm:mb-4 leading-[40px] xl:leading-[50px] w-[60%]`}
        >
          {hotel.title}
        </h3>
        <p className="line-clamp-3 text-xs/relaxed sm:text-sm/relaxed text-gray-300">
          {hotel.desc}...
        </p>

        <div className={`mt-5 md:mt-7 h-[50px] lg:h-[60px]`}>
          <div
            className={`h-full flex items-center justify-center text-xs uppercase font-semibold bg-transparent  border-2 border-white rounded-full py-1 px-4 sm:py-2 sm:px-6 lg:px-2 xl:px-6 hover:bg-white text-white hover:text-gray-900 transition-all duration-300 cursor-pointer`}
            onClick={handleDiscoverHotel}
          >
            Discover hotel
          </div>
          {/* <div
            className={`flex flex-col items-center justify-between lg:py-2 h-full`}
          >
            <span className="text-[12px] lg:text-[10px] xl:text-[12px] uppercase">
              FROM
            </span>
            <span className="font-fraunces text-[25px] sm:text-xl lg:text-[20px] xl:text-[26px] font-semibold">
              ${hotel.price}{" "}
              <small className="font-normal text-[12px] lg:text-[10px] xl:text-[12px]">
                NIGHT
              </small>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
