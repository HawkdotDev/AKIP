

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
    <div className="md:w-[65%] max-h-full">
      <div className="flex flex-col space-y-4 mb-8">
        <h2 className="text-2xl font-bold">
          Trusted service,
          <span className="text-gray-400 ml-2">for your various needs</span>
        </h2>
        
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg w-fit flex items-center space-x-2 hover:bg-emerald-600 transition-colors">
          <span>Get in touch</span>
          <ArrowIcon />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-gray-100 p-4 md:p-6 rounded-lg space-y-3 md:space-y-4"
          >
            <span className="text-2xl md:text-4xl text-gray-400 font-light">
              {service.id}
            </span>
            
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-xl font-semibold">
                {service.title}
              </h3>
              
              <a 
                href={service.link}
                className="inline-flex items-center space-x-2 text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span>View details</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;