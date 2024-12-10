// eslint-disable-next-line react/prop-types
const ContactCard = ({ title, company, address }) => (
  <div className="p-6 rounded-lg">
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-800 mt-1">{company}</p>
    <p className="text-xs text-gray-600 mt-2">{address}</p>
    <div className="flex gap-2 mt-4">
      <button className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
        Contact
      </button>
      <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
        Email
      </button>
    </div>
  </div>
);

const ContactUs = () => {
  const contacts = {
    headOffice: {
      title: "HYDERABAD",
      company: "Fourth Partner House",
      address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
    },
    corporateOffice: {
      title: "HYDERABAD",
      company: "Fourth Partner Energy Private Ltd",
      address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
    },
    southZone: [
      {
        title: "BANGALORE",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      },
      {
        title: "CHENNAI",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      }
    ],
    westZone: [
      {
        title: "PUNE",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      },
      {
        title: "MUMBAI",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      }
    ],
    international: [
      {
        title: "SRI LANKA",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      },
      {
        title: "BANGLADESH",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      },
      {
        title: "INDONESIA",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      },
      {
        title: "VIETNAM",
        company: "Fourth Partner Energy Private Ltd",
        address: "Plot No.4A3, House No.6-3-635, 5th fl, Off NHT RNR HGH, Khairatabad - 500 015"
      }
    ]
  };

  return (
    <div className="mx-auto px-9 py-28">
      <h1 className="text-2xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Head Office</h2>
          <ContactCard {...contacts.headOffice} />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">CORPORATE OFFICE</h2>
          <ContactCard {...contacts.corporateOffice} />
        </div>
      </div>

      <div className="grid gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">SOUTH ZONE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-300 rounded-2xl">
            {contacts.southZone.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">WEST ZONE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-300 rounded-2xl">
            {contacts.westZone.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">INTERNATIONAL OFFICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-300 rounded-2xl">
            {contacts.international.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;