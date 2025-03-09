import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Toast = ({ type, onClose }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start the exit sequence after 3 seconds
    const timer = setTimeout(() => {
      setExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    if (exiting && onClose) {
      onClose();
    }
  };

  // Toast content with fixed positioning using Tailwind
  const toastContent = (
    <div
      className={`toast fixed top-20 right-4 ${
        exiting ? "animate-slide-out" : "animate-slide-in"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="bg-white rounded-lg border border-gray-300 p-3 shadow-lg">
        <div className="flex flex-row">
          <div className="px-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 1792 1792"
              fill={type === "success" ? "#44C997" : "#E74C3C"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
          </div>
          <div className="ml-2 mr-6">
            <span className="font-semibold">
              {type === "success"
                ? "Successfully submitted!"
                : "Form submission failed!"}
            </span>
            <span className="block text-gray-500">
              {type === "success"
                ? "Your form was successfully submitted."
                : "Something went wrong while submitting your form, please try again!"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Render using a portal into #toast-root
  return ReactDOM.createPortal(
    toastContent,
    document.getElementById("toast-root")
  );
};

export default Toast;
