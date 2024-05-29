import { useRouteError } from "react-router-dom";

const Error = () => {
    const error=useRouteError()
    console.error(error)
  return(
    <div>
        <h1>Oop!Something went wrong,see console in devtool</h1>
        
    </div>
  )
};

export default Error;
