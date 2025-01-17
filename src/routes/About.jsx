import ShowcaseScroll from "../components/ShowcaseScroll"

const About = () => {
  return (
    <div className="">
      <div className="flex justify-between px-7 pt-28 py-9 pb-16">
        <div className="w-1/3 h-12 text-6xl">Lorem ipsum <br /> dolor sit amet</div>
        <div className="w-2/3 h-12 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti reiciendis accusantium blanditiis a saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, adipisci aspernatur reiciendis fuga impedit nobis vero.</div>
      </div>
      <div className="h-[900px] mx-7 flex justify-between">
        <div className="w-[68.5%] h-full flex flex-col justify-between">
          <div className="h-[46%] w-full flex">
            <div className="w-2/3 h-full px-7 flex flex-col justify-between">
              <div className="pt-20 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum facilis inventore. Ratione quam, ipsam vero beatae sed vel. Eveniet qui quidem minus architecto, culpa neque delectus debitis quaerat aliquid in dolor consectetur consequatur aut deserunt.
              </div>
              <div className="bg-green-400 w-2/5 h-16 rounded-full mb-14">

              </div>
            </div>
            <div className="w-1/3 h-full bg-green-500 rounded-[35px]">

            </div>
          </div>
          <div className="h-1/2 w-full bg-red-50 rounded-[50px]">

          </div>
        </div>
        <div className="w-[30.5%] h-full bg-black rounded-[35px]">

        </div>
      </div>
      <h2 className="text-center pt-14 text-3xl">
        Brands we are working with
      </h2>
      <ShowcaseScroll />
      <div className="h-96 mx-7 my-14 justify-evenly flex">
        <div className="h-full w-[23.5%] bg-slate-400">

        </div>
        <div className="h-full w-[23.5%] bg-slate-400">

        </div>
        <div className="h-full w-[23.5%] bg-slate-400">

        </div>
        <div className="h-full w-[23.5%] bg-slate-400">

        </div>
        
      </div>

    </div>
  )
}

export default About