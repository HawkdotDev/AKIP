import csp from "../assets/Icons/Services/Untitled-1.png";
import oap from "../assets/Icons/Services/Untitled-2.png";
import opex from "../assets/Icons/Services/Untitled-3.png";
import BESS from "../assets/Icons/Services/Untitled-4.png";
import iot from "../assets/Icons/Services/Untitled-5.png";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, icon, link, className = "" }) => (
  <div
    className={`lg:w-[32%] flex flex-col  bg-gray-200 p-9 sm:mb-0 mb-4 rounded-3xl aspect-1 ${className}`}
  >
    <img
      src={icon}
      alt="icon"
      className="w-[28%] h-auto object-cover mb-[2%]"
    />
    <h3 className="text-[6vw] sm:text-5xl md:text-[28px] lg:text-[26px] xl:text-3xl 2xl:text-[40px] font-semibold mb-3 mt-10 lg:mt-6">
      {title}
    </h3>
    <p className="text-[4.5vw] sm:text-[27px] text-gray-600 mb-4 xs:mt-8 xl:mt-10 md:text-[18px] lg:mt-5 xl:text-2xl 2xl:text-[28px] 2xl:leading-[40px]">
      {description}
    </p>
    <a
      href={link}
      className="bg-green-400 text-white py-3 rounded-full mt-4 px-10 w-44 text-justify hover:bg-green-500"
    >
      Learn more
    </a>
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
          <div className="sm:h-full h-[55%] w-full lg:w-[69%] flex flex-col justify-around text-white md:p-7 p-1">
            <h3 className="xl:text-7xl xl:leading-[80px] md:text-7xl sm:text-6xl text-5xl 2xl:w-2/3 sm:m-0 mt-6">
              Powering a Sustainable Future with End-to-End Solar EPC Solutions
            </h3>
            <p className="lg:text-xl xl:text-2xl 2xl:text-[28.5px] sm:text-lg xl:w-4/5 sm:w-4/5 w-full mt-10">
              As a leading solar EPC manufacturer in India, we specialize in
              delivering turnkey solutions that harness the power of the sun.
              From engineering design and procurement to seamless project
              execution and maintenance, our expertise ensures efficiency,
              reliability, and sustainability in every project. Partner with us
              to illuminate your path toward clean energy.
            </p>
            <span className="sm:m-0 mt-16">
              <a
                href="#"
                className="bg-green-500 py-3 px-4 text-xl text-black rounded-3xl"
              >
                Get in touch
              </a>
            </span>
          </div>

          <div className="sm:w-[30%] w-full sm:h-full h-[44.5%] hidden lg:flex sm:flex-col justify-between invisible">
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
      <div className="md:px-6 pb-12">
        <div className="mb-12 lg:flex justify-between">
          <h2 className="text-3xl font-semibold text-gray-700 mb-2 lg:w-[30%]">
            We are here for <br />{" "}
            <span className="font-bold">your Every Use</span>
          </h2>
          <p className="text-gray-600 lg:w-[70%] text-xl lg:mt-0 mt-4">
            At Antyodya Ujas, we provide innovative solar energy solutions
            tailored to power your homes and businesses efficiently. From
            installation to maintenance, we ensure sustainable energy for a
            brighter future.
          </p>
        </div>

        <div className="flex-col lg:flex gap-3 items-center hidden w-full">
          <div className="flex gap-3 justify-center">
            <ServiceCard
              title="Captive Solar Project"
              description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
              icon={csp}
              link="/Services/Captive-Solar-Project"
            />
            <ServiceCard
              title="Open Access Project"
              description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
              icon={oap}
              link="/Services/Open-Access-Project"
            />
            <ServiceCard
              title="OPEX Solutions"
              description="Adopt operational expenditure models for solar installations, minimizing upfront costs and maximizing returns on renewable energy investments."
              icon={opex}
              link="/Services/Opex-Solution"
            />
          </div>
          <div className="flex gap-3 w-[100%] justify-center">
            <ServiceCard
              title="BESS System"
              description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
              icon={BESS}
              link="/Services/BESS-System"
            />
            <ServiceCard
              title="IOT"
              description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
              icon={iot}
              link="/Services/IOT"
            />
          </div>
        </div>

        <div className="flex-col lg:hidden gap-3 items-center md:flex hidden">
          <div className="flex gap-3">
            <ServiceCard
              title="Captive Solar Project"
              description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
              icon={csp}
              link="/Services/Captive-Solar-Project"
            />
            <ServiceCard
              title="Open Access Project"
              description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
              icon={oap}
              link="/Services/Open-Access-Project"
            />
          </div>
          <div className="flex gap-3">
            <ServiceCard
              title="OPEX Solutions"
              description="Adopt operational expenditure models for solar installations, minimizing upfront costs and maximizing returns on renewable energy investments."
              icon={opex}
              link="/Services/Opex-Solution"
            />
            <ServiceCard
              title="BESS System"
              description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
              icon={BESS}
              link="/Services/BESS-System"
            />
          </div>
          <div className="flex gap-3 w-[50%]">
            <ServiceCard
              title="IOT"
              description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
              icon={iot}
              link="/Services/IOT"
            />
          </div>
        </div>

        <div className="flex-col gap-3 items-center md:hidden sm:flex hidden">
          <ServiceCard
            title="Captive Solar Project"
            description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
            icon={csp}
            link="/Services/Captive-Solar-Project"
          />
          <ServiceCard
            title="Open Access Project"
            description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
            icon={oap}
            link="/Services/Open-Access-Project"
          />
          <ServiceCard
            title="OPEX Solutions"
            description="Adopt operational expenditure models for solar installations, minimizing upfront costs and maximizing returns on renewable energy investments."
            icon={opex}
            link="/Services/Opex-Solution"
          />
          <ServiceCard
            title="BESS System"
            description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
            icon={BESS}
            link="/Services/BESS-System"
          />
          <ServiceCard
            title="IOT"
            description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
            icon={iot}
            link="/Services/IOT"
          />
        </div>

        <div className="gap-3 items-center sm:hidden">
          <ServiceCard
            title="Captive Solar Project"
            description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
            icon={csp}
            link="/Services/Captive-Solar-Project"
          />
          <ServiceCard
            title="Open Access Project"
            description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
            icon={oap}
            link="/Services/Open-Access-Project"
          />
          <ServiceCard
            title="OPEX Solutions"
            description="Adopt operational expenditure models for solar installations, minimizing upfront costs and maximizing returns on renewable energy investments."
            icon={opex}
            link="/Services/Opex-Solution"
          />
          <ServiceCard
            title="BESS System"
            description="Leverage dedicated solar energy solutions tailored for businesses, ensuring uninterrupted power supply, cost efficiency, and sustainability."
            icon={BESS}
            link="/Services/BESS-System"
          />
          <ServiceCard
            title="IOT"
            description="Explore the benefits of solar power through open-access platforms, enabling industries to source clean energy directly from solar producers."
            icon={iot}
            link="/Services/IOT"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
