import { IoImage } from "react-icons/io5";

const HomePageShimmer = () => {
  return (
    <div className="animate-pulse my-28   b-gray-100">
      <h1 className="h-8 max-w-[550px] rounded bg-gray-300 mb-8 ml-14 "></h1>
      <div className="flex lg:justify-start justify-center flex-wrap md:flex-wrap gap-4 lg:ml-14 ">
        {Array(6)
          .fill(" ")
          .map((item, index) => (
            <div
              key={index}
              className="h-8 w-24 rounded-full  bg-gray-300"
            ></div>
          ))}
      </div>
      <div className="flex flex-wrap justify-evenly">
        {Array(10)
          .fill(" ")
          .map((item, index) => (
            <div className="w-[240px] m-4 p-2 bg-gray-100" key={index}>
              <div className="bg-gray-300 h-[142px] w-full rounded-lg flex justify-center items-center">
                <IoImage />
              </div>
              <div className="h-4 w-24 rounded bg-gray-300 my-2"></div>
              <div className="h-4 w-32 rounded bg-gray-300 my-2"></div>
              <div className="h-4 w-full rounded bg-gray-300 mt-4"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePageShimmer;
