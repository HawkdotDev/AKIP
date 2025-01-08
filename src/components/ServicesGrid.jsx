

const ArrowIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7"/>
    <path d="M7 7h10v10"/>
  </svg>
);

const ServicesGrid = () => {
  const services = [
    {
      id: '01',
      title: 'Solar panels for home',
      link: '#'
    },
    {
      id: '02',
      title: 'Solar panels for industry',
      link: '#'
    },
    {
      id: '03',
      title: 'Solar panels for chargers',
      link: '#'
    },
    {
      id: '04',
      title: 'Wind power generator',
      link: '#'
    }
  ];

  return (
    <div className="md:w-[65%] h-full">
  <div className="grid grid-cols-2 gap-4 w-full h-full">
    {services.map((service) => (
      <div 
        key={service.id}
        className="bg-gray-100 p-4 md:p-6 rounded-lg space-y-3 md:space-y-4 flex flex-col justify-between"
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
        <a 
          href={service.link}
          className="inline-flex items-center space-x-2 text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>View details</span>
          <ArrowIcon />
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default ServicesGrid;