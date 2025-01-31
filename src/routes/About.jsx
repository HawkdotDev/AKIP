// import ShowcaseScroll from "../components/ShowcaseScroll";

const About = () => {
  return (
    // <div className="">
    //   <div className="flex justify-between px-7 pt-28 py-9 pb-16 mb-8">
    //     <div className="w-1/3 h-12 text-6xl">
    //       Lorem ipsum <br /> dolor sit amet
    //     </div>
    //     <div className="w-2/3 h-12 text-[19px]">
    //       AK Infra & IT Projects is a dynamic renewable energy company committed
    //       to driving sustainable solutions across India. Since our establishment
    //       in 2019, we have rapidly grown into a trusted name in the renewable
    //       energy sector, delivering innovative EPC, IoT, and BESS (Battery
    //       energy storage system) solutions to meet diverse energy needs.
    //     </div>
    //   </div>
    //   <div className="h-[900px] mx-7 xl:flex xl:mt-2 mt-8 justify-between">
    //     <div className="xl:w-[68.5%] w-full h-full flex flex-col justify-between">
    //       <div className="h-[46%] w-full flex">
    //         <div className="w-2/3 h-full px-7 flex flex-col justify-between">
    //           <div className="pt-20 text-xl">
    //             Our expertise spans various services, including Open Access,
    //             Onsite and Offsite solar installations, and OPEX solutions. With
    //             a customer-centric approach, we provide tailored energy
    //             solutions that ensure efficiency, cost savings, and
    //             environmental sustainability.
    //           </div>
    //           <div className="bg-green-400 w-2/5 h-16 rounded-full mb-14"></div>
    //         </div>
    //         <div className="w-1/3 h-full bg-green-500 rounded-[35px]"></div>
    //       </div>
    //       <div className="h-1/2 w-full bg-red-50 rounded-[50px]"></div>
    //     </div>
    //     <div className="xl:w-[30.5%] w-full h-full bg-black rounded-[35px]"></div>
    //   </div>
    //   <h2 className="text-center pt-14 text-3xl">Brands we are working with</h2>
    //   <ShowcaseScroll />
    //   <div className="h-96 mx-7 my-14 justify-evenly flex">
    //     <div className="h-full w-[23.5%] bg-slate-400"></div>
    //     <div className="h-full w-[23.5%] bg-slate-400"></div>
    //     <div className="h-full w-[23.5%] bg-slate-400"></div>
    //     <div className="h-full w-[23.5%] bg-slate-400"></div>
    //   </div>
    // </div>

    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white bg-opacity-85 mt-12 md:py-24 md:px-16 px-14 py-16 rounded-[35px] shadow-lg max-w-4xl text-center">
        <p className="text-xl md:text-3xl mb-6">
          AK Infra & IT Projects is a dynamic renewable energy company committed
          to driving sustainable solutions across India. Since our establishment
          in 2019, we have rapidly grown into a trusted name in the renewable
          energy sector, delivering innovative EPC, IoT, and BESS (Battery
          energy storage system) solutions to meet diverse energy needs.
        </p>
      </div>

      <div className="bg-white bg-opacity-85 my-14 md:py-24 px-14 py-16 md:px-16 rounded-[35px] shadow-lg max-w-4xl text-center">
        <p className="text-xl md:text-3xl">
          Our expertise spans various services, including Open Access, Onsite
          and Offsite solar installations, and OPEX solutions. With a
          customer-centric approach, we provide tailored energy solutions that
          ensure efficiency, cost savings, and environmental sustainability.
        </p>
      </div>

      <div className="bg-white bg-opacity-85 md:py-24 px-14 py-16 md:px-16 rounded-[35px] shadow-lg max-w-4xl text-center">
        <p className="text-xl md:text-3xl">
          We have successfully implemented over 60 MW of solar projects
          nationwide, empowering businesses and communities with clean and
          reliable energy. At AK Infra & IT Projects, we are dedicated to
          transforming energy landscapes and creating a greener future for
          generations to come.
        </p>
      </div>
    </div>
  );
};

export default About;
