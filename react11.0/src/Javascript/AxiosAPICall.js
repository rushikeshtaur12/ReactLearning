import axios from "axios"
import { useEffect } from "react";
const AxiosAPICall=()=>{

    const ApiCall=async()=>{
        const response=await axios('https://api.escuelajs.co/api/v1/products')
        console.log("response---->",response);
    }

    

    return(
        <div></div>
    )
}
export default AxiosAPICall;
