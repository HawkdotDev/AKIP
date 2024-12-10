import BlogSection from "../components/BlogSection";

const Blogs = () => {
  return (
    <>
      <div className="bg-white px-7 py-20">
        <BlogSection />
        <div className="w-full h-48 bg-black"></div>
        <div className="w-full h-[600px] bg-slate-600"></div>
      </div>
      <div className="px-7 py-20 items-center">
        <div className="w-full h-40 flex justify-between items-center">
          <h1>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="">
            <a href="" className="rounded-full p-2 border border-black">Highlights</a>
            <a href="" className="rounded-full p-2 border border-black ml-4">Year Book</a>
          </div>
        </div>
        <div className="w-full h-[550px] bg-slate-600"></div>
      </div>
    </>
  );
};

export default Blogs;
