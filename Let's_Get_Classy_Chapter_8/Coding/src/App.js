import React from "react";
import About from "./Componentes/About";
import  ReactDOM  from "react-dom/client";
import * as objtype from "./Componentes/Header";
import Body from "./Componentes/Body";
import Contactus from "./Componentes/Contactus";
import Error from "./Componentes/Error";
import Restaurent from "./Componentes/Restaurent";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
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


const AppLayout=()=>{
    return(
        /** */
        <div className="app">
          <objtype.Header/>
          <Outlet />
        </div>
    )
}
const Approter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   errorElement: <Error/>,
   children: [
    {
        path: "/",
        element: <Body />
    },
      {
        path: "/about",  
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />
      },
      {
        path: "/restaurent/:resid",
        element: <Restaurent />
      }
   ]
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approter}/>);
