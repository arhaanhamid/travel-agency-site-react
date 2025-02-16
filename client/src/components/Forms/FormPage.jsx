import { useCallback, useState } from "react";
import { Transition } from "@headlessui/react";
import { Range } from "react-range";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import packagesData from "../../assets/GlobalData";
// import { useLocation, useParams } from "react-router-dom";

const FormPage = () => {
  // const { type } = useParams();

  // const query = new URLSearchParams(useLocation().search);
  // const itemId = query.get("id");

  const [formData, setFormData] = useState({
    showLocations: false,
    destinations: [],
    date: {
      day: "",
      month: "",
      year: "",
      nights: "",
    },
    party: {
      adults: "",
      children: "",
    },
    mustSees: "",
    message: "",
    showOccasions: false,
    selectedOccasion: "",
    clientDetails: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
    },
    conditions: {
      recieveUpdates: false,
      acceptTerms: false,
    },
    budget: [5000, 10000],
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  const locations = packagesData.map((pkg) => pkg.location);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const occasions = ["Anniversary", "Honeymoon", "Birthday", "Other"];

  // Handlers for various sections (unchanged)
  const handleSelectDestinations = useCallback((e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        destinations: [...prev.destinations, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        destinations: prev.destinations.filter((loc) => loc !== value),
      }));
    }
  }, []);

  const handleDateChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      date: { ...prev.date, [name]: value },
    }));
  }, []);

  const handlePartyChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      party: { ...prev.party, [name]: Number(value) },
    }));
  }, []);

  const handleClientDetails = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      clientDetails: { ...prev.clientDetails, [name]: value },
    }));
  }, []);

  // --- Validation Logic ---
  const validateForm = () => {
    const newErrors = {};

    // Validate client details
    if (!formData.clientDetails.fName.trim()) {
      newErrors.fName = "* First name is required";
    }
    if (!formData.clientDetails.lName.trim()) {
      newErrors.lName = "* Last name is required";
    }
    if (!formData.clientDetails.email.trim()) {
      newErrors.email = "* Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.clientDetails.email)) {
        newErrors.email = "* Invalid email address";
      }
    }
    if (!formData.clientDetails.phone.trim()) {
      newErrors.phone = "* Phone number is required";
    } else {
      // Remove any non-digit characters
      const phoneDigits = formData.clientDetails.phone.replace(/\D/g, "");
      if (phoneDigits.length !== 10) {
        newErrors.phone = "* Phone number must be exactly 10 digits";
      }
    }

    // Validate travel date fields
    if (!formData.date.day) {
      newErrors.day = "* Day is required";
    }
    if (!formData.date.month) {
      newErrors.month = "* Month is required";
    }
    if (!formData.date.year) {
      newErrors.year = "* Year is required";
    }
    if (!formData.date.nights) {
      newErrors.nights = "* Number of nights is required";
    }
    if (!formData.party.adults) {
      newErrors.adults = "* Number of adults is required";
    }
    if (!formData.party.children) {
      newErrors.children = "* Number of children is required";
    }

    // Validate destinations if user knows where to go
    if (formData.showLocations && formData.destinations.length === 0) {
      newErrors.destinations = "* Please select at least one destination";
    }

    // Validate special occasion (if applicable)
    if (formData.showOccasions && !formData.selectedOccasion) {
      newErrors.selectedOccasion = "* Please select an occasion";
    }

    // Validate terms acceptance (must be true)
    if (!formData.conditions.acceptTerms) {
      newErrors.acceptTerms = "* You must accept the Terms and Conditions";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Optionally, scroll to the first error or show a global message
      return;
    }
    setErrors({});
    // Proceed with POST request here since validation passed
    console.log("Submitting form data:", formData);
  };

  // --- End Validation Logic ---

  // Function to conditionally combine classes
  const inputClass = (defaultClasses, errorKey) =>
    `${defaultClasses} ${
      errors[errorKey]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-indigo-500"
    }`;

  // console.log(formData);
  // --- JSX ---
  return (
    <div className="inquiryForm min-h-screen bg-gray-200 pt-[160px]">
      <form
        className="max-w-4xl mx-auto bg-white shadow-2xl p-8 space-y-8"
        onSubmit={handleSubmit}
      >
        {/* Destination Section */}
        <section>
          <div className="mb-6 flex flex-col">
            <h2 className="text-xl text-gray-700 pb-2 mb-2">
              Do you know where you want to go?
            </h2>
            <div className="grid grid-cols-2 space-x-6">
              <label className="block">
                <input
                  type="radio"
                  name="knowDestination"
                  value="true"
                  className="sr-only peer "
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, showLocations: true }))
                  }
                  checked={formData.showLocations === true}
                />
                <div
                  className="flex items-center bg-gray-100 justify-center p-4 border cursor-pointer 
                peer-checked:bg-indigo-500 peer-checked:text-white transition-all duration-300"
                >
                  Yes
                </div>
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="knowDestination"
                  value="false"
                  className="sr-only peer"
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, showLocations: false }))
                  }
                  checked={formData.showLocations === false}
                />
                <div
                  className="flex items-center justify-center p-4 border cursor-pointer 
                peer-checked:bg-indigo-500 bg-gray-100 peer-checked:text-white transition-all duration-300"
                >
                  Not sure
                </div>
              </label>
            </div>
          </div>

          <Transition
            show={formData.showLocations === true}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-500 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <div>
              <h2 className="text-xl text-gray-700 pb-2 mb-2">
                Where would you like to go? (Select multiple)
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {locations.map((loc) => (
                  <label key={loc} className="block">
                    <input
                      type="checkbox"
                      name="destinations"
                      value={loc}
                      className="sr-only peer"
                      checked={formData.destinations.includes(loc)}
                      onChange={handleSelectDestinations}
                    />
                    <div
                      className="flex items-center justify-center p-4 border cursor-pointer 
                      transition-all duration-300
                      peer-checked:bg-indigo-500 peer-checked:text-white"
                    >
                      {loc}
                    </div>
                  </label>
                ))}
              </div>
              {errors.destinations && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.destinations}
                </p>
              )}
            </div>
          </Transition>
        </section>

        {/* Travel Date & Duration Section */}
        <section>
          <div className="flex flex-col">
            <h2 className="text-xl text-gray-700 pb-2 mb-2">
              When would you like to go?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Day Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Day
                </label>
                <select
                  name="day"
                  value={formData.date.day}
                  onChange={handleDateChange}
                  className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                >
                  <option value="">Select Day</option>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                {errors.day && (
                  <p className="text-red-500 text-xs mt-1">{errors.day}</p>
                )}
              </div>

              {/* Month Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select
                  name="month"
                  value={formData.date.month}
                  onChange={handleDateChange}
                  className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                >
                  <option value="">Select Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                {errors.month && (
                  <p className="text-red-500 text-xs mt-1">{errors.month}</p>
                )}
              </div>

              {/* Year Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select
                  name="year"
                  value={formData.date.year}
                  onChange={handleDateChange}
                  className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                >
                  <option value="">Select Year</option>
                  {Array.from(
                    { length: 5 },
                    (_, i) => i + new Date().getFullYear()
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <p className="text-red-500 text-xs mt-1">{errors.year}</p>
                )}
              </div>

              {/* Number of Nights Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Nights
                </label>
                <select
                  name="nights"
                  value={formData.date.nights}
                  onChange={handleDateChange}
                  className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
                >
                  <option value="">Select Nights</option>
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((nights) => (
                    <option key={nights} value={nights}>
                      {nights}
                    </option>
                  ))}
                </select>
                {errors.nights && (
                  <p className="text-red-500 text-xs mt-1">{errors.nights}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Travel Party Section */}
        <section>
          <h2 className="text-xl text-gray-700 pb-2 mb-2">{`Who's Going`}</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Adults Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adults (18+)
              </label>
              <select
                name="adults"
                value={formData.party.adults}
                onChange={handlePartyChange}
                className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                <option value="">Select Adults</option>

                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              {errors.adults && (
                <p className="text-red-500 text-xs mt-1">{errors.adults}</p>
              )}
            </div>

            {/* Children Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Children
              </label>
              <select
                name="children"
                value={formData.party.children}
                onChange={handlePartyChange}
                className="w-full border border-gray-300 bg-gray-100 text-center p-3 focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                <option value="">Select Children</option>

                {Array.from({ length: 10 }, (_, i) => i).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              {errors.children && (
                <p className="text-red-500 text-xs mt-1">{errors.children}</p>
              )}
            </div>
          </div>
        </section>

        {/* Must Sees and Dos Section */}
        <section>
          <h2 className="text-xl text-gray-700 pb-2 mb-2">
            Must Sees & Must Dos
          </h2>
          <div className="flex flex-col">
            <input
              type="text"
              value={formData.mustSees}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, mustSees: e.target.value }))
              }
              className="w-full border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="e.g., go trekking, enjoy a shikara ride, go to religious places"
            />
          </div>
        </section>

        {/* Special Details Section */}
        <section>
          <div className="mb-6 flex flex-col">
            <h2 className="text-xl text-gray-700 pb-2 mb-2">
              Is this trip for a special occasion?
            </h2>
            <div className="grid grid-cols-2 space-x-6">
              <label className="block">
                <input
                  type="radio"
                  name="occasion"
                  value="true"
                  className="sr-only peer"
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, showOccasions: true }))
                  }
                  checked={formData.showOccasions === true}
                />
                <div
                  className="flex items-center justify-center p-4 border cursor-pointer 
                bg-gray-100 peer-checked:bg-indigo-500 peer-checked:text-white transition-all duration-300"
                >
                  Yes
                </div>
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="occasion"
                  value="false"
                  className="sr-only peer"
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, showOccasions: false }))
                  }
                  checked={formData.showOccasions === false}
                />
                <div
                  className="flex items-center justify-center p-4 border cursor-pointer 
                bg-gray-100 peer-checked:bg-indigo-500 peer-checked:text-white transition-all duration-300"
                >
                  No
                </div>
              </label>
            </div>
          </div>

          <Transition
            show={formData.showOccasions}
            enter="transition ease-out duration-500 transform"
            enterFrom="opacity-0 -translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-500 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-4"
          >
            <div>
              <div className="grid grid-cols-4 sm:grid-cols-2 gap-4">
                {occasions.map((occasion) => (
                  <label key={occasion} className="block">
                    <input
                      type="checkbox"
                      name="occasions"
                      value={occasion}
                      className="sr-only peer"
                      checked={formData.selectedOccasion === occasion}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          selectedOccasion: e.target.value,
                        }))
                      }
                    />
                    <div
                      className="flex items-center justify-center p-4 border cursor-pointer 
                      transition-all duration-300
                      peer-checked:bg-indigo-500 peer-checked:text-white"
                    >
                      {occasion}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </Transition>
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="text-xl text-gray-700 pb-2 mb-2">
            Anything else we should know about your trip?
          </h2>
          <div className="mb-6">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              rows="3"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <h2 className="text-xl text-gray-700 pb-2 mb-2">
              Budget per person
            </h2>

            <Range
              step={100}
              min={100}
              max={20000}
              values={formData.budget}
              onChange={(values) =>
                setFormData((prev) => ({ ...prev, budget: values }))
              }
              renderTrack={({ props, children }) => {
                const { key, ...restProps } = props;

                return (
                  <div
                    key={key}
                    {...restProps}
                    className="h-0.5 bg-green-500 rounded-full"
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => {
                const { key, ...restProps } = props;
                return (
                  <div
                    key={key}
                    {...restProps}
                    className="h-4 w-4 bg-green-500 border-2 border-green-500 rounded-full shadow-md focus:outline-none"
                  />
                );
              }}
            />
            <div className="flex justify-between mt-3">
              <span className="text-xs">₹{formData.budget[0]}</span>
              <span className="text-xs">₹{formData.budget[1]}</span>
            </div>
          </div>
        </section>

        {/* Personal Details Section */}
        <section>
          <h2 className="text-xl text-gray-700 pb-2 mb-2">Your Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <input
                type="text"
                name="fName"
                value={formData.clientDetails.fName}
                onChange={handleClientDetails}
                className={inputClass(
                  "w-full border p-2 outline-none transition duration-300",
                  "fName"
                )}
                placeholder="First Name"
              />
              {errors.fName && (
                <p className="text-red-500 text-xs mt-1">{errors.fName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lName"
                value={formData.clientDetails.lName}
                onChange={handleClientDetails}
                className={inputClass(
                  "w-full border p-2 outline-none transition duration-300",
                  "lName"
                )}
                placeholder="Last Name"
              />
              {errors.lName && (
                <p className="text-red-500 text-xs mt-1">{errors.lName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.clientDetails.email}
                onChange={handleClientDetails}
                className={inputClass(
                  "w-full border p-2 outline-none transition duration-300",
                  "email"
                )}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <PhoneInput
                country="in"
                name="phone"
                value={formData.clientDetails.phone}
                onChange={(phone) =>
                  handleClientDetails({
                    target: { name: "phone", value: phone },
                  })
                }
                containerClass="w-full"
                containerStyle={{ width: "100%" }}
                inputClass={inputClass(
                  "w-full p-2 transition duration-300",
                  "phone"
                )}
                inputStyle={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "0",
                }}
                dropdownClass="z-50"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Conditions Checkboxes */}
          <div className="mt-16 space-y-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="recieveUpdates"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    conditions: {
                      ...prev.conditions,
                      recieveUpdates: e.target.checked,
                    },
                  }))
                }
                checked={formData.conditions.recieveUpdates}
                className="form-checkbox text-indigo-600 h-3 w-3"
              />
              <span className="text-gray-700 text-sm">
                I would like to subscribe to receive email updates from
                AchievementTravels. See our{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 text-gray-700 text-sm"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="acceptTerms"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    conditions: {
                      ...prev.conditions,
                      acceptTerms: e.target.checked,
                    },
                  }))
                }
                checked={formData.conditions.acceptTerms}
                className={`form-checkbox text-indigo-600 h-3 w-3 ${
                  errors.acceptTerms ? "border-red-500" : ""
                }`}
              />
              <span className="text-gray-700 text-sm">
                I confirm I have read and accepted the{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 text-gray-700 text-sm"
                >
                  Terms and Conditions
                </a>
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
            )}
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white uppercase tracking-[2px] py-3 px-8 mt-5 shadow"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
