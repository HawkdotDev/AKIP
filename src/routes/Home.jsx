import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "../components/AnimationCounter";
import SolarCalculator from "../components/SolarCalculator";
import maintainence from "../assets/images/Maintenance.jpg";
import QualityFeaturesSection from "../components/Qfs";
import ImageCarousel from "../components/ImageCaroursel";
import ServicesGrid from "../components/ServicesGrid";

const Home = () => {
  return (
    <>
      <div className="hero h-screen max-h-[1080px] relative">
        <div className="w-full h-full bg-gray-500 absolute">
          <video autoPlay loop muted className="w-full h-full object-cover z-1">
            <source src={video1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mobile w-full h-full absolute flex flex-col justify-end lg:hidden">
          <div className="w-full h-[30%] bg-white mb-6"></div>
          <div className="w-full h-2/5 mb-12 px-[10%] flex flex-col justify-end items-center">
            <div className="w-full h-[85%] backdrop-blur-sm bg-white/15 rounded-lg max-w-[412px]"></div>
          </div>
          <div className="w-full h-[120px] flex justify-between">
            <div className="w-[10%] h-full bg-white rounded-tr-xl"></div>
            <div className="w-[80%] h-full flex justify-evenly">
              <AnimatedCounter numsArray={[7]} decoration={"M"} />
              <AnimatedCounter numsArray={[250]} decoration={"+"} />
              <AnimatedCounter numsArray={[120]} decoration={"k"} />
            </div>
            <div className="w-[10%] h-full bg-white rounded-tl-xl"></div>
          </div>
        </div>
        <div className="desktop w-full h-full absolute lg:flex justify-end hidden">
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <div className="w-[70%] h-[60%] bg-white"></div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end">
            <div className="w-full h-[42.5%] mt-8 flex justify-center">
              <div className="w-2/3 h-full rounded-3xl bg-white/10 min-w-[430px] backdrop-blur-sm border border-white/25"></div>
            </div>
            <div className="w-full h-[27%] bg-white mt-14 rounded-tl-3xl flex justify-evenly">
              <AnimatedCounter numsArray={[7]} decoration={"M"} />
              <AnimatedCounter numsArray={[250]} decoration={"+"} />
              <AnimatedCounter numsArray={[120]} decoration={"k"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-8 lg:py-28 py-16 ">
        <div className="lg:flex justify-between">
          <h1 className="text-5xl text-gray-400 lg:w-[35%]">
            <span className="text-black">Lorem,</span> ipsum dolor sit amet{" "}
            <br />
            consectetur adipisicing
          </h1>
          <h1 className="lg:w-[55%] text-black text-xl lg:p-0 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            soluta ipsam deserunt doloribus animi expedita at, eveniet nihil
            aliquid iure adipisci cumque est ex fuga possimus enim dolorum, illo
            sapiente dolore minima. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Aspernatur, pariatur.
          </h1>
        </div>
      </div>
      <div className="">
        <div className="xl:flex-row flex-col flex h-full justify-between xl:px-16 py-8 px-8 gap-5 xl:gap-0 xl:items-center">
          <div className="xl:w-[69%] xl:h-full h-[48%]">
            <SolarCalculator />
          </div>

          <div className="xl:w-[29.5%] xl:h-full h-[50%] bg-white rounded-3xl p-5 flex flex-col">
            <img
              src={maintainence}
              alt="Description of Image"
              className="h-[369px] w-full object-fill rounded-2xl border border-white"
            />
            <h1 className="text-black text-3xl pt-2">
              <span className="text-gray-500">Lorem ipsum dolor</span>
              <br /> consectetur adipisicing.
            </h1>
            <p className="text-wrap mt-10 text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dolore harum iste!
            </p>
            <button className="bg-green-400 text-white p-2 rounded-full mt-10 px-8 w-[40%]">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <div className="md:h-[625px] bg-white md:flex items-center justify-center md:px-20 px-10 py-10">
        <ServicesGrid />
        <div className="h-full md:w-[50%] md:px-6 pt-10">
          <img
            src={maintainence}
            alt="Description of Image"
            className="w-full h-[300px] md:h-full object-cover rounded-2xl border border-black"
          />
        </div>
      </div>

      {/* <div className="h-[945px]"> */}
      <QualityFeaturesSection />
      {/* </div> */}
      <div className="lg:p-16 py-16 md:px-10 px-6 bg-[#FFFFFF] flex flex-col items-center justify-center">
        <h1 className="text-gray-500 text-4xl text-center mb-8">
          <span className="text-black">Lorem ipsum dolor,</span>
          sit amet <br /> consectetur adipisicing.
        </h1>
        <ImageCarousel />
      </div>
      <div className="mx-32">
        <div className="bg-gray-100 rounded-lg p-8 w-full mx-auto my-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-3xl font-medium">
                <span className="text-gray-400">Follow us</span>
                <br className="md:hidden" />
                <span className="ml-2">in LinkedIn</span>
              </h2>
              <p className="text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod
              </p>
              <a
                href="#"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
              >
                Follow us
                <span className="inline-block ml-1 transform rotate-45">↗</span>
              </a>
            </div>

            <div className="w-24 md:w-32">
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full fill-current text-blue-600"
                role="img"
                aria-label="LinkedIn logo"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
