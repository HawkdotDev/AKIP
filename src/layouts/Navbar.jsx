import { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full max-w-[1920px] mx-auto flex justify-between items-center px-7 pt-2 fixed z-[99] bg-black/25 xl:backdrop-blur-sm  backdrop-blur-md">
        <a href="/">
          <img src={Logo} alt="AKIP logo" className="w-[72px] h-[72px]" />
        </a>

        <button
          onClick={toggleMenu}
          className="xl:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 6.5H19V8H5V6.5Z" fill="#ffffff" />
              <path d="M5 16.5H19V18H5V16.5Z" fill="#ffffff" />
              <path d="M5 11.5H19V13H5V11.5Z" fill="#ffffff" />
            </svg>
          )}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden xl:flex justify-evenly space-x-4 gap-10">
          <a
            href="/"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            Home
          </a>
          <a
            href="/Blogs"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            Blogs
          </a>
          <div className="relative group">
            <a href="/Services" className="text-white text-lg drop-shadow-2xl">
              Services
            </a>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white text-black py-2 rounded shadow-lg w-[200px] border border-black">
              <a
                href="/Services/Captive-Solar-Project"
                className="px-4 py-2 hover:bg-gray-200"
              >
                Captive Solar Project
              </a>
              <a
                href="/Services/Open-Access-Project"
                className="px-4 py-2 hover:bg-gray-200"
              >
                Open Access Project
              </a>
              <a
                href="/Services/Opex-Solution"
                className="px-4 py-2 hover:bg-gray-200"
              >
                Opex Solution
              </a>
              <a
                href="/Services/BESS-System"
                className="px-4 py-2 hover:bg-gray-200"
              >
                BESS System
              </a>
              <a href="/Services/IOT" className="px-4 py-2 hover:bg-gray-200">
                IOT
              </a>
            </div>
          </div>
          <a
            href="/Media"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            Media
          </a>
          {/* <a
            href="/About"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            About
          </a> */}
          <a
            href="/Careers"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            Careers
          </a>
          <a
            href="/ContactUs"
            className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
          >
            Contact Us
          </a>
        </div>
        <a
          href="/ContactUs"
          className="px-4 py-[6px] bg-green-500 hover:bg-green-600 border invisible border-white/45 text-white rounded-3xl hidden xl:block"
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Sliding Navbar */}
      <aside
        className={`xl:hidden fixed top-[78.65px] left-0 w-full bg-black/25 backdrop-blur-md text-white z-[98] transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-[45vh]"
        }`}
      >
        <div className="flex flex-col items-center">
          <a href="/" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Home
          </a>
          <a href="/Blogs" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Blogs
          </a>
          <a href="/Services" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Services
          </a>
          <a href="/Media" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Media
          </a>
          <a href="/About" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            About
          </a>
          <a href="/Careers" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Careers
          </a>
          <a href="/ContactUs" className="hover:text-green-500 text-lg h-full w-full hover:bg-black/30 p-4 text-center">
            Contact Us
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
