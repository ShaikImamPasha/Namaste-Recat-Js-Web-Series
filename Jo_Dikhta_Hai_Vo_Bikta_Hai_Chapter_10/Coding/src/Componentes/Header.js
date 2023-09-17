import { LOGO_URL } from "../Utils/constant";
import {Link} from "react-router-dom";
import useOnlineStates from "../Utils/useOnlineStates";
import MoonLoader   from "react-spinners/MoonLoader";
import { useState, CSSProperties } from "react";
export const Header=()=>{
    const states=useOnlineStates(); 
    return(
        <div className="flex  h-24 justify-around shadow-lg items-center flex-wrap sticky top-0 bg-white">
            <div className="">

           <div>
           <MoonLoader
  color="#060000"
  loading
  size={70}
  speedMultiplier={0.6}
/>
  <div className="absolute top-10 left-60">
    hii
  </div>
            </div>        

                <img className=" h-[96px]" src={LOGO_URL}/> 
            </div>
            <div>
                    <ul className="flex flex-wrap justify-evenly">
                        <li className="px-2 h-auto">Online Statues:{states?"🟢":"🛑"}</li>
                        <li  className="px-2 h-auto"><Link to="/">Home</Link></li>
                        <li  className="px-2 h-auto"><Link to="/about">About Us</Link></li>
                        <li  className="px-2 h-auto"><Link to="/contact">Contact us</Link></li>
                        <li  className="px-2 h-auto">Cart</li>
                        <li  className="px-2 h-auto">Login</li>
                    </ul>
            </div>
        </div>
    )
}
export default Header; 