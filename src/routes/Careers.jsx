import logo1 from "../assets/Icons/Images/Untitled-1.png";
import logo2 from "../assets/Icons/Images/Untitled-2.png";
import logo3 from "../assets/Icons/Images/Untitled-3.png";
import logo4 from "../assets/Icons/Images/Untitled-4.png";
import logo5 from "../assets/Icons/Images/Untitled-5.png";
import logo6 from "../assets/Icons/Images/Untitled-6.png";

const Careers = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-[80vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Career Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}
        {/* Content */}
        <div className="relative z-10 text-white max-w-4xl px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Join Us in Shaping a Brighter, Sustainable Future
          </h1>
          <p className="text-lg lg:text-xl mt-20">
            At PAJVA, we believe in empowering individuals to make a difference.
            As a leading solar EPC manufacturer in India, we are on a mission to
            revolutionize the energy landscape with innovative and sustainable
            solutions. Whether you are an experienced professional or just
            starting your career, we offer opportunities to grow, lead, and
            contribute to a greener planet. Explore exciting roles in
            engineering, procurement, project management, and more. Join us to
            turn your passion for renewable energy into impactful work.
            Together, let’s power the future.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="relative px-10 mb-10">
        <div className="flex lg:flex-row flex-col px-2 my-16 items-center text-black">
          <div className="lg:w-1/2 text-5xl font-bold">
            Why would you join us?
          </div>
          <div className="lg:w-[45%] text-xl lg:m-0 mt-8">
            Join a team that fosters growth, values innovation, and empowers you
            to make an impact.
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full bg-slate-400 rounded-3xl px-6 py-8 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-7 m-1"
              >
                <div className="mb-4 text-green-500">
                  <img
                    src={logo}
                    alt="icon"
                    className="w-[25%] h-auto object-cover mb-[2%]"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  {
                    [
                      "Excel in a Fast-Growing Environment",
                      "Collaborate with Exceptional Minds",
                      "Lead with Confidence, Impact with Purpose",
                      "Pursue a Journey of Continuous Growth",
                      "Innovate with the Latest Technologies",
                      "Expand Your Horizons Across Domains",
                    ][index]
                  }
                </h3>
                <p className="text-gray-600 text-md">
                  Join a team that fosters growth, values innovation, and
                  empowers you to make an impact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="relative w-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://icehrm.com/blog/content/images/2023/11/pexels-yan-krukau-7793730-1.jpg"
          alt="Solar panels"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="block">Want to join</span>
            <span className="block">our PAJVA Team?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-md sm:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-10">
            Join us to unlock unparalleled opportunities, shape your future, and
            be part of something extraordinary.
          </p>
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold 
              px-6 sm:px-8 py-2 sm:py-4 text-sm sm:text-base rounded-full 
              flex items-center transition-colors duration-200 focus:outline-none 
              focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Join Us
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
