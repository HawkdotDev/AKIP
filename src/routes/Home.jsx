import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "../components/AnimationCounter";
import SolarCalculator from "../components/SolarCalculator";
import maintainence from "../assets/images/Maintenance.jpg";
import QualityFeaturesSection from "../components/Qfs";
import ImageCarousel from "../components/ImageCaroursel";
import ServicesGrid from "../components/ServicesGrid";
import BrochureComponent from "../components/BrochureComponent";

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
            <p className="text-gray-100">#1 Energy provider in the world</p>
            <h3 className="text-center text-6xl pt-7 font-medium">
              New Energy <br /> for the Future
            </h3>
            <BrochureComponent />
          </div>
          <div className="w-full h-2/5 mb-20 px-[10%] flex flex-col justify-end items-center">
            <div className="card w-full h-[85%] backdrop-blur-sm bg-white/15 rounded-3xl max-w-[412px] p-3 min-w-[400px]">
              <div className="w-full h-[62.5%] flex justify-between">
                <img
                  src={maintainence}
                  alt="Description of Image"
                  className="w-[72.5%] h-full object-cover rounded-2xl border border-white"
                />
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M222.72-391.52q-36.63 0-62.68-25.99Q134-443.5 134-480q0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.73 0 62.88 25.76 26.16 25.76 26.16 62.44 0 36.67-26.08 62.72-26.09 26.04-62.72 26.04Zm257.56 0q-36.67 0-62.72-25.99-26.04-25.99-26.04-62.49 0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.96 0 62.72 25.76 25.76 25.76 25.76 62.44 0 36.67-25.76 62.72-25.76 26.04-62.44 26.04Zm257.4 0q-36.79 0-63-25.99-26.2-25.99-26.2-62.49 0-36.96 26.2-62.72 26.21-25.76 63-25.76 36.8 0 62.56 25.76Q826-516.96 826-480.28q0 36.67-25.76 62.72-25.76 26.04-62.56 26.04Z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center pl-1 h-[37.5%]">
                <div className="text-2xl w-[72%] mt-1 font-medium text-white">
                  Discover our <br /> latest projects
                  <p className="text-wrap text-xs mt-1 font-normal text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur veniam!
                  </p>
                </div>
                <div className="w-[25%] h-full flex justify-end items-end">
                  <div className="bg-white/30 hover:bg-black/40 border border-white w-16 h-16 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#e8eaed"
                    >
                      <path d="M214.87-141.91 140.78-216l456.65-456.65H351.52v-106h426v426h-106v-245.91L214.87-141.91Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="w-[70%] h-[60%]">
              <p className="text-gray-100">#1 Energy provider in the world</p>
              <h3 className="text-center text-6xl pt-7 font-medium">
                New Energy <br /> for the Future
              </h3>
              <BrochureComponent />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end">
            <div className="w-full h-[42.5%] mt-8 flex justify-center">
              <div className="w-2/3 h-full rounded-3xl bg-white/10 min-w-[475px] max-w-[550px] min-h-[345px] backdrop-blur-sm border border-white/25 p-3">
                <div className="w-full h-[62.5%] flex justify-between">
                  <img
                    src={maintainence}
                    alt="Description of Image"
                    className="w-[72.5%] h-full object-cover rounded-2xl border border-white"
                  />
                  <div className="w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M222.72-391.52q-36.63 0-62.68-25.99Q134-443.5 134-480q0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.73 0 62.88 25.76 26.16 25.76 26.16 62.44 0 36.67-26.08 62.72-26.09 26.04-62.72 26.04Zm257.56 0q-36.67 0-62.72-25.99-26.04-25.99-26.04-62.49 0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.96 0 62.72 25.76 25.76 25.76 25.76 62.44 0 36.67-25.76 62.72-25.76 26.04-62.44 26.04Zm257.4 0q-36.79 0-63-25.99-26.2-25.99-26.2-62.49 0-36.96 26.2-62.72 26.21-25.76 63-25.76 36.8 0 62.56 25.76Q826-516.96 826-480.28q0 36.67-25.76 62.72-25.76 26.04-62.56 26.04Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center pl-1 h-[37.5%]">
                  <div className="text-2xl w-[72%] mt-1 font-medium text-white">
                    Discover our <br /> latest projects
                    <p className="text-wrap text-xs mt-1 font-normal text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur veniam!
                    </p>
                  </div>
                  <div className="w-[25%] h-full flex justify-end items-end">
                    <div className="bg-white/30 hover:bg-black/40 border border-white w-16 h-16 rounded-full flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="32px"
                        viewBox="0 -960 960 960"
                        width="32px"
                        fill="#e8eaed"
                      >
                        <path d="M214.87-141.91 140.78-216l456.65-456.65H351.52v-106h426v426h-106v-245.91L214.87-141.91Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
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

      <div className="md:h-[625px] bg-white md:flex items-center justify-center md:px-9 lg:px-10 px-8 py-10">
        <ServicesGrid />
        <div className="h-full md:w-[50%] md:pl-6 pt-10">
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
      <div className="px-28 py-8">
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
      </div>
    </>
  );
};

export default Home;
