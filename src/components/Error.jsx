import { useRouteError } from "react-router-dom";

const Error = () => {
    const {status,statusText}=useRouteError()
  return(
    <div>
        <h1>Oop!Something went wrong,see console in devtool</h1>
        <h2>{`${status}:${statusText}`}</h2>
    </div>
  )
};

export default Error;
