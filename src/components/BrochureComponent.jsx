import { useState } from "react";
import down from "../assets/SVGs/download-circle.svg";

const BrochureComponent = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="flex justify-center mt-12">
      <div className="max-w-lg w-full">
        <div className="flex justify-between mb-4 gap-8">
          <div className="relative items-center flex flex-col">
            <button
              aria-label="View Brochure"
              onClick={() => setShowPreview(!showPreview)}
              className="bg-white hover:bg-gray-300 text-black font-light py-2 px-5 rounded-full focus:outline-none focus:shadow-outline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Brochure
            </button>
            {showPreview && (
              <div className="absolute mt-14 bg-gray-200 p-4 rounded-3xl w-72 shadow-lg z-[105] h-80">
                <div className="flex justify-center items-center text-black">
                  <object
                    data="/assets/docs/Brochure.pdf"
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    PDF Preview not available
                  </object>
                  <img
                    src="../assets/docs/Brochure.pdf"
                    alt="Brochure"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            )}
          </div>
          <button
            aria-label="Download Brochure"
            className="bg-green-500 hover:bg-green-600 text-white font-light py-2 px-5 rounded-full focus:outline-none focus:shadow-outline flex items-center"
          >
            <img src={down} className="mr-2" alt="" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrochureComponent;
