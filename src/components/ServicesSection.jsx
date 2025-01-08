/* eslint-disable no-unused-vars */
import arrow from "../assets/SVGs/move-up-right.svg";

const ServicesSection = ({
  // eslint-disable-next-line react/prop-types
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ministra_visita_planta_fotosolar_Cerro_Dominador_%2832536431795%29.jpg/1280px-Ministra_visita_planta_fotosolar_Cerro_Dominador_%2832536431795%29.jpg",
  // eslint-disable-next-line react/prop-types
  pageName = "consectetur adipisicing elit",
  // eslint-disable-next-line react/prop-types
  text,
  // eslint-disable-next-line react/prop-types
  sub
}) => {
  return (
    <div className="relative lg:h-[1000px] h-[145vh]">
      <div className="absolute lg:h-[80vh] h-[75%] w-full bg-green-400">
        <img
          src={img}
          alt="Solar panels"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="absolute h-full w-full px-9 py-20">
        <div className="flex lg:flex-row flex-col pt-8 px-2 items-center pb-9 text-white">
          <div className="text-sm md:text-lg mt-12 mb-8 text-center">
            {text}
          </div>
        </div>
        <div className="w-full lg:h-[650px] h-[78%] bg-white rounded-3xl lg:flex-row flex-col flex justify-between p-5">
          <div className="lg:h-full h-[51.5%] rounded-3xl lg:w-[69.25%] overflow-hidden">
            <img
              src="https://icehrm.com/blog/content/images/2023/11/pexels-yan-krukau-7793730-1.jpg"
              alt="Solar panels"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="lg:h-full h-[46%] rounded-3xl lg:w-[29.5%] flex flex-col justify-between bg-green-500 p-8">
            <h1 className="text-[40px] ms:text-[45px] sm:text-[58px] lg:text-[2.95vw] xxl:text-[58px] leading-tight">
              {pageName}
            </h1>
            <p className="text-[14px] xs:text-[17px] ms:text-[18px] md:text-[24px] lg:text-[1.5vw] 2xl:text-[20px]">
              {sub}
            </p>
            <button className="px-3 py-[6px] w-[136px] flex justify-between bg-black border-white border rounded-3xl text-white items-center">
              learn more
              <img src={arrow} alt="arrow icon" className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
