const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 py-8">
      <div className="mx-auto px-9">
        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left side - Heading and features */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Its time to support zero pollution,
              <span className="block text-gray-500">
                with renewable resources
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Experienced for more then 10 years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Support for the lastest technology</span>
              </div>
            </div>
          </div>

          {/* Right side - Lorem ipsum and button */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-gray-400 mb-4 md:text-right max-w-md">
            Empowering a sustainable future with clean, renewable energy. Join us in making a positive impact on the planet through innovative solar solutions.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
              Get in touch
              <span className="inline-block ml-1">→</span>
            </button>
          </div>
        </div>

        {/* Navigation and social links */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Navigation links */}
          <nav className="flex gap-6 mb-4 md:mb-0">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/About" className="hover:text-white transition-colors">
              About
            </a>
            {/* <a href="/Features" className="hover:text-white transition-colors">Features</a> */}
            <a href="/Services" className="hover:text-white transition-colors">
              Services
            </a>
            {/* <a href="/Contact" className="hover:text-white transition-colors">Contact</a> */}
          </nav>

          {/* Social media icons */}
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
              Linkedin
              <span className="inline-block ml-1">→</span>
            </button>
            {/* <a href="https://www.linkedin.com/" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              in
            </a>
            <a href="https://www.facebook.com/" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <span className="sr-only">Facebook</span>
              f
            </a>
            <a href="https://www.instagram.com/" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <span className="sr-only">Instagram</span>
              ig
            </a>
            <a href="https://www.X.com/" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors">
              <span className="sr-only">Twitter</span>
              X
            </a> */}
          </div>
        </div>

        {/* Copyright and legal */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>©2024 AKIP Inc. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
