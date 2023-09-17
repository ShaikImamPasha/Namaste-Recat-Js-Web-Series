import { useEffect, useState } from "react"

const useOnlineStates=()=>{
    const [state,setState]=useState(true);
    useEffect(()=>{
     window.addEventListener("online",()=>{
        setState(true);
     })
     window.addEventListener("offline",()=>{
        setState(false);
     })
    },[])
    return state;
}
export default useOnlineStates;