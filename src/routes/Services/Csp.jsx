const Csp = () => {
  return (
    <div className="relative h-[200vh]">
      <div className="absolute h-[80vh] w-full bg-green-400"></div>
      <div className="absolute w-full px-9 py-20">
        <div className="w-full flex flex-col justify-evenly mt-16 mb-8 items-center text-center">
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
        <div className="w-full h-[65vh] bg-slate-400 rounded-3xl flex justify-between p-5">
          <div className="h-full rounded-3xl w-[67.5%] bg-blue-500"></div>
          <div className="h-full rounded-3xl w-[31.5%] bg-black"></div>
        </div>
        <div className="w-full h-[65vh] bg-slate-400 rounded-3xl mt-[15vh] flex justify-between p-5">
          <div className="h-full rounded-3xl w-[67.5%] bg-blue-500"></div>
          <div className="h-full rounded-3xl w-[31.5%] bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Csp;
