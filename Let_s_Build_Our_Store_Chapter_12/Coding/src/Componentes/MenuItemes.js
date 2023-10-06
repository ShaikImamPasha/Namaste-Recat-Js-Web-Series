import { CDN_IMAGE_URL } from "../Utils/constant.js";
import {CardState} from "../Utils/CardState.js";
import { useContext} from "react";
import CardState from "../Utils/CardState.js";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/Redux/cardSlice.js";
const MenuItemes=({data})=>{
  const dispatch=useDispatch();
  const handileOnClick=(data)=>{
   dispatch(addItem(data));
  }
    return(
        <>
        <div onClick={()=>handileOnClick(data)}>
             <div>
               <h4>{data.card.info.name}</h4>
               <p>₹{data.card.info.price}</p>
            </div>
          <div>   
                <img  loading="lazy" alt={"loading"}className="w-40 h-28 rounded-3xl " src={CDN_IMAGE_URL+data.card.info.imageId}></img>
          </div>
       </div>
            <hr style={{width: "600px",borderBottom: "1px dashed #d3d3d3"}}/> 
      </>
    )
}
export default MenuItemes;