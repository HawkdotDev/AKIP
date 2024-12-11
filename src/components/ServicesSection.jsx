/* eslint-disable no-unused-vars */
import arrow from "../assets/SVGs/move-up-right.svg";

const ServicesSection = ({
  // eslint-disable-next-line react/prop-types
  img,
  // eslint-disable-next-line react/prop-types
  pageName = "consectetur adipisicing elit",
  // eslint-disable-next-line react/prop-types
  text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            dolores reprehenderit dignissimos dolorum nisi sint autem officia
            aut sunt consequuntur maxime, nihil id, repellat beatae, obcaecati
            dolore optio ipsum consequatur, it amet consectetur adipisicing elit.
          `,
}) => {
  return (
    <div className="relative lg:h-[1000px] h-[145vh]">
      <div className="absolute lg:h-[80vh] h-[75%] w-full bg-green-400"></div>
      <div className="absolute h-full w-full px-9 py-20">
        <div className="w-full flex justify-between mt-16 mb-8 items-start">
          <div className="w-[30%] text-5xl flex items-start pr-4 ml-5">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            dolores reprehenderit dignissimos dolorum nisi sint autem officia
            aut sunt consequuntur maxime, nihil id, repellat beatae, obcaecati
            dolore optio ipsum consequatur.
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
            <h1 className="text-[45px] sm:text-[58px] lg:text-[2.95vw] xxl:text-[58px]">{pageName}</h1>
            <p className="text-[18px] md:text-[24px] lg:text-[1.5vw] 2xl:text-[20px]">{text}</p>
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