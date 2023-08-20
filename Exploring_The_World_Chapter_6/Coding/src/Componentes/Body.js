import data from "../Utils/mockData.js";
import Card from "./Card.js";
import Shimmer from "./Shimmer.js";
import { useState,useEffect } from "react";
const Body=()=>{
     //state vairable  -super powerful vairable
     const resdata=useState([]);
     const [tempdata,setTemdata]=resdata; 
     const [searchtest,setSearchtest]=useState("");
      const  [orgenaldata,setOrgenaldata]=useState([]);
    
  //  var restarandata=[];    //normal js varable
  useEffect(()=>{fetchdata()},[]); //it's worked after all componentes are renderd.

   const fetchdata=async ()=>{
         const data1=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.572588&lng=77.273265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         let json_data=await data1.json();
         //OPIONAL Chaing
         json_data=json_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
         setTemdata(json_data);
         setOrgenaldata(json_data);
        }
        //console.log("body rendering");
        function searchdata(){
            var filterdata=orgenaldata.filter((e)=> e.info.name.toLowerCase().includes(searchtest.toLowerCase()));
            setTemdata(filterdata);
        }
    return(
        //CONDITIONAL RANDARING
       tempdata.length===0?<Shimmer/>: <div className="body">
            <div className="search-bar card-container">
                <input type="text" value={searchtest} onChange={(e)=>setSearchtest(e.target.value)}></input>
                  <button onClick={()=>searchdata()}>SEARCH</button>

            </div>
            <div className="card-container">
                {tempdata.map((information)=>{return <Card key={information.info.id} data={information}/>})}
            </div>
        </div>
    )
}
export default Body;