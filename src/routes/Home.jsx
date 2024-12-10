import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "../components/AnimationCounter";

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
            <div className="w-full h-1/3 bg-white mt-14 rounded-tl-3xl"></div>
          </div>
        </div>
      </div>
      <div className="h-[425px] bg-white"></div>
      <div className="h-screen max-h-[780px]"></div>
      <div className="h-screen bg-white"></div>
      <div className="h-[945px]"></div>
      <div className="h-[1225px] bg-white"></div>
    </>
  );
};

export default Home;
