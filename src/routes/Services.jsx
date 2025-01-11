// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, icon, className = "" }) => (
  <div className={`bg-gray-200 p-9 rounded-3xl aspect-1 ${className}`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="w-full px-7 pt-24 bg-white">
      {/* Hero Section */}
      <div className="relative h-[800px] mb-12">
        <div className="absolute inset-0 bg-slate-600 rounded-[35px] overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1127159370/photo/electrician-mounting-solar-panel-on-roof-of-modern-house.jpg?s=612x612&w=0&k=20&c=lKnuBZVpT7ysgzswsMTXn7fdxugSs0BnzKBbtphViIE="
            alt="Solar panels"
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="relative h-full flex sm:flex-row flex-col justify-between xs:p-6 px-3 py-3">
          <div className="sm:h-full h-[55%] sm:w-[69%] w-full flex flex-col justify-around text-white md:p-7 p-1">
            <h3 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl lg:w-2/3">
              Lorem ipsum dolor sit
            </h3>
            <p className="lg:text-2xl md:text-xl sm:text-lg w-4/5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              incidunt accusantium aperiam eaque beatae amet corrupti, minima
              animi similique sapiente? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim, sed. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </p>
            <span>
              <a
                href="#"
                className="bg-green-500 py-3 px-4 text-xl text-black rounded-3xl"
              >
                Get in touch
              </a>
            </span>
          </div>

          <div className="sm:w-[30%] w-full sm:h-full h-[44.5%] flex sm:flex-col justify-between invisible">
            <div className="sm:h-[64%] h-full w-[59%] sm:w-full bg-green-500 rounded-3xl 2xl:p-10 p-6  flex flex-col justify-between">
              <h3 className="2xl:text-6xl xl:text-5xl lg:text-4xl ms:text-3xl text-xl">
                Lorem ipsum dolor sit.
              </h3>
              <p className="2xl:text-xl lg:text-lg w-[97.5%] md:text-sm xs:text-xs text-[10px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates consequuntur provident quis totam quos atque,
                necessitatibus aliquam distinctio. Minus explicabo non odio
                aliquid atque dignissimos? Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
              <a
                href="#"
                className="text-white bg-black rounded-full py-2 px-4 w-24"
              >
                Open
              </a>
            </div>

            <div className="sm:h-[35%] h-full w-[40%] sm:w-full backdrop-blur-sm bg-white/40 rounded-3xl lg:flex-row flex-col flex justify-around sm:justify-between p-4 text-white items-center">
              <div className="lg:text-[4.25vw] text-[42px] xxl:text-[82px] w-1/2 text-center flex flex-col items-center">
                75%
                <p className="lg:text-[1.15vw] text-[11.5px] xxl:text-[22.5px] w-36 lg:w-auto">
                  Lorem ipsum dolor <br /> sit amet consectetur.
                </p>
              </div>
              <div className="lg:text-[4.25vw] text-[42px] xxl:text-[82px] w-1/2 text-center flex flex-col items-center">
                16M
                <p className="lg:text-[1.15vw] text-[11.5px] xxl:text-[22.5px] w-36 lg:w-auto">
                  Lorem ipsum dolor <br /> sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 pb-12">
        <div className="mb-12 lg:flex justify-between">
          <h2 className="text-3xl font-semibold text-gray-700 mb-2 lg:w-[30%]">
            We are here for <br />{" "}
            <span className="font-bold">your Every Use</span>
          </h2>
          <p className="text-gray-600 lg:w-[70%] lg:mt-0 mt-4">
            At Antyodya Ujas, we provide innovative solar energy solutions
            tailored to power your homes and businesses efficiently. From
            installation to maintenance, we ensure sustainable energy for a
            brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:px-36 xl:px-24">
          <ServiceCard
            title="Captive Solar Project"
            description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Open Access Project"
            description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <ServiceCard
            title="OPEX Solutions"
            description="Adopt operational expenditure models for solar installations, minimizing upfront costs and maximizing returns on renewable energy investments."
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />

          <ServiceCard
            title="BESS System"
            description="Integrate Battery Energy Storage Systems (BESS) to optimize solar power usage, enabling energy storage and reliable backup solutions for enhanced efficiency."
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
          />

          <ServiceCard
            title="IOT"
            description="Harness the Internet of Things (IoT) for intelligent solar energy management, enabling real-time monitoring, data analytics, and enhanced system performance. Rooftop solar project"
            icon={
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
