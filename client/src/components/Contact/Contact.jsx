import { useCallback, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Testimonials from "../Home/Testimonials/Testimonials";
import api from "../../api";
import Toast from "../UIComponents/Toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [toastType, setToastType] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormDetails = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // --- Validation Logic ---
  const validateForm = () => {
    const newErrors = {};

    // Validate client details
    if (!formData.fName.trim()) {
      newErrors.fName = "* First name is required";
    }
    if (!formData.lName.trim()) {
      newErrors.lName = "* Last name is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "* Message is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "* Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "* Invalid email address";
      }
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "* Phone number is required";
    } else {
      // Remove any non-digit characters
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length !== 12) {
        newErrors.phone = "* Invalid phone number";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function submitForm() {
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 15000);

      try {
        await api.post("form/submit-form", {
          ...formData,
          service: "contact",
        });

        console.log("Form submitted successfully");
        setToastType("success");
      } catch (error) {
        console.error(
          "Submission error:",
          error.response ? error.response.data : error
        );
        setToastType("failure");
      }
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      // Optionally, scroll to the first error or show a global message
      return;
    }

    submitForm();
    setFormErrors({});
  };

  // Function to conditionally combine classes
  const inputClass = (defaultClasses, errorKey) =>
    `${defaultClasses} ${
      formErrors[errorKey]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-indigo-500"
    }`;

  return (
    <section className="contact mt-[80px]">
      {/* Hero */}
      <div className="relative w-full h-96">
        <picture>
          <source
            srcSet="/assets/destinations_panaroma_03.avif"
            type="image/avif"
          />
          <source
            srcSet="/assets/destinations_panaroma_03.webp"
            type="image/webp"
          />
          <img
            src="/assets/destinations_panaroma_03.jpg"
            alt="contact us background"
            loading="lazy"
            className="absolute h-full w-full object-cover object-[70%]"
          />
        </picture>
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="w-max h-full flex flex-col justify-center pl-5 sm:pl-10 md:pl-20 lg:pl-28 xl:pl-40">
          <h2 className="font-montserrat tracking-normal leading-[1.3] text-white mb-4 text-4xl lg:text-4xl z-10">
            Contact Us
          </h2>
          <p className="font-montserrat text-sm md:text-xl font-normal leading-relaxed text-gray-200 mb-9 z-10">
            Plan your next jouney with us.
          </p>
        </div>
      </div>
      {/* Main Container */}
      <div className="relative -mt-20 max-w-[90%] md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg py-10">
        {/* Header */}
        <div className="text-center mb-10 lazyLoadDown">
          <h1 className="text-3xl md:text-4xl text-indigo-500 mb-8">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            {`Our team is here to answer your questions. Reach out to us and we'll
            respond as soon as possible.`}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-5">
          {/* Left Column - Contact Info */}
          <div className="md:space-y-10 text-center">
            {/* Contact Cards */}
            <div className="p-4 md:p-8 lg:py-8 lg:px-2 xl:px-8 rounded-lg shadow-md lazyLoadLeft">
              <h3 className="text-lg md:text-xl lg:text-lg text-indigo-500 mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-1 lazyLoadLeft">
                <i className="ri-map-pin-line"></i>Head Office
              </h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-start lg:text-xs lazyLoadLeft">
                Brane, Nishat
                <br />
                Jammu and Kashmir, India
              </p>
            </div>

            <div className="p-4 md:p-8 lg:py-8 lg:px-2 xl:px-8 rounded-lg shadow-md lazyLoadLeft">
              <h3 className="text-lg md:text-xl lg:text-lg text-indigo-500 mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-1 lazyLoadLeft">
                <i className="ri-phone-line"></i>Phone
              </h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-start lg:text-xs lazyLoadLeft">
                <a
                  href={`tel:+911234567890`}
                  className="text-gray-600 text-xs md:text-sm lg:text-start lg:text-xs hover:underline"
                >
                  +91 123 4567 890
                </a>
                <br />
                Mon-Fri: 9am - 5pm
              </p>
            </div>

            <div className="p-4 md:p-8 lg:py-8 lg:px-2 xl:px-8 rounded-lg shadow-md lazyLoadLeft">
              <h3 className="text-lg md:text-xl lg:text-lg text-indigo-500 mb-2 lg:mb-4 flex items-center justify-center lg:justify-start gap-1 lazyLoadLeft">
                <i className="ri-mail-line"></i>Email
              </h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-start lg:text-xs lazyLoadLeft">
                <a
                  href="mailto:info@achievementtravels.com"
                  className="text-gray-600 text-xs md:text-sm lg:text-start lg:text-xs hover:underline"
                >
                  info@achievementtravels.com
                </a>
                <br />
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* Right Column - Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-lg shadow-md lazyLoadRight">
              <h2 className="text-2xl text-indigo-500 mb-6">Send an Inquiry</h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    value={formData.fName}
                    onChange={handleFormDetails}
                    className={inputClass(
                      "w-full px-4 py-2 border border-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300,"
                    )}
                  />
                  {formErrors.fName && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.fName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lName"
                    value={formData.lName}
                    onChange={handleFormDetails}
                    className={inputClass(
                      "w-full px-4 py-2 border border-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    )}
                  />
                  {formErrors.lName && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.lName}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <PhoneInput
                    country={"in"}
                    name="phone"
                    value={formData.phone}
                    onChange={(phone) =>
                      handleFormDetails({
                        target: { name: "phone", value: phone },
                      })
                    }
                    containerClass="w-full"
                    containerStyle={{ width: "100%" }} // Override container inline style
                    inputClass="w-full md:min-w-full px-4 py-5 border border-gray-400 !rounded-none outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    inputStyle={{ width: "100%" }} // Override input inline style
                    dropdownClass="z-50" // Ensure dropdown appears on top
                    countryCodeEditable={false}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormDetails}
                    className={inputClass(
                      "w-full px-4 py-2 border border-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    )}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleFormDetails}
                    className={inputClass(
                      "w-full px-4 py-2 border border-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    )}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className={`md:col-span-2 ${
                    isDisabled
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-700 hover:bg-indigo-800"
                  } text-white px-8 py-3 transition-colors duration-300`}
                >
                  Send Message
                </button>
                {toastType && (
                  <Toast type={toastType} onClose={() => setToastType(null)} />
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="p-8 rounded-lg shadow-md lazyLoadDown">
          <h2 className="text-2xl text-gray-800 mb-6">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.7451092175595!2d74.87985133548462!3d34.1081977009004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1860f356fc21b%3A0x8da717235e544d3e!2sJamia%20Masjid%20Brein%20Bazaar!5e0!3m2!1sen!2sin!4v1739432943869!5m2!1sen!2sin"
              className="w-full h-96 border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default Contact;
