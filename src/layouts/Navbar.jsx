import { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // setOpenSubmenu(null); // Close any open submenu when main menu toggles
  };

  // const toggleSubmenu = (menu) => {
  //   setOpenSubmenu(openSubmenu === menu ? null : menu);
  // };

  return (
    <nav className="w-full max-w-[1920px] mx-auto flex justify-between items-center px-7 pt-2 fixed z-[99] bg-black/25 backdrop-blur-sm">
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
        <a
          href="/About"
          className="text-white hover:text-green-500 text-lg drop-shadow-2xl"
        >
          About
        </a>
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
        className="px-4 py-[6px] bg-green-500 hover:bg-green-600 border border-white/45 text-white rounded-3xl hidden xl:block"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
