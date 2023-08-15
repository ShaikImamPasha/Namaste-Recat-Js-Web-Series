import React from "react";
import  ReactDOM  from "react-dom/client";
/**
 * Low level planing
 * NavBar
 *  -Logo 
 *  -navitemes
 * Body 
 *   -search bar 
 *   -cardcontainer 
 *      -card
 *        -image 
 *        -name of res,star-rating,cuisine,delivary time
 * Footer 
 *   -copyright
 *   -links 
 *   -addresses 
 *   -contact
 */ 
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"/>
            </div>
            <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
            </div>
        </div>
    )
}
const Card=(props)=>{     //props is js object
   var {name,locality,areaName,costForTwo,cloudinaryImageId, cuisines,avgRating}=props?.data.info;
    return(
        <div className="card">
            <img className="card-image" alt="loading" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span>{costForTwo}{avgRating} Rating</span>
            <h4>{areaName},{locality}</h4>
        </div>
    )
}
const data=[
    {
        info :{
            id: "499197",
            name: "Cupcake Bliss Cake & Desserts",
            cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
            locality: "Papaiah Street",
            areaName: "Gandhi Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            avgRating : 3.7
        } 
    },
    {  
        info : {
            id: "499178",
            name: "WarmOven Cake & Desserts",
            cloudinaryImageId: "e938fb5f416cc2c28b4b519cf27b04cc",
            locality: "Papaiah Street",
            areaName: "Gandhi Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            avgRating: 3.8
    }},
    {
        info: {
            id: "499197",
            name: "Cupcake Bliss Cake & Desserts",
            cloudinaryImageId: "40f193d8b23afb2988489dac1258962f",
            locality: "Papaiah Street",
            areaName: "Gandhi Nagar",
            costForTwo: "₹200 for two",
            cuisines: [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
            ],
            avgRating: 3.7
    }
},
{
    info: {
        id: "499228",
        name: "Indiana Burgers",
        cloudinaryImageId: "x5oty2were1z7k79ifez",
        locality: "Papaiah Street",
        areaName: "Gandhi Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Burgers",
          "American",
          "Fast Food",
          "Beverages",
          "Desserts"
        ],
        avgRating: 3.6
}
}
]
const Body=()=>{
    return(
        <div className="body">
            <div className="search-bar">
               <input type="text"></input>
            </div>
            <div className="card-container">
                <Card data={data[0]}/>
                <Card data={data[1]}/>
                <Card data={data[2]}/>
                {data.map((information)=>{return <Card data={information}/>})}
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return(
        /** */
        <div className="app">
          <Header/>
          <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)