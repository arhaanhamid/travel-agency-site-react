// const TripCard = ({ item }) => {
//   return (

//     <div className="h-[600px] relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
//       <img
//         src={item.image}
//         alt="asfsa"
//         width={9999}
//         height={9999}
//         className="absolute left-0 top-0 w-full  h-full z-0 object-cover"
//       />
//       <span className="absolute top-4 left-4 text-sm font-semibold text-white uppercase tracking-wide">
//         {item.location}{" "}
//       </span>
//       <div className="absolute w-full p-4 bottom-0 left-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-6">
//         <h5 className="font-bold text-white">{item.duration}-Day Trip</h5>
//         <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
//           {item.title}
//         </h3>
//         <p className="line-clamp-3 text-sm/relaxed text-white/95">
//           {item.desc}...
//         </p>

//         <div className="flex justify-between items-center mt-5">
//           <div className="text-white font-bold bg-transparent border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-gray-900 transition duration-300 cursor-pointer">
//             Discover Trip
//           </div>

//           <div className="flex flex-col items-end">
//             <span className="text-xs font-medium text-white uppercase">
//               FROM
//             </span>
//             <span className="text-xl font-bold text-white">${item.price}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const TripCard = ({ item }) => {
  return (
    <div className="h-[600px] relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        src={item.image}
        alt={item.title}
        className="absolute left-0 top-0 w-full h-full z-0 object-cover"
      />
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-wide">
        {item.location}
      </span>
      <div className="absolute w-full p-3 sm:p-4 bottom-0 left-0 bg-gradient-to-t from-gray-900/60 to-gray-900/30 pt-4 sm:pt-6">
        <h5 className="text-sm sm:text-base font-bold text-white">
          {item.duration}-Day Trip
        </h5>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-4 leading-tight">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-xs/relaxed sm:text-sm/relaxed text-white/95">
          {item.desc}...
        </p>

        <div className="flex justify-between items-center mt-3 sm:mt-5">
          <div className="text-sm sm:text-base font-bold bg-transparent border-2 border-white rounded-full py-1 px-4 sm:py-2 sm:px-6 hover:bg-white text-white hover:text-gray-900 transition duration-300 cursor-pointer">
            Discover Trip
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[0.65rem] xs:text-xs font-medium text-white uppercase">
              FROM
            </span>
            <span className="text-lg sm:text-xl font-bold text-white">
              ${item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TripCard;
