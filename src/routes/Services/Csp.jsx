import arrow from "../../assets/SVGs/move-up-right.svg";

const Csp = () => {
  return (
    <div className="relative h-[200vh]">
      <div className="absolute h-[80vh] w-full bg-green-400">
        <img
          src="https://cleantechsolar.com/content/uploads/DJI_0206-Divya-PC-scaled.jpg"
          alt="Solar panels"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="absolute w-full px-9 py-20">
        <div className="w-full text-white flex flex-col justify-evenly mt-16 mb-8 items-center text-center">
          <div className="xl:w-[30%] md:w-1/2 text-5xl flex items-start pr-4 ml-5 mb-8">
            Captive Solar Project
          </div>
          <div className="w-[70%]">
            A Solar Captive Project empowers businesses to take control of their
            energy needs by generating renewable energy directly at their
            premises or through dedicated solar plants. This model significantly
            reduces dependency on the grid, providing a reliable,
            cost-effective, and sustainable energy source. By investing in a
            captive solar project, companies can secure long-term energy
            savings, mitigate the impact of rising electricity tariffs, and
            ensure uninterrupted power supply for critical operations. It also
            helps businesses achieve their sustainability goals by reducing
            carbon emissions and demonstrating environmental responsibility.
            This solution is ideal for industries and organizations with high
            energy consumption, offering a customized, efficient, and clean
            energy alternative.
          </div>
        </div>
        <div className="w-full h-[65vh] bg-slate-400 rounded-[35px] flex justify-between p-5">
          <div className="h-full rounded-3xl w-[67.5%] bg-blue-500 overflow-hidden">
            <img
              src="https://ornatesolar.com/wp-content/uploads/2024/11/Captive-Solar-03-scaled.webp"
              alt="Solar panels"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="lg:h-full h-[46%] rounded-3xl lg:w-[29.5%] flex flex-col justify-between bg-green-500 p-8">
            <h1 className="text-[40px] ms:text-[45px] sm:text-[58px] lg:text-[2.95vw] xxl:text-[58px] leading-tight">
              Rooftop Project
            </h1>
            <p className="text-[14px] xs:text-[17px] ms:text-[18px] md:text-[24px] lg:text-[1.5vw] 2xl:text-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              reiciendis, commodi temporibus voluptatum porro quaerat nemo sint
              alias officia dolorum. Esse ex nam inventore rem. Obcaecati
              aspernatur cumque ea voluptatem at? Pariatur obcaecati beatae
              voluptate.
            </p>
            <button className="px-3 py-[6px] w-[136px] flex justify-between bg-black border-white border rounded-3xl text-white items-center">
              learn more
              <img src={arrow} alt="arrow icon" className="ml-1" />
            </button>
          </div>
        </div>
        <div className="w-full h-[65vh] bg-slate-400 rounded-[35px] mt-[15vh] flex justify-between p-5">
          <div className="h-full rounded-[35px] w-[67.5%] bg-blue-500 overflow-hidden">
            <img
              src="https://engiemiddleeast.com/wp-content/uploads/NADEC-Featured-Image.jpg"
              alt="Solar panels"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="lg:h-full h-[46%] rounded-3xl lg:w-[29.5%] flex flex-col justify-between bg-green-500 p-8">
            <h1 className="text-[40px] ms:text-[45px] sm:text-[58px] lg:text-[2.95vw] xxl:text-[58px] leading-tight">
              Ground Mount Project
            </h1>
            <p className="text-[14px] xs:text-[17px] ms:text-[18px] md:text-[24px] lg:text-[1.5vw] 2xl:text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              totam quaerat? Officiis minus voluptate consectetur iusto
              incidunt? Exercitationem enim quibusdam inventore esse ex dolor
              odit quo necessitatibus! Id ducimus exercitationem iure
              perferendis maiores accusantium consequatur?
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

export default Csp;
