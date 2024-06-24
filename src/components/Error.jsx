import { useRouteError } from "react-router-dom";

const Error = () => {
    const error=useRouteError()
    console.error(error)
  return(
    <div>
        <p>{"There's nothing here: 404!"}</p>   
    </div>
  )
};

export default Error;
