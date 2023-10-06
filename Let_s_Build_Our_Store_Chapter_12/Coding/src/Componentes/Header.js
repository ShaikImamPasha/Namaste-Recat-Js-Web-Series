import { LOGO_URL } from "../Utils/constant";
import {Link} from "react-router-dom";
import useOnlineStates from "../Utils/useOnlineStates";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import CardState from "../Utils/CardState";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
export const Header=()=>{
    const states=useOnlineStates(); 
    const itemCards=useSelector((state)=>state.cart.itemes);
    return(
        <div className="flex  h-24 justify-around shadow-lg items-center flex-wrap sticky top-0 bg-white z-40">
            <div className="">

           <div>

            </div>        

                <img className=" h-[96px]" src={LOGO_URL}/> 
            </div>
            <div>
                    <ul className="flex flex-wrap justify-evenly">
                        <li className="px-2 h-auto">Online Statues:{states?"🟢":"🛑"}</li>
                        <li  className="px-2 h-auto"><Link to="/">Home</Link></li>
                        <li  className="px-2 h-auto"><Link to="/about">About Us</Link></li>
                        <li  className="px-2 h-auto"><Link to="/contact">Contact us</Link></li>
                        <li  className="px-2 h-auto"><Link to="/FavourateCard">Cart{itemCards.length}</Link></li>
                        <li  className="px-2 h-auto">Login</li>
                    </ul>
            </div>
        </div>
    )
}
export default Header; 