import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="bg-gray-100 shadow overflow-hidden px-2 py-8 md:px-6">
      <div className="text-center py-8">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-[2px] text-indigo-500 uppercase">
          Error!
        </h1>
        <h1 className="text-2xl lg:text-3xl font-bold py-8 text-indigo-400">
          Ooops! Something Went Wrong!
        </h1>
        <p className="text-base font-medium text-gray-600 lg:px-36">
          Oops! Something went wrong while your were trying to enjoy your time
          on AchievementTravels. Kindly, restart your journey or tell us about
          it!
        </p>
        <div className="flex items-center justify-center space-x-2 md:space-x-10 lg:space-x-20 mt-8 lg:mt-16">
          <button className="bg-gray-400 text-white font-semibold text-xs px-3 py-3 cursor-pointer hover:bg-white hover:text-gray-500 transition-all duration-500">
            <Link to="/">Take me Home!</Link>
          </button>
          <button className="bg-white text-gray-500 font-semibold text-xs px-3 py-3  cursor-pointer hover:bg-gray-400 hover:text-white transition-all duration-500">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
