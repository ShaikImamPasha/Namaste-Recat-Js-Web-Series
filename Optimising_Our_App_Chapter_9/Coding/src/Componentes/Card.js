import { Link } from "react-router-dom";
import { CDN_IMAGE_URL } from "../Utils/constant";
const Card=(props)=>{     //props is js object
    var {name,locality,areaName,costForTwo,cloudinaryImageId, cuisines,avgRating,id}=props?.data.info;
   
     return(
        <Link to={"/restaurent/"+id}>
        <div className="card">
             <img className="card-image" alt="loading" src={CDN_IMAGE_URL+cloudinaryImageId}/>
             <h3>{name}</h3>
             <p>{cuisines.join(", ")}</p>
             <span>{costForTwo}{avgRating} Rating</span>
             <p>{areaName},{locality}</p>
         </div>
        </Link>
     )
 }
 export default Card;