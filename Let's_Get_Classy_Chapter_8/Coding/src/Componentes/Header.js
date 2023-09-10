import { LOGO_URL } from "../Utils/constant";
import {Link} from "react-router-dom";
export const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About Us</li></Link>
                        <Link to="/contact"><li>Contact us</li></Link>
                        <li>Cart</li>
                    </ul>
            </div>
        </div>
    )
}
export default Header; 