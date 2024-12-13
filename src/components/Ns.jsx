import ArrowUpRight from '../assets/SVGs/move-up-right.svg';

const NewsletterSection = () => {
  const articles = [
    {
      title: "Why is Karnataka Indias Leader in Renewable Energy Generation",
      image: "/api/placeholder/400/300",
      category: "Highlights"
    },
    {
      title: "Indias EV Charging Infrastructure Ecosystem",
      image: "/api/placeholder/400/300"
    },
    {
      title: "What are Bifacial Solar Panels and How Can They be Utilised",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Article Cards */}
        {articles.map((article, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20">
              <div className="absolute bottom-0 p-4">
                {article.category && (
                  <span className="inline-block px-3 py-1 mb-2 text-sm text-white bg-green-500 rounded-full">
                    {article.category}
                  </span>
                )}
                <h3 className="text-white font-semibold text-lg">
                  {article.title}
                </h3>
              </div>
              <button className="absolute top-2 right-2 p-2 text-white hover:bg-black/20 rounded-full transition-colors">
                <img src={ArrowUpRight} />
              </button>
            </div>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div className="bg-green-500 rounded-lg p-6 flex flex-col justify-center md:col-span-2 lg:col-span-1">
          <h2 className="text-white font-bold text-2xl mb-4">
            Follow our Newsletters for all updates
          </h2>
          <button className="bg-black text-white px-6 py-2 rounded-lg w-fit hover:bg-black/80 transition-colors">
            Newsletter <img src={ArrowUpRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;