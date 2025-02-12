// import ShowcaseScroll from "../components/ShowcaseScroll";
import img from "../assets/images/sections/sectionImage.jpg";
import Logo from "../assets/images/Logo2.png";

const RenewableEnergyGrid = () => {
  const gridItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 22V2" />
        </svg>
      ),
      title: ["Trusted Renewable", "Energy Provider"],
      description: [
        "We help Indian businesses",
        "shift to green power effortlessly.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M11 21h2v-3c0-.6-.4-1-1-1s-1 .4-1 1v3z" />
          <path d="M16 16.5a5 5 0 0 0-10 0V17h10v-.5z" />
          <path d="m15 9-3-3V2l-3 3v5h6V9z" />
        </svg>
      ),
      title: ["Independent", "Power Producer (IPP)"],
      description: [
        "We specialize in delivering reliable",
        "clean energy solutions.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 2v5h5v2h-5v5h-2v-5H8V7h5V2z" />
          <rect width="8" height="6" x="3" y="14" rx="1" />
          <path d="M14 14h3v4h-3z" />
        </svg>
      ),
      title: ["Flexible Power Purchase", "Agreements (PPAs)"],
      description: [
        "Businesses can offset up to 70%",
        "of their power use with renewable energy.",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8v8" />
          <path d="M11 12V8" />
          <path d="M15 16v-4" />
          <path d="M19 12v-4" />
        </svg>
      ),
      title: ["Diverse", "Energy Mix"],
      description: [
        "We use solar, wind, and battery storage",
        "for maximum efficiency and sustainability.",
      ],
    },
  ];

  return (
    <div className="w-[70%] mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:aspect-[1.1/0.65]">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="bg-white text-center rounded-lg p-6 flex flex-col items-center space-y-4 transition-shadow"
        >
          {item.icon}
          <h3 className="md:text-4xl xs:text-3xl text-xl font-semibold text-gray-800">
            {item.title[0]}
            <br />
            {item.title[1]}
          </h3>
          <p className="text-gray-600 xl:text-lg">
            {item.description[0]} <br /> {item.description[1]}
          </p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="hero min-h-screen max-h-[1080px] relative">
        <div className="w-full h-full bg-gray-500 absolute">
          <img
            src="https://www.globalcoachcenter.com/wp-content/uploads/2024/05/Firefly-Business-workers-in-office-in-India-collaborating-in-conference-room-39423-scaled-e1726484919417.jpg"
            alt="Solar panels"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="w-full h-full absolute flex flex-col items-center justify-end text-white">
          <div className="max-w-[80%] h-full pt-44 md:h-[90%] mx-auto">
            <div className="text-center h-full flex flex-col justify-between mb-16">
              <h1 className="text-6xl font-bold mb-2 md:flex-row flex flex-col items-center justify-center">
                We Are{" "}
                <img
                  src={Logo}
                  alt="PAJVA logo"
                  className="xs:h-36 xs:w-96 w-[70vw] h-[20vw] mb-2 md:ml-5 pt-[5px] md:mt-4 object-cover"
                />
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                <div className="text-center flex flex-col items-center">
                  <svg
                    width="80"
                    height="74"
                    viewBox="0 0 80 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5037 43.9375H58.5037C59.2435 43.9375 59.9387 44.2915 60.3739 44.8899L78.8739 70.3274C79.9855 71.8559 78.8936 74 77.0037 74H3.00365C1.11368 74 0.021798 71.8559 1.13343 70.3274L19.6334 44.8899C20.0686 44.2915 20.7638 43.9375 21.5037 43.9375ZM29.1563 69.375H50.851L48.0129 58.9688H31.9944L29.1563 69.375ZM57.3261 48.5625H49.9688L51.5455 54.3438H61.5306L57.3261 48.5625ZM45.1749 48.5625H34.8324L33.2557 54.3438H46.7516L45.1749 48.5625ZM30.0385 48.5625H22.6812L18.4767 54.3438H28.4618L30.0385 48.5625ZM55.6449 69.375H72.4624L64.8942 58.9688H52.8069L55.6449 69.375ZM15.1131 58.9688L7.54489 69.375H24.3624L27.2004 58.9688H15.1131ZM60.8162 37C60.8162 38.2772 59.7808 39.3125 58.5037 39.3125C57.2265 39.3125 56.1912 38.2772 56.1912 37C56.1912 28.0599 48.9438 20.8125 40.0037 20.8125C31.0635 20.8125 23.8162 28.0599 23.8162 37C23.8162 38.2772 22.7808 39.3125 21.5037 39.3125C20.2265 39.3125 19.1912 38.2772 19.1912 37C19.1912 25.5056 28.5092 16.1875 40.0037 16.1875C51.4981 16.1875 60.8162 25.5056 60.8162 37ZM42.3162 9.25C42.3162 10.5272 41.2808 11.5625 40.0037 11.5625C38.7265 11.5625 37.6912 10.5272 37.6912 9.25V2.3125C37.6912 1.03534 38.7265 0 40.0037 0C41.2808 0 42.3162 1.03534 42.3162 2.3125V9.25ZM61.261 19.013C60.358 19.9161 58.8938 19.9161 57.9907 19.013C57.0876 18.1099 57.0876 16.6457 57.9907 15.7426L62.8963 10.8371C63.7993 9.93397 65.2635 9.93397 66.1666 10.8371C67.0697 11.7401 67.0697 13.2043 66.1666 14.1074L61.261 19.013ZM67.7537 39.3125C66.4765 39.3125 65.4412 38.2772 65.4412 37C65.4412 35.7228 66.4765 34.6875 67.7537 34.6875H74.6912C75.9683 34.6875 77.0037 35.7228 77.0037 37C77.0037 38.2772 75.9683 39.3125 74.6912 39.3125H67.7537ZM12.2537 34.6875C13.5308 34.6875 14.5662 35.7228 14.5662 37C14.5662 38.2772 13.5308 39.3125 12.2537 39.3125H5.31615C4.039 39.3125 3.00365 38.2772 3.00365 37C3.00365 35.7228 4.039 34.6875 5.31615 34.6875H12.2537ZM22.0166 15.7426C22.9197 16.6457 22.9197 18.1099 22.0166 19.013C21.1136 19.9161 19.6494 19.9161 18.7463 19.013L13.8407 14.1074C12.9376 13.2043 12.9376 11.7401 13.8407 10.8371C14.7438 9.93397 16.208 9.93397 17.111 10.8371L22.0166 15.7426Z"
                      fill="#0EC66E"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold my-2">
                    Leading the Energy Transition
                  </h3>
                  <p className="text-gray-300">
                    We provide sustainable and efficient power solutions for
                    individuals, businesses, and industries.
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <svg
                    width="85"
                    height="75"
                    viewBox="0 0 85 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2182 58.0919L51.7907 35.8777C52.9367 34.3791 51.8789 32.2635 49.9395 32.2635H41.7414L44.6504 17.9829C45.0912 15.6028 42.094 14.2805 40.5955 16.2199L24.1111 38.4341C22.9651 39.9327 24.023 42.0483 25.9623 42.0483H34.1604L31.2514 56.3289C30.7225 58.709 33.8078 60.0312 35.2182 58.0919Z"
                      fill="#0EC66E"
                    />
                    <path
                      d="M83.6135 34.8199C82.3794 33.5858 80.4401 33.5858 79.2059 34.8199L75.151 38.8749V37.2C75.151 16.6607 58.4903 0 37.951 0C17.4116 0 0.750977 16.6607 0.750977 37.2C0.750977 57.7393 17.4116 74.4 37.951 74.4C48.2647 74.4 58.1377 70.0806 65.1898 62.5877C66.3358 61.3536 66.3358 59.3261 65.0135 58.1801C63.7794 57.0341 61.7519 57.0341 60.6059 58.3564C54.7879 64.6152 46.5017 68.2294 37.951 68.2294C20.8496 68.1412 7.00974 54.2133 7.00974 37.2C7.00974 20.1867 20.8496 6.25877 37.951 6.25877C54.9642 6.25877 68.8922 20.1867 68.8922 37.2V38.8749L64.8372 34.8199C63.6031 33.5858 61.6638 33.5858 60.4296 34.8199C59.1955 36.054 59.1955 37.9934 60.4296 39.2275L69.7737 48.6597C70.3908 49.2768 71.1842 49.5412 71.9775 49.5412C72.7709 49.5412 73.5642 49.2768 74.1813 48.6597L83.5254 39.3156C84.7595 38.0815 84.7595 36.054 83.6135 34.8199Z"
                      fill="#0EC66E"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold my-2">Renewable IPP</h3>
                  <p className="text-gray-300">
                    As a Renewable Individual Power Producer (IPP), we deliver
                    comprehensive energy solutions.
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.2338 27.2419V37.9916C40.234 38.342 40.1541 38.6879 40.0004 39.0028C39.8466 39.3177 39.623 39.5933 39.3466 39.8087L33.7004 44.2282C33.4621 44.4191 33.1883 44.5609 32.8949 44.6453C32.6014 44.7297 32.2941 44.7551 31.9908 44.72C31.6875 44.6849 31.3941 44.59 31.1277 44.4408C30.8613 44.2916 30.6271 44.091 30.4387 43.8507C30.2503 43.6104 30.1114 43.3351 30.0301 43.0408C29.9488 42.7464 29.9266 42.4389 29.9649 42.1359C30.0032 41.833 30.1012 41.5407 30.2533 41.2758C30.4053 41.011 30.6083 40.779 30.8506 40.5931L35.6088 36.866V27.2419C35.603 26.9345 35.6585 26.6291 35.7721 26.3435C35.8858 26.0578 36.0552 25.7977 36.2705 25.5783C36.4858 25.3589 36.7427 25.1846 37.0261 25.0656C37.3096 24.9466 37.6139 24.8853 37.9213 24.8853C38.2287 24.8853 38.533 24.9466 38.8165 25.0656C39.0999 25.1846 39.3568 25.3589 39.5721 25.5783C39.7874 25.7977 39.9568 26.0578 40.0705 26.3435C40.1841 26.6291 40.2396 26.9345 40.2338 27.2419ZM37 50.9918C39.7673 50.9919 42.4726 50.1715 44.7736 48.6341C47.0747 47.0968 48.8682 44.9116 49.9273 42.355C50.9864 39.7983 51.2636 36.985 50.7238 34.2708C50.1841 31.5567 48.8515 29.0635 46.8948 27.1066C44.938 25.1498 42.4449 23.8171 39.7308 23.2772C37.0166 22.7372 34.2033 23.0142 31.6466 24.0732C29.0899 25.1322 26.9046 26.9256 25.3672 29.2265C23.8297 31.5275 23.0091 34.2327 23.0091 37C23.0119 40.7098 24.4868 44.2669 27.11 46.8902C29.7332 49.5136 33.2902 50.9887 37 50.9918ZM37 18.3824C33.3178 18.3824 29.7183 19.4743 26.6566 21.5201C23.595 23.5658 21.2087 26.4734 19.7996 29.8754C18.3905 33.2773 18.0218 37.0207 18.7402 40.6321C19.4585 44.2436 21.2317 47.5609 23.8354 50.1646C26.4391 52.7683 29.7564 54.5415 33.3679 55.2598C36.9794 55.9782 40.7227 55.6095 44.1246 54.2004C47.5266 52.7913 50.4342 50.405 52.48 47.3434C54.5257 44.2817 55.6176 40.6822 55.6176 37C55.6115 32.0642 53.648 27.3323 50.1579 23.8421C46.6677 20.352 41.9358 18.3885 37 18.3824ZM69.375 41.1407V32.87L62.3573 31.9022C61.9081 31.8409 61.4868 31.6485 61.1463 31.3492C60.8057 31.0499 60.5609 30.6568 60.4424 30.2191C59.9565 28.4496 59.2693 26.7417 58.3942 25.1288C58.1827 24.7379 58.0881 24.2944 58.1216 23.8512C58.1551 23.408 58.3154 22.9838 58.5833 22.6292L62.8178 17.043L56.9669 11.1822L51.4843 15.3336C51.124 15.6054 50.6921 15.7658 50.2418 15.795C49.7915 15.8243 49.3425 15.721 48.9502 15.4981C47.2986 14.5706 45.5459 13.8359 43.7266 13.3085C43.2966 13.1859 42.9116 12.9411 42.6182 12.6038C42.3247 12.2664 42.1357 11.8511 42.0739 11.4083L41.1374 4.62747H32.8642L31.9277 11.4116C31.8655 11.8544 31.6762 12.2696 31.3827 12.6068C31.0892 12.9441 30.7041 13.189 30.2742 13.3118C28.4548 13.8389 26.7021 14.5736 25.0506 15.5014C24.6585 15.7244 24.2096 15.8276 23.7594 15.7984C23.3092 15.7692 22.8774 15.6087 22.5174 15.3369L17.0332 11.1822L11.1822 17.0397L15.4183 22.6259C15.6859 22.9807 15.8459 23.4049 15.8795 23.848C15.913 24.2911 15.8186 24.7345 15.6074 25.1255C14.7318 26.7383 14.044 28.4463 13.5576 30.2158C13.4404 30.6542 13.1962 31.0481 12.8558 31.3482C12.5154 31.6482 12.0939 31.841 11.6443 31.9022L4.625 32.87V41.1407L11.84 42.1323C12.2766 42.1949 12.6863 42.3806 13.0212 42.6676C13.3561 42.9546 13.6024 43.3311 13.7311 43.7529C14.2397 45.43 14.929 47.0469 15.7867 48.5752C16.0076 48.9678 16.1091 49.4164 16.0785 49.8659C16.048 50.3154 15.8868 50.7461 15.6148 51.1052L11.1748 56.9701L17.0258 62.8252L23.0091 58.2956C23.3624 58.0281 23.7854 57.8683 24.2273 57.8353C24.6693 57.8024 25.1113 57.8977 25.5004 58.1097C26.9915 58.9113 28.5623 59.555 30.1871 60.0304C30.6148 60.1555 30.9975 60.4013 31.2891 60.7383C31.5808 61.0753 31.7691 61.4893 31.8315 61.9306L32.8609 69.375H41.1374L42.166 61.9306C42.2286 61.4894 42.417 61.0755 42.7086 60.7385C43.0003 60.4016 43.3828 60.1557 43.8105 60.0304C45.4372 59.5559 47.0096 58.9122 48.5021 58.1097C48.8922 57.8989 49.3349 57.8051 49.777 57.8399C50.2191 57.8746 50.6418 58.0362 50.9942 58.3054L56.9669 62.8276L62.8178 56.9701L58.3778 51.1052C58.106 50.746 57.9449 50.3153 57.9144 49.8659C57.8839 49.4165 57.9852 48.9679 58.2059 48.5752C59.0665 47.0474 59.7582 45.4304 60.2689 43.7529C60.3977 43.3311 60.6439 42.9546 60.9788 42.6676C61.3137 42.3806 61.7234 42.1949 62.16 42.1323L69.3725 41.1407H69.375ZM72.0061 28.5607L64.454 27.5206C64.0856 26.4105 63.649 25.3242 63.1467 24.2679L67.7232 18.227C68.0606 17.7811 68.2255 17.2283 68.1874 16.6704C68.1493 16.1126 67.9109 15.5873 67.516 15.1914L58.8136 6.48651C58.4177 6.09335 57.8933 5.85607 57.3367 5.81816C56.78 5.78026 56.2284 5.94427 55.7829 6.28013L49.8678 10.7612C48.7617 10.2118 47.622 9.73254 46.4556 9.32647L45.4442 1.99471C45.3666 1.44197 45.092 0.935839 44.671 0.569366C44.25 0.202893 43.7109 0.000713535 43.1527 0H30.8481C30.2904 0.000855249 29.7516 0.202892 29.3308 0.569014C28.91 0.935136 28.6354 1.44077 28.5574 1.99307L27.5444 9.32647C26.3778 9.73269 25.2379 10.2119 24.1314 10.7612L18.218 6.28013C17.7725 5.94427 17.2208 5.78026 16.6641 5.81816C16.1075 5.85607 15.5832 6.09335 15.1873 6.48651L6.48734 15.1914C6.09235 15.5871 5.85369 16.1123 5.81531 16.6702C5.77693 17.228 5.94143 17.7809 6.27849 18.227L10.8533 24.2679C10.3501 25.324 9.91298 26.4103 9.54436 27.5206L1.99636 28.564C1.44254 28.6398 0.935008 28.9139 0.567899 29.3355C0.20079 29.757 -0.000983012 30.2974 3.60113e-06 30.8564V43.1543C-0.000635401 43.7132 0.20126 44.2534 0.568305 44.6749C0.935351 45.0963 1.44268 45.3705 1.99636 45.4467L9.78445 46.5205C10.1496 47.5305 10.5724 48.5188 11.0507 49.4805L6.28178 55.7796C5.94488 56.2258 5.78049 56.7786 5.81887 57.3364C5.85724 57.8942 6.0958 58.4193 6.49063 58.8152L15.1881 67.5135C15.5827 67.909 16.1073 68.1479 16.6647 68.1859C17.2221 68.2238 17.7743 68.0582 18.2188 67.7199L24.6502 62.8564C25.5627 63.2886 26.4978 63.6712 27.4515 64.0026L28.5574 72.0053C28.6332 72.5587 28.9072 73.0658 29.3284 73.4326C29.7496 73.7994 30.2896 74.001 30.8481 74H43.1527C43.7111 74.0011 44.251 73.7997 44.6723 73.4333C45.0936 73.0668 45.3679 72.5601 45.4442 72.0069L46.5476 64.0042C47.5025 63.6739 48.4385 63.2912 49.3514 62.8581L55.7829 67.7215C56.2274 68.0599 56.7796 68.2254 57.337 68.1875C57.8943 68.1495 58.419 67.9106 58.8136 67.5151L67.5143 58.8185C67.9091 58.4225 68.1474 57.8972 68.1855 57.3394C68.2236 56.7816 68.0588 56.2288 67.7215 55.7828L62.9526 49.4838C63.4297 48.5218 63.8519 47.5335 64.2172 46.5238L72.0028 45.45C72.5574 45.3743 73.0655 45.0998 73.4329 44.6775C73.8002 44.2553 74.0018 43.714 74 43.1543V30.8564C74.0012 30.2974 73.7996 29.7571 73.4326 29.3355C73.0657 28.914 72.5582 28.6398 72.0045 28.564L72.0061 28.5607Z"
                      fill="#0EC66E"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold my-2">
                    End-to-End Efficiency
                  </h3>
                  <p className="text-gray-300">
                    We help clients generate, store, and manage clean energy
                    with maximum efficiency and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-14 flex flex-col items-center">
        <h2 className="text-4xl text-center mb-14 mx-6 bg-green-200 py-4 w-[75%] lg:w-[70%] xl:w-[62%]">
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <div className="text-center max-w-6xl mx-auto mb-5 px-10 xl:p-0 sm:px-16 text-xl sm:text-2xl xl:text-3xl">
            <p className="text-gray-600 mb-6">
              Empowering a Sustainable Future Through Renewable Energy
              Innovation
            </p>
            <p className="text-gray-600 mb-6">
              At <span className="text-green-500 font-semibold">PAJVA</span>, we
              are at the forefront of the energy transition, pioneering
              sustainable and efficient power solutions tailored to meet the
              growing demands of individuals, businesses, and industries.
            </p>
            <p className="text-gray-600">
              As a Renewable Individual Power Producer (IPP), we provide
              end-to-end energy solutions that enable our clients to generate,
              store, and manage clean energy with maximum efficiency and
              reliability.
            </p>
          </div>
          <RenewableEnergyGrid />
          <p className="text-center text-gray-600 max-w-6xl mx-auto mb-14 px-10 xl:p-0 sm:px-16 text-xl sm:text-2xl xl:text-3xl">
            With a strong commitment to sustainability and technological
            excellence, we specialize in Engineering, Procurement & Construction
            (EPC) services, Battery Energy Storage Solutions (BESS), and
            On-Site and Off-Site Renewable Energy Solutions, helping
            businesses and individuals achieve energy independence while
            reducing their carbon footprint.
          </p>
          <h2 className="mb-4 sm:my-8 text-xl sm:text-2xl lg:text-4xl font-medium">
            Our <span className="text-green-400">Values</span>
          </h2>
          <img
            src={img}
            alt="Solar panels"
            className="w-full object-cover lg:px-24 mb-10"
          />
        </div>
      </div>
    </>
  );
};

export default About;
