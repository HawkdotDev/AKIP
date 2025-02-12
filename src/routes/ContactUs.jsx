import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ContactCard = ({ title, address }) => {
  const phoneNumber = "+919007648538";
  const [copied, setCopied] = useState(false);

  const handleContactClick = (e) => {
    if (window.innerWidth > 1024) {
      // Prevent default behavior on desktop
      e.preventDefault();

      // Copy to clipboard
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
      });
    }
    // On mobile, href="tel:+919007648538" will trigger the dialer
  };

  return (
    <div className="p-6 rounded-lg border border-gray-300 bg-slate-200 flex flex-col justify-between">
      <h3 className="font-semibold text-gray-900 text-xl">{title}</h3>
      <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">{address}</p>
      <div className="mt-4 flex flex-wrap gap-5">
        <a
          href={`tel:${phoneNumber}`}
          onClick={handleContactClick}
          className={`px-4 py-2 text-sm text-white rounded-md flex items-center transition-all duration-300 ${
            copied ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Number Copied!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#e8eaed"
                className="mr-2"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              Contact
            </>
          )}
        </a>

        <a
          href="mailto:aaryan.agrahari@pajva.in"
          className="px-4 py-2 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e8eaed"
            className="mr-2"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
          Get in touch
        </a>
      </div>
    </div>
  );
};


const ContactUs = () => {
  const contacts = [
    {
      title: "Bangalore Head Office",
      address:
        "\nSJR Plazza City,\nSarjapura Main Road,\nnear Wipro Office,\nBangalore, Karnataka 562125, India",
    },
    {
      title: "Kolkata Office",
      address:
        "\n32B, Ganesh Chandra Avenue,\nKolkata, 700013 West Bengal, India",
    },
    {
      title: "Mumbai Service Office",
      address:
        "\nYewai to Savad Naka Road,\nNext to All Saints High School,\nBhiwandi – 421302",
    },
    {
      title: "Chennai Service Office",
      address:
        "\nW304, 461/2C,\nPuzhal Village,\nPuzhal Ambattur Road,\nChennai, Tamil Nadu-600066",
    },
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
