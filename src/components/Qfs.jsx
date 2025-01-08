const QualityFeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="4" className="fill-green-500" />
          <rect x="4" y="10" width="16" height="4" className="fill-green-500" />
          <rect x="4" y="16" width="16" height="4" className="fill-green-500" />
        </svg>
      ),
      title: "Layered security",
      description: "We prioritize your safety with a multi-layered security approach, ensuring robust system protection, secure installations, and continuous monitoring to keep your solar investment secure."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="2" className="stroke-green-500" />
          <circle cx="12" cy="12" r="4" className="fill-green-500" />
        </svg>
      ),
      title: "Quality control",
      description: "Our solar solutions undergo stringent quality control checks at every stage—from material selection to installation—guaranteeing top-notch performance and durability"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="2" className="stroke-green-500" />
          <circle cx="12" cy="12" r="4" className="fill-green-500" />
        </svg>
      ),
      title: "Quality control",
      description: "Our solar solutions undergo stringent quality control checks at every stage—from material selection to installation—guaranteeing top-notch performance and durability"
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8L12 22L16 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" className="fill-green-500" />
        </svg>
      ),
      title: "Reliable customer service",
      description: "Experience unparalleled customer support with our dedicated team, available 24/7 to address your concerns, provide guidance, and ensure seamless service at all times."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="2" className="stroke-green-500" />
          <path d="M12 16V17M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="stroke-green-500" />
        </svg>
      ),
      title: "Maintenance manual book",
      description: "Simplify system upkeep with our comprehensive maintenance manual, featuring clear instructions, troubleshooting tips, and best practices to maximize your solar system's efficiency."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeWidth="2" className="stroke-green-500" />
          <path d="M12 16V17M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="stroke-green-500" />
        </svg>
      ),
      title: "Maintenance manual book",
      description: "Simplify system upkeep with our comprehensive maintenance manual, featuring clear instructions, troubleshooting tips, and best practices to maximize your solar system's efficiency."
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            We offer quality,
            <span className="text-gray-400"> with the best materials and service</span>
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-lg w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityFeaturesSection;