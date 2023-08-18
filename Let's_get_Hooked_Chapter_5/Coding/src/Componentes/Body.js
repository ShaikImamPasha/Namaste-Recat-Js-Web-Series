import data from "../Utils/mockData.js";
import Card from "./Card.js";
import { useState } from "react";
const Body=()=>{
     //state vairable  -super powerful vairable
     const resdata=useState(data);
     const [tempdata,setTemdata]=resdata;

  //  var restarandata=[];    //normal js varable
    return(
        <div className="body">
            <div className="search-bar card-container">
                <input type="text" onChange={(e)=>{
                var filterdata=data.filter((val)=>val.info.name.toLowerCase().startsWith(e.target.value.toLowerCase()));
                  setTemdata(filterdata);}
                  }></input>
              <button onClick={()=>{
                  var filterdata=data.filter((e)=>e.info.avgRating>3.7);
                  setTemdata(filterdata);
              }}>Top Rated Restaurantes</button>
            </div>
            <div className="card-container">
                {tempdata.map((information)=>{return <Card key={information.info.id} data={information}/>})}
            </div>
        </div>
    )
}
export default Body;