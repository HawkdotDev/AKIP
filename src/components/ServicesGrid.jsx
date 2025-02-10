const ServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "Solar panels for home",
      text: "Explore reliable and cost-effective solar solutions designed to power your home efficiently while reducing energy costs.",
    },
    {
      id: "02",
      title: "Solar panels for industry",
      text: "Optimize your business operations with industrial-grade solar systems tailored for sustainability and high performance.",
    },
    {
      id: "03",
      title: "Solar panels for chargers",
      text: "Discover portable and eco-friendly solar charging solutions for your devices, keeping you powered anywhere.",
    },
    {
      id: "04",
      title: "Wind power generator",
      text: "Harness renewable wind energy with efficient and sustainable power generation systems for various applications.",
    },
  ];

  return (
    <div className="md:w-[50%] h-full">
      <div className="grid grid-cols-2 gap-4 w-full h-full">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 p-4 md:p-6 rounded-2xl space-y-3 md:space-y-4 aspect-square flex flex-col justify-between"
          >
            <div className="flex-grow">
              <span className="text-2xl md:text-4xl text-green-400 font-light">
                {service.id}
              </span>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-md xl:text-lg 2xl:text-xl font-semibold mt-3 ">
                  {service.title}
                </h3>
              </div>
            </div>
            <p className="inline-flex items-center space-x-2 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-600 hover:text-gray-900 transition-colors">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ServicesGrid;
