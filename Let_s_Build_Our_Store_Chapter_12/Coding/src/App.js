import About from "./Componentes/About";
import  ReactDOM  from "react-dom/client";
import * as objtype from "./Componentes/Header";
import Body from "./Componentes/Body";
import Error from "./Componentes/Error";
import Restaurent from "./Componentes/Restaurent";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Suspense,lazy, useState } from "react";
import UserContext from "./Utils/UserContext";
import CardState from "./Utils/CardState";
import { Provider } from "react-redux";
import appStore from "./Utils/Redux/appStore";
import FavourateCard from "./Componentes/FavourateCard";
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
const Contactus=lazy(()=> import("./Componentes/Contactus"));

const AppLayout=()=>{
  const [cardNumber,setCardNumber]=useState(0);
    return(
        /** */
       <Provider store={appStore}>
           <CardState.Provider value={{no: cardNumber,setCardNumber}}>
              <UserContext.Provider value={{loggedIn: "pasha"}}>
                 <div className="app">
                   <objtype.Header/>
                  <Outlet />
                 </div>
              </UserContext.Provider>
             </CardState.Provider>
       </Provider>
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
        element: <Suspense fallback={<h1>loading</h1>}><Contactus /></Suspense>
      },
      {
        path: "/restaurent/:resid",
        element: <Restaurent />
      },{
        path: "/FavourateCard",
        element: <FavourateCard />
      }
   ]
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approter}/>);
