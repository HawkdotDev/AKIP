import arrow from "../../assets/SVGs/move-up-right.svg";

const Csp = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://cleantechsolar.com/content/uploads/DJI_0206-Divya-PC-scaled.jpg"
          alt="Solar panels"
          className="absolute inset-0 w-full h-full object-cover brightness-25"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark Overlay */}

        {/* Content */}
        <div className="relative z-10 text-white text-center px-6 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Captive Solar Project
          </h1>
          <p className="text-lg lg:text-xl">
            A Solar Captive Project empowers businesses to take control of their
            energy needs by generating renewable energy directly at their
            premises or through dedicated solar plants.
          </p>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="w-full px-9 py-20 space-y-16">
        {/* Rooftop Project */}
        <div className="w-full h-[65vh] bg-slate-400 rounded-[35px] flex flex-col lg:flex-row justify-between p-5">
          {/* Image */}
          <div className="h-1/2 lg:h-full rounded-3xl w-full lg:w-[67.5%] bg-blue-500 overflow-hidden">
            <img
              src="https://ornatesolar.com/wp-content/uploads/2024/11/Captive-Solar-03-scaled.webp"
              alt="Solar panels"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          {/* Text */}
          <div className="lg:h-full h-1/2 lg:w-[29.5%] flex flex-col justify-between bg-green-500 p-8 rounded-3xl text-white">
            <h1 className="text-[40px] sm:text-[58px] lg:text-[2.95vw]">
              Rooftop Project
            </h1>
            <p className="text-md lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              reiciendis, commodi temporibus voluptatum porro quaerat nemo sint
              alias officia dolorum.
            </p>
            <button className="px-4 py-2 w-[136px] flex items-center bg-black border-white border rounded-3xl">
              Learn More
              <img src={arrow} alt="arrow icon" className="ml-2" />
            </button>
          </div>
        </div>

        {/* Ground Mount Project */}
        <div className="w-full h-[65vh] bg-slate-400 rounded-[35px] flex flex-col lg:flex-row-reverse justify-between p-5">
          {/* Image */}
          <div className="h-1/2 lg:h-full rounded-3xl w-full lg:w-[67.5%] bg-blue-500 overflow-hidden">
            <img
              src="https://engiemiddleeast.com/wp-content/uploads/NADEC-Featured-Image.jpg"
              alt="Solar panels"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          {/* Text */}
          <div className="lg:h-full h-1/2 lg:w-[29.5%] flex flex-col justify-between bg-green-500 p-8 rounded-3xl text-white">
            <h1 className="text-[40px] sm:text-[58px] lg:text-[2.95vw]">
              Ground Mount Project
            </h1>
            <p className="text-md lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              totam quaerat? Officiis minus voluptate consectetur iusto.
            </p>
            <button className="px-4 py-2 w-[136px] flex items-center bg-black border-white border rounded-3xl">
              Learn More
              <img src={arrow} alt="arrow icon" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csp;
