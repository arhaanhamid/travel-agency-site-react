import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import FormPage from "../Forms/FormPage";

const Modal = ({ isOpen, setIsOpen, requestFrom }) => {
  const showModal = isOpen.inquire || isOpen.book;
  return (
    <div className="">
      <Transition show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto fontMont"
          onClose={() =>
            setIsOpen((prev) => ({ ...prev, inquire: false, book: false }))
          }
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="min-h-screen flex items-center justify-center mb-[40px] sm:mb-[60px] md:mb-[80px] mt-[120px] sm:mt-[140px] md:mt-[160px]">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl transform bg-white shadow-xl transition-all">
                {/* header */}
                <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-5">
                  <DialogTitle>
                    {/* {isOpen.inquire ? "Inquiry Form" : "Booking Form"} */}
                    {/* Subject Label */}
                    {isOpen.subject && (
                      <div className="">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[1px] text-indigo-600">
                          {isOpen.subject}
                        </h1>
                        <p className="text-xs sm:text-sm font-normal text-gray-600">
                          {`Please fill out the ${isOpen.inquire ? "inquiry form" : "booking form"} details below to proceed.`}
                        </p>
                      </div>
                    )}
                  </DialogTitle>
                  <button
                    onClick={() =>
                      setIsOpen((prev) => ({
                        ...prev,
                        inquire: false,
                        book: false,
                      }))
                    }
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <hr className="h-1 bg-gray-300" />

                {/* body */}
                <div>
                  <FormPage isOpen={isOpen} requestFrom={requestFrom} />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
