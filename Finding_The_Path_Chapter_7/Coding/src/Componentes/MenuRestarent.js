import { CDN_IMAGE_URL } from "../Utils/constant.js";
import { useState } from "react";
const MenuRestarent=(props)=>{
    const {title}=props;
    const [arrow,setArrow]=useState(false);
    const {itemCards}=props?.data?.card?.card;
    return(
        <>
        {    
           
         itemCards && <div onClick={()=> setArrow(!arrow)}>
                  <h3>{title}</h3>
                             {arrow && <span  className="material-symbols-outlined arrow">
                                arrow_circle_up
                              </span>
                                } {
                                    !arrow && <span className="material-symbols-outlined arrow">
                                    arrow_circle_down
                                   </span>
                                } 
                             </div>
                }
        {!arrow && itemCards && itemCards.map((data)=>{
            return(
                <>
        <div className="retarentName INNERMENU">
              <div>
               <h4>{data.card.info.name}</h4>
               <p>₹{data.card.info.price}</p>
          </div>
       <div>
        <img alt={"loading"}style={{width: "115px",height:"96px",borderRadius: "4PX"}} src={CDN_IMAGE_URL+data.card.info.imageId}></img>
      </div>
     </div>
    <hr style={{width: "600px",borderBottom: "1px dashed #d3d3d3"}}/> 
                </>
            )
        }
    )}
        </>
     )
}
export default MenuRestarent;