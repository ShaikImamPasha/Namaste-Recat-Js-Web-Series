import { useState,useEffect } from "react";
import { apiMenuItemes } from "./constant";
const useResturent=(resid)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async()=>{
        const data=await fetch(apiMenuItemes+resid);
             var json_data=await data.json();
        setResInfo(json_data); 
      //  console.log(json_data);
        
    }
return resInfo;
}
export default useResturent;