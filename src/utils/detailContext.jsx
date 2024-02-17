import { createContext,useState} from "react";

const DetailContext=createContext()


const DetailProvider = ({children})=>{
    const [detail,setDetail]=useState({})
    return(
     <DetailContext.Provider value={[detail,setDetail]}>
        {children}
     </DetailContext.Provider>
    )
}

export { DetailProvider,DetailContext}