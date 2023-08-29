import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_IMAGE_URL } from "../Utils/constant";
import MenuRestarent from "./MenuRestarent";
import { useParams } from "react-router-dom";
const Restaurent=()=>{
    const {resid}=useParams();
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId="+resid);
             var json_data=await data.json();
        setResInfo(json_data); 
      //  console.log(json_data);
        
    }
    if(resInfo!==null){
        var {name,avgRating,areaName,locality}=resInfo?.data?.cards[0]?.card?.card?.info;
        var menuitemes=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
        //console.log(menuitemes);
    }

    return(
        resInfo===null?<Shimmer />:<>
        <div className="menuitemes"> 
            <div className="retarentName">
              <div>
                <h4>{name}</h4> 
                   {areaName},{locality}
               </div>  
               <p>&#9733;{avgRating}</p>
            </div>
          <hr style={{width: "600px",borderBottom: "1px dashed #d3d3d3"}}/> 
            {menuitemes.map((data,index)=>{
                return (
                <>
         <div>
         {<MenuRestarent key={index}  title={data.card.card.title} data={data}/>}
         </div>
                 
                </>
                )
            })}
          </div>
        </>
    )
}
export default Restaurent;