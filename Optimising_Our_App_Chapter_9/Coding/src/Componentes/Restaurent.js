import Shimmer from "./Shimmer";
import MenuRestarent from "./MenuRestarent";
import { useParams } from "react-router-dom";
import useResturent from "../Utils/useResturent";
const Restaurent=()=>{
    const {resid}=useParams();
    const resInfo=useResturent(resid);
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