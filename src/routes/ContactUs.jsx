// eslint-disable-next-line react/prop-types
const ContactCard = ({ title, address }) => (
  <div className="p-6 rounded-lg border border-gray-300 bg-slate-200">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">{address}</p>
    <div className="mt-4">
      <a href="tel:+919007648538" className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
        Get in touch
      </a>
    </div>
  </div>
);

const ContactUs = () => {
  const contacts = [
    {
      title: "Bangalore Head Office",
      address: "\nSJR Plazza City,\nSarjapura Main Road,\nnear Wipro Office,\nBangalore, Karnataka 562125, India"
    },
    {
      title: "Kolkata Office",
      address: "\n32B, Ganesh Chandra Avenue,\nKolkata, 700013 West Bengal, India"
    },
    {
      title: "Mumbai Service Office",
      address: "\nYewai to Savad Naka Road,\nNext to All Saints High School,\nBhiwandi – 421302"
    },
    {
      title: "Chennai Service Office",
      address: "\nW304, 461/2C,\nPuzhal Village,\nPuzhal Ambattur Road,\nChennai, Tamil Nadu-600066"
    }
  ];

  return (
    <div className="mx-auto px-9 py-28 min-h-[75vh]">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
