const Csp = () => {
  return (
    <div className="relative h-[200vh]">
      <div className="absolute h-[80vh] w-full bg-green-400"></div>
      <div className="absolute w-full px-9 py-20">
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
