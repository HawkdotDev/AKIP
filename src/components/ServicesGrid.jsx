const ServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "Solar panels for home",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum ad, quaerat animi eligendi aperiam.",
    },
    {
      id: "02",
      title: "Solar panels for industry",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum ad, quaerat animi eligendi aperiam.",
    },
    {
      id: "03",
      title: "Solar panels for chargers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum ad, quaerat animi eligendi aperiam.",
    },
    {
      id: "04",
      title: "Wind power generator",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum ad, quaerat animi eligendi aperiam.",
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
              <span className="text-2xl md:text-4xl text-gray-400 font-light">
                {service.id}
              </span>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-xl font-semibold mt-3 ">
                  {service.title}
                </h3>
              </div>
            </div>
            <p className="inline-flex items-center space-x-2 text-sm md:text-lg text-gray-600 hover:text-gray-900 transition-colors">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ServicesGrid;
