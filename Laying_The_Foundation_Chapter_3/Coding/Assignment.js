import react from "react";
import reactdom from "react-dom/client";
//1.create a nested header eleemnt using react.ctreateelement(h1.h2.h3 inside a div with class "title") 
//const heading=react.createElement("div",{class:"title"},[
//    react.createElement("h1",{},"this is h1 heading"),
//    react.createElement("h2",{},"this is h2 tag"),
//    react.createElement("h3",{},"this is h3 tag")
//])

//2.create tha same above code using jsx 
//const heading_using_jsx=(
//    <>
//    <h1>heading 1</h1>
//    <h2>heading 2</h2>
//    <h3>heading 3</h3>
//   </>
//) 

//3.pass attributes into the tag in jsx 
//const pass_atrributes_jsx=(
//    <>
//    <div className="class" id="id">
//       <input type="button"></input>
//    </div>
//    </>
//)

//4.Compostion of component (add component in another) 
//const Component1=()=>{
//    return <>
//     <p>This is component1</p>
//     </>
//}
//const Component2=()=>{
//    return <>
//    {Component1()}
//    <p>This is component2</p>
//    </>
//}

//5.com1 vs com1() vs <com1/> vs <com1></com1>
//const Sample_componet=()=>{
//   return <>
//    <div>
//        this is sample component
//    </div>
//    </>
//}
//const Render=()=>{
//    return<>
//       {Sample_componet()}
//       {<Sample_componet/>}
//       {<Sample_componet></Sample_componet>}
//    </>
//}

//6.create a header component from scrach using functional component with jsx =>add a logo on left,add a scrach 
//bar in middle,add user icon on right ,add css to makr it look nice 
const Navbar_componet=()=>{
    return(
        <>
        <div className="main_container">
            <div>
                 <img className="img" alt="loading_faild" src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-small-rocket-sketched-by-lines-image_2281604.jpg"></img>
            </div>
            <div>
                 <input type="search"></input>
            </div>
            <div>
                <h1>
                <span className="material-symbols-outlined">
                account_circle
               </span>
                </h1>
            </div>
        </div>
        </>
    )
}

const root=reactdom.createRoot(document.getElementById("root"));
root.render(Navbar_componet());