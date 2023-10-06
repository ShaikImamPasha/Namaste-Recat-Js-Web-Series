import { useSelector } from "react-redux";
import MenuItemes from "./MenuItemes";
const FavourateCard=()=>{
  const FavourateItemesCard=useSelector((states)=>states.cart.itemes);
 // console.log(FavourateItemesCard);
    return(
        <>
        {
          FavourateItemesCard.map((data)=>{
              return <div>
              <MenuItemes data={data}/>
             </div>
          })
        }
        </>
    )
}
export default FavourateCard;