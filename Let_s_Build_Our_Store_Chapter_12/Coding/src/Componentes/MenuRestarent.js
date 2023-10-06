import { useState,useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Shimmer from "./Shimmer.js";
import MenuItemes from "./MenuItemes.js";
import CardState from "../Utils/CardState.js";
const MenuRestarent=(props)=>{
    const {title,arrow,setArryFunctions}=props;
    const {itemCards}=props?.data?.card?.card;
    const [presntData,setPresntData]=useState(itemCards?.slice(0,5));
    const [currentIndex,setCurrentIndex]=useState(5);
    const [hasmore,setHasMore]=useState(true);
  const fetchdata=()=>{
    if(presntData.length>=itemCards.length){
        setHasMore(false);
        return
    }
    setTimeout(()=>{
           if(presntData.length>0){
              setPresntData(presntData.concat(itemCards.slice(currentIndex,currentIndex+4)));
              setCurrentIndex(currentIndex+4);
           }
           else{
            setPresntData([]);
           }
    },1500)
  }
    return(
        <>
           { itemCards && 
           <div className="" >
                  <h3 className="font-bold">{title}({props?.data?.card?.card?.itemCards?.length})</h3>
                    {
                      <span onClick={setArryFunctions} className="material-symbols-outlined arrow">
                                    arrow_circle_down
                                   </span>
                      }
           </div>
           }         
           {arrow && 
           <InfiniteScroll hasMore={hasmore}dataLength={presntData.length} next={fetchdata}
           loader={<p>plesse wiat load tha food</p>}
           endMessage={<p>end of data</p>}
           >
              {itemCards && presntData.map((data,index)=>{
               return <MenuItemes data={data} key={index}></MenuItemes>
        }
    )
}

           </InfiniteScroll>
           
           }
           
        </>
     )
}
export default MenuRestarent;