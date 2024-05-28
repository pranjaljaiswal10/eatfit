import { IoImage } from "react-icons/io5";


const HomePageShimmer = () => {
  return (
  <div className="animation pulse flex flex-wrap">
  {
    Array(10).fill(" ").map((item,index)=>(
      <div className="w-[240px] m-4 p-2 bg-gray-100" key={index}>
      <div className="bg-gray-400 w-full rounded-lg flex justify-center items-center">
     <IoImage/>
      </div>
      </div>
    ))
  }
  </div>);
};

export default HomePageShimmer;
