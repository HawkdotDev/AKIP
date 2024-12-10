// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, icon, className = "" }) => (
  <div className={`bg-gray-100 p-6 rounded-lg ${className}`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="inline-flex items-center text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
      Learn More
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

// eslint-disable-next-line react/prop-types
const HeroCard = ({ title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-200 mb-4 text-sm">{description}</p>
    <button className="inline-flex items-center text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm">
      Register
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

const Services = () => {
  return (
    <div className="w-full px-7 pt-24">
      {/* Hero Section */}
      <div className="relative h-[800px] mb-12">
        <div className="absolute inset-0 bg-slate-600 rounded-[35px] overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ministra_visita_planta_fotosolar_Cerro_Dominador_%2832536431795%29.jpg/1280px-Ministra_visita_planta_fotosolar_Cerro_Dominador_%2832536431795%29.jpg"
            alt="Solar panels"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Services We Provide
              </h1>
              <p className="text-gray-200 mb-6 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Get in touch
                </button>
                <button className="bg-white text-gray-800 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Explore
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <HeroCard
                title="On-Site Solar Solutions"
                description="Lorem ipsum dolor sit amet, consectetur elit, sed enim tempor nisi ex incididunt et dolore magna aliqua."
              />
              <HeroCard
                title="Alternative Energy"
                description="Lorem ipsum dolor sit amet, consectetur elit, sed enim tempor nisi ex incididunt et dolore magna aliqua."
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">75%</div>
              <div className="text-sm opacity-80">
                Cost reduction in energy bill
              </div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">16M</div>
              <div className="text-sm opacity-80">
                Our happy satisfied clients
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 mb-12">
        <div className="mb-12 lg:flex justify-between">
          <h2 className="text-3xl font-semibold text-gray-700 mb-2 lg:w-[30%]">
            We are here for <br />{" "}
            <span className="font-bold">your Every Use</span>
          </h2>
          <p className="text-gray-600 lg:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia fuga, reiciendis nisi soluta
            inventore quidem saepe similique vitae facilis, ipsa nihil excepturi
            ducimus distinctio cum sunt veniam quam doloribus. Culpa autem
            reiciendis omnis harum blanditiis vel dolores quis veritatis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Captive Solar Project"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
