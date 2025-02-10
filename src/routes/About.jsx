// import ShowcaseScroll from "../components/ShowcaseScroll";
import img from "../assets/images/sections/sectionImage.jpg";

const RenewableEnergyGrid = () => {
  const gridItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 22V2" />
        </svg>
      ),
      title: ["Trusted Renewable", "Energy Provider"],
      description: [
        "We help Indian businesses",
        "shift to green power effortlessly.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M11 21h2v-3c0-.6-.4-1-1-1s-1 .4-1 1v3z" />
          <path d="M16 16.5a5 5 0 0 0-10 0V17h10v-.5z" />
          <path d="m15 9-3-3V2l-3 3v5h6V9z" />
        </svg>
      ),
      title: ["Independent", "Power Producer (IPP)"],
      description: [
        "We specialize in delivering reliable",
        "clean energy solutions.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 2v5h5v2h-5v5h-2v-5H8V7h5V2z" />
          <rect width="8" height="6" x="3" y="14" rx="1" />
          <path d="M14 14h3v4h-3z" />
        </svg>
      ),
      title: ["Flexible Power Purchase", "Agreements (PPAs)"],
      description: [
        "Businesses can offset up to 70%",
        "of their power use with renewable energy.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8v8" />
          <path d="M11 12V8" />
          <path d="M15 16v-4" />
          <path d="M19 12v-4" />
        </svg>
      ),
      title: ["Diverse", "Energy Mix"],
      description: [
        "We use solar, wind, and battery storage",
        "for maximum efficiency and sustainability.",
      ],
    },
  ];

  return (
    <div className="w-[70%] mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:aspect-[1.1/0.65]">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="bg-white text-center rounded-lg p-6 flex flex-col items-center space-y-4 transition-shadow"
        >
          {item.icon}
          <h3 className="md:text-4xl xs:text-3xl text-xl font-semibold text-gray-800">
            {item.title[0]}
            <br />
            {item.title[1]}
          </h3>
          <p className="text-gray-600 xl:text-lg">
            {item.description[0]} <br /> {item.description[1]}
          </p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="hero h-screen max-h-[1080px] relative">
        <div className="w-full h-full bg-gray-500 absolute">
          <img
            src="https://www.globalcoachcenter.com/wp-content/uploads/2024/05/Firefly-Business-workers-in-office-in-India-collaborating-in-conference-room-39423-scaled-e1726484919417.jpg"
            alt="Solar panels"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="w-full h-full absolute flex flex-col items-center justify-end text-white">
          <div className="max-w-[80%] h-full pt-44 md:h-[70%] mx-auto">
            <div className="text-center h-full flex flex-col justify-between mb-16">
              <h1 className="text-6xl font-bold mb-8">We Are PAJVA</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 mask-triangle" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Leading the Energy Transition
                  </h3>
                  <p className="text-gray-600">
                    We provide sustainable and efficient power solutions for
                    individuals, businesses, and industries.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 mask-lightning" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Renewable IPP</h3>
                  <p className="text-gray-600">
                    As a Renewable Individual Power Producer (IPP), we deliver
                    comprehensive energy solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 mask-gear" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    End-to-End Efficiency
                  </h3>
                  <p className="text-gray-600">
                    We help clients generate, store, and manage clean energy
                    with maximum efficiency and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-8">We Are PAJVA</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 mask-triangle" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Leading the Energy Transition
                </h3>
                <p className="text-gray-600">
                  We provide sustainable and efficient power solutions for
                  individuals, businesses, and industries.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 mask-lightning" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Renewable IPP</h3>
                <p className="text-gray-600">
                  As a Renewable Individual Power Producer (IPP), we deliver
                  comprehensive energy solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 mask-gear" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  End-to-End Efficiency
                </h3>
                <p className="text-gray-600">
                  We help clients generate, store, and manage clean energy with
                  maximum efficiency and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-white pt-14 flex flex-col items-center">
        <h2 className="text-4xl text-center mb-14 mx-6 bg-green-200 py-4 w-[75%] lg:w-[70%] xl:w-[62%]">
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <div className="text-center max-w-6xl mx-auto mb-5 px-10 xl:p-0 sm:px-16 text-xl sm:text-2xl xl:text-3xl">
            <p className="text-gray-600 mb-6">
              Empowering a Sustainable Future Through Renewable Energy
              Innovation
            </p>
            <p className="text-gray-600 mb-6">
              At <span className="text-green-500 font-semibold">PAJVA</span>, we
              are at the forefront of the energy transition, pioneering
              sustainable and efficient power solutions tailored to meet the
              growing demands of individuals, businesses, and industries.
            </p>
            <p className="text-gray-600">
              As a Renewable Individual Power Producer (IPP), we provide
              end-to-end energy solutions that enable our clients to generate,
              store, and manage clean energy with maximum efficiency and
              reliability.
            </p>
          </div>
          <RenewableEnergyGrid />
          <p className="text-center text-gray-600 max-w-6xl mx-auto mb-14 px-10 xl:p-0 sm:px-16 text-xl sm:text-2xl xl:text-3xl">
            With a strong commitment to sustainability and technological
            excellence, we specialize in Engineering, Procurement & Construction
            (EPC) services, **Battery Energy Storage Solutions (BESS), and
            **On-Site and Off-Site Renewable Energy Solutions, helping
            businesses and individuals achieve energy independence while
            reducing their carbon footprint.
          </p>
          <h2 className="mb-4 sm:my-8 text-xl sm:text-2xl lg:text-4xl font-medium">
            Our <span className="text-green-400">Values</span>
          </h2>
          <img
            src={img}
            alt="Solar panels"
            className="w-full object-cover lg:px-24 mb-10"
          />
        </div>
      </div>
    </>
  );
};

export default About;
