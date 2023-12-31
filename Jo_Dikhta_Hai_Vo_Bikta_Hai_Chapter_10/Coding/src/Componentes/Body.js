import data from "../Utils/mockData.js";
import Card from "./Card.js";
import Shimmer from "./Shimmer.js";
import { useState,useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ClipLoader   from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";
const Body=()=>{
     //state vairable  -super powerful vairable
     const resdata=useState([]);
     const [tempdata,setTemdata]=resdata; 
     const [searchtest,setSearchtest]=useState("");
      const  [orgenaldata,setOrgenaldata]=useState([]);
    const [hasmore,setHashMore]=useState(true);
    const [curentIndex,setCurentIndex]=useState(4);
  //  var restarandata=[];    //normal js varable
  useEffect(()=>{
    fetchdata()
 //const timer=setInterval(()=>{console.log("useEffect")},1000);
  return()=>{
  //  clearInterval(timer);
  //  console.log("useEffect Return")
  }
},[]); //it's worked after all componentes are renderd.
//console.log("rnder");
  const fetchdata=async ()=>{
         const data1=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572588&lng=77.273265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         let json_data=await data1.json();
         //OPIONAL Chaing
         json_data=json_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
         setTemdata(json_data.slice(0,7));
         setOrgenaldata(json_data);
         //console.log(json_data);
        }
        //console.log("body rendering");
        function searchdata(){
            var filterdata=orgenaldata.filter((e)=> e.info.name.toLowerCase().includes(searchtest.toLowerCase()));
            setTemdata(filterdata);
        }
        const loadNextData=()=>{
            if(orgenaldata.length<=tempdata.length){
                   setHashMore(false);
                   console.log("cksdfc");
                   return
            }
            setTimeout(()=>{
                if(tempdata.length>0){
                         setTemdata(tempdata.concat(orgenaldata.slice(curentIndex,curentIndex+4)));
                         setCurentIndex(curentIndex+4);
                    //     console.log("ckc");
                }
            },1000)
    

        }
    return(
        //CONDITIONAL RANDARING
       tempdata.length===0?<div><div className="bg-black h-56 flex items-center justify-center">
                        <ClipLoader
  color="white"
  size={90}
  speedMultiplier={0.7}
/><img className="w-15 h-14" src="https://www.shutterstock.com/shutterstock/photos/280146098/display_1500/stock-vector--hamburger-icon-280146098.jpg"></img></div>
                         <Shimmer/>     
       </div>
       : 
       <div className="body">
        <InfiniteScroll dataLength={tempdata.length} next={loadNextData} hasMore={hasmore} loader={<Shimmer/>}
       endMessage={ <p style={{ textAlign: 'center' }}><b>Yay! You have seen it all</b></p>}>
        <div>
        <div className="p-5 flex justify-center flex-wrap">
              <input className="border-r-0 w-[280px] border border-solid border-black" type="text" value={searchtest} onChange={(e)=>setSearchtest(e.target.value)}></input>
              <span class="material-symbols-outlined w-7 bg-orange-400" onClick={searchdata}>search</span>
        </div>
       <div className="flex flex-wrap items-center justify-center">
                {tempdata.map((information)=>{return <Card key={information.info.id} data={information}/>})}
       </div>
        </div>


</InfiniteScroll>
          
        </div>
    )
}
export default Body; 