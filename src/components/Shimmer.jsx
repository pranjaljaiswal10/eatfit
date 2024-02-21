

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
        {
            Array(10).fill(" ").map((item,index)=>(
                <div className="shimmer-card" key={index}>
                </div>
            ))
        }
    </div>
  )
};

export default Shimmer;
