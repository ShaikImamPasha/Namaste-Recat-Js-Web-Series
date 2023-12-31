import { CDN_IMAGE_URL } from "../Utils/constant.js";
import {CardState} from "../Utils/CardState.js";
import { useContext} from "react";
import CardState from "../Utils/CardState.js";
const MenuItemes=({data})=>{
    const {no,setCardNumber}=useContext(CardState);
    console.log(no);
  function increament(){
    setCardNumber(no+1);
  }
    return(
        <>
        <div className="retarentName INNERMENU">
             <div>
               <h4>{data.card.info.name}</h4>
               <p>₹{data.card.info.price}</p>
            </div>
          <div>   
                <img onClick={()=>increament()} loading="lazy" alt={"loading"}className="w-40 h-28 rounded-3xl " src={CDN_IMAGE_URL+data.card.info.imageId}></img>
          </div>
       </div>
            <hr style={{width: "600px",borderBottom: "1px dashed #d3d3d3"}}/> 
      </>
    )
}
export default MenuItemes;