import { useNavigate } from "react-router-dom";

const PackageCard = ({ trip, requestFrom }) => {
  const navigate = useNavigate(); // useNavigate hook to handle navigation
  const packagesPage = requestFrom === "package-page";

  // Handler for navigation
  const handleDiscoverTrip = () => {
    navigate(`/packages/${trip.id}`);
  };
  return (
    <div className="h-[600px] w-full relative overflow-hidden rounded-none md:rounded-lg shadow transition hover:shadow-lg">
      <img
        src={trip.image}
        alt={trip.title}
        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      />
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
        {trip.location}
      </span>
      <div
        className={`absolute w-full p-3 sm:p-4 ${packagesPage && "px-5 md:px-10"} bottom-0 left-0 bg-gradient-to-t from-gray-900/60 to-gray-900/30 pt-4 sm:pt-6`}
      >
        <h5 className="text-sm sm:text-base font-bold text-white">
          {trip.duration}-Day Trip
        </h5>
        <h3
          className={`text-xl sm:text-[2xl] font-semibold text-white mb-2 sm:mb-4 leading-tight ${packagesPage && "leading-10 xl:leading-[50px] text-[40px] md:text-[48px] lg:text-[50px] w-[40%]"}`}
        >
          {trip.title}
        </h3>
        <p className="line-clamp-3 text-xs/relaxed sm:text-sm/relaxed text-white/95">
          {trip.desc}...
        </p>

        <div
          className={`flex justify-between items-end mt-5 ${packagesPage && "md:mt-7 lg:h-[60px]"} h-[50px]`}
        >
          <div
            className={`h-full flex items-center justify-center text-sm font-bold bg-transparent  border-2 border-white rounded-full py-1 px-4 sm:py-2 sm:px-6 hover:bg-white text-white hover:text-gray-900 transition duration-300 cursor-pointer ${packagesPage && "w-[200px]"}`}
            onClick={handleDiscoverTrip}
          >
            Discover Trip
          </div>
          <div
            className={`flex flex-col items-center justify-between h-full text-base ${packagesPage && "lg:py-2"}`}
          >
            <span className="text-[12px] xs:text-xs font-medium text-white uppercase">
              FROM
            </span>
            <span className="text-[25px] sm:text-xl font-bold text-white">
              ${trip.price} <small className="font-normal text-sm">PP</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
