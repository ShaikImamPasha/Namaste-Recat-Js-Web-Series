import React from "react";
import  ReactDOM from "react-dom/client";
//React Element is a object => when render on dom then it become html element 
//core of reactjs

//const heading=React.createElement("h1",{id:"heading"},"react js"); //this is react element
//const root=ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading);

//JSX is not HTML in js.
//it is like HTML syntax or XML like syntax.
//before reaching tha <h1 className="heading">This is heading</h1> thsis code to js enigne tha Bebel library
//will transplit into react element Babel library also installed by parcel.
//JSX => React.creatElement is an object => HTML element

const jsxHeading=(
<h1 className="heading">This is heading</h1> 
);
const Title=()=>{
    return(
        <div>
            title
        </div>
    )
}
//console.log(jsxHeading);
//React Functional componente
//Component componition
const title1=(<div>title2</div>)
const HeadingComponent =()=>{
    return(
        <>
        <h1>{title1 }</h1>  
        <Title/>
        {Title()}
        <h1>Namaset React component</h1>
        </>
        )

}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


