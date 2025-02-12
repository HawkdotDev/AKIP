import expertise from "../assets/Icons/HomePageUSPs/Expertise.png";
import market from "../assets/Icons/HomePageUSPs/highgrowthmarket.png";
import portfolio from "../assets/Icons/HomePageUSPs/portfolio.png";
import financial from "../assets/Icons/HomePageUSPs/finance.png";
import sustainable from "../assets/Icons/HomePageUSPs/sustainanbleimpact.png";
import Fostering from "../assets/Icons/HomePageUSPs/partnerships.png";

const QualityFeaturesSection = () => {
  const features = [
    {
      icon: (
        expertise
      ),
      title: "Established Expertise",
      description:
        "With more than a decade of experience, PAJVA boasts a successful portfolio of projects. Our dedicated team navigates the market with unrivaled expertise, minimizing risks and maximizing returns.",
    },
    {
      icon: (
        market
      ),
      title: "High-Growth Market",
      description:
        "India's renewable energy market is seeing unprecedented growth, presenting immense growth opportunities for investors. PAJVA leads a proven track record and ambitious expansion plans.",
    },
    {
      icon: (
        portfolio
      ),
      title: "Diversified Portfolio",
      description:
        "PAJVA offers a robust mix of solar, wind, and battery storage projects, mitigating risks and optimizing returns across diverse renewable energy streams. Seamlessly driving sustainable energy solutions.",
    },
    {
      icon: (
        financial
      ),
      title: "Financial Stability",
      description:
        "PAJVA enjoys strong financial stability and unrestricted access to essential resources, enabling continuous growth, innovation, and market expansion.",
    },
    {
      icon: (
        sustainable
      ),
      title: "Sustainable Impact",
      description:
        "You contribute to a greener future while earning attractive returns. Your investment fuels India's clean energy transition and creates a lasting positive impact.",
    },
    {
      icon: (
        Fostering
      ),
      title: "Fostering Partnerships",
      description:
        "By prioritizing customer success, we create a ripple effect of positive impact. Your growth fuels a greener future, demonstrating collaborative action.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            We offer quality,
            <span className="text-gray-400">
              {" "}
              with the best materials and service
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-4">
                <img
                  src={feature.icon}
                  className="w-[17.5%] h-full object-contain p-2"
                />
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
