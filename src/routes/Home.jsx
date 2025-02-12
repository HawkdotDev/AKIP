import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "../components/AnimationCounter";
// import SolarCalculator from "../components/SolarCalculator";
import maintainence from "../assets/images/Maintenance.jpg";
import QualityFeaturesSection from "../components/Qfs";
// import ImageCarousel from "../components/ImageCaroursel";
import ServicesGrid from "../components/ServicesGrid";
import BrochureComponent from "../components/BrochureComponent";
import ShowcaseScroll from "../components/ShowcaseScroll";

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
          <div className="w-full h-[30%] mb-6 mt-12 flex flex-col items-center text-white">
            <p className="text-gray-100">
              Leading energy provider in the world
            </p>
            <h3 className="text-center text-6xl pt-7 font-medium">
              New Energy <br /> for the Future
            </h3>
            <BrochureComponent />
          </div>
          <div className="w-full h-2/5 mb-20 px-[10%] flex flex-col justify-end items-center"></div>
          <div className="w-full h-[120px] flex justify-between">
            <div className="w-[10%] h-full bg-white rounded-tr-xl"></div>
            <div className="w-[80%] h-full flex justify-evenly">
              <AnimatedCounter
                numsArray={[64]}
                decoration={""}
                greytext="till date"
                blacktext="Sites commissioned"
              />
              <AnimatedCounter
                numsArray={[120]}
                decoration={"MW"}
                greytext={"developed"}
                blacktext={"Worth of assets"}
              />
              <AnimatedCounter
                numsArray={[300]}
                decoration={"MW+"}
                greytext="in the Pipeline"
                blacktext="Worth of Projects"
              />
            </div>
            <div className="w-[10%] h-full bg-white rounded-tl-xl"></div>
          </div>
        </div>
        <div className="desktop w-full h-full absolute lg:flex justify-end hidden">
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <div className="w-[80%] h-[60%] flex flex-col justify-end mb-28">
              <p className="text-gray-100 lg:text-[1vw] xxl:text-[28.5px]">
                Leading energy provider in the world
              </p>
              <h3 className="text-6xl lg:text-[5.5vw] xxl:text-[120px] lg:pb-6 lg:pt-8 pt-7 font-medium text-white">
                New Energy <br /> for the Future
              </h3>
              <BrochureComponent />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end">
            <div className="w-full h-[42.5%] mt-8 flex justify-center"></div>
            <div className="w-full h-[27%] bg-white mt-14 rounded-tl-3xl flex justify-evenly">
              <AnimatedCounter
                numsArray={[64]}
                decoration={""}
                greytext="till date"
                blacktext="Sites commissioned"
              />
              <AnimatedCounter
                numsArray={[120]}
                decoration={"MW"}
                greytext={"developed"}
                blacktext={"Worth of assets"}
              />
              <AnimatedCounter
                numsArray={[300]}
                decoration={"MW+"}
                greytext="in the Pipeline"
                blacktext="Worth of Projects"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-8 lg:py-28 py-16 ">
        <div className="lg:flex justify-between">
          <h1 className="text-4xl text-gray-400 lg:w-[35%]">
            <span className="text-black">Focusing</span> on quality,
            <br />
            we maintain customer trust.
          </h1>
          <h1 className="lg:w-[55%] text-black text-xl lg:p-0 pt-5">
            At PAJVA, we make solar simple. With expert support and reliable
            solutions, we help homes and businesses go green, cut costs, and
            embrace energy independence.
          </h1>
        </div>
      </div>
      <ShowcaseScroll />

      <div className="md:h-[600px] bg-white md:flex items-center justify-center md:px-9 lg:px-16 px-8 py-10">
        <ServicesGrid />
        <div className="h-full md:w-[40%] md:pl-6 md:pt-0 pt-4">
          <img
            src={maintainence}
            alt="Description of Image"
            className="w-full h-[300px] md:h-full object-cover rounded-2xl border border-black"
          />
        </div>
      </div>

      <QualityFeaturesSection />

      {/* <div className="lg:p-16 py-16 md:px-10 px-6 bg-[#FFFFFF] flex flex-col items-center justify-center">
        <h1 className="text-gray-500 text-4xl text-center mb-8">
          <span className="text-black">Explore Our Success Stories: </span>
          See how our innovative solar solutions are<br /> transforming businesses and communities.
        </h1>
        <ImageCarousel />
      </div> */}

      {/* <div className="px-28 py-8">
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
            <svg
              viewBox="0 0 24 24"
              className="h-full w-[25%] fill-current text-blue-600"
              role="img"
              aria-label="LinkedIn logo"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
