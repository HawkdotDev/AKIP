import { useState } from "react";
import down from "../assets/SVGs/download-circle.svg";

const BrochureComponent = () => {
  const [showPreview, setShowPreview] = useState(false);
  const brochurePath = "/docs/Brochure.pdf"; // Ensure PDF is placed in /public/docs/

  // Function to handle brochure download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochurePath;
    link.setAttribute("download", "PAJVA-Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center lg:justify-start mt-12">
      <div>
        <div className="flex justify-between lg:gap-11 gap-9 mb-4">
          {/* View Brochure Button */}
          <div className="relative flex flex-col items-center">
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
              <div className="absolute mt-14 bg-gray-200 p-4 rounded-3xl w-80 shadow-lg z-[105] h-96 border-green-600 border overflow-hidden">
                <iframe
                  src={`${brochurePath}#toolbar=0`}
                  className="w-full h-full rounded-lg"
                  title="Brochure Preview"
                  style={{ border: "none", overflow: "hidden" }}
                />
              </div>
            )}
          </div>

          {/* Download Brochure Button */}
          <button
            aria-label="Download Brochure"
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 text-white font-light py-2 px-5 rounded-full focus:outline-none focus:shadow-outline flex items-center"
          >
            <img src={down} className="mr-2" alt="Download Icon" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrochureComponent;
