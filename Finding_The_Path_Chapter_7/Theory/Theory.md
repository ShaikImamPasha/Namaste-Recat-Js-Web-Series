# 🚀Namaste Finding_The_Path_Chapter_7❤️
## 🗒️ Note   
#### ✔️If there is no array dependency in useEffect then it will called on every render and update.  
```
 useEffect(()=>{console.log("rendering")})
``` 
#### ✔️If there is empty  array dependency in useEffect then it's called only one time that's initial state 
```
useEffect(()=>{console.log("rendering)},[])
``` 
#### ✔️if there array dependency  is present  with values when it be update then only render. 
```
useEffect(()=>{console.log("rnder")},[a])
``` 
#### ✔️never write useEffect in loop and write in top because js is synchronize. 

#### ✔️--------------------------------------------------------------------------------------- 


###             React Router 🔥 
#### ✔️first install react-router-browser library. 
```
npm install react-router-dom
```
#### ✔️createBrowserRouter is for router configuration. router configuration means we are write tha code that is like what if path is "./about" then modify page like about.js matter.  
#### ✔️RouterProvider is for provides the router config to our app. 
#### ✔️example code :- 
```
const App={<Home/>.......}
cont AppRouter=createBrowserRouter(
    [
       {
         path:"/",
        element:<App/>,
        errorElement: <Error/>
       },
       {
        path:"/about",
        element:<About/>
       },
       {
        path:"/more/info",
        element: <Info/>
       }
    ]
)
root.render(<RouterProvider route={AppLayOut}>)

Error.js
export const Error=()=>{
    return(
        <>
        something wrong
        </>
    )
}
```
#### ✔️if we need to render same component like header in all pages then we are use tha Outlet:- 
#### ✔️Ex code:-
```
import {Ouitlet} from "react-router-dom"; 

const AppLayout=()=>{
    return(
        /** */
        <div className="app">
          <Header/>
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

```
#### ✔️here we are use tha <a>(anchor) tag then tha whole page is re-render when we clk tha link. 
#### ✔️but in react we are use the <Link /> 
#### ✔️Ex:- 
```
<Link to=".app/info">clk<Link />
```
#### ✔️useParams :- 
#### ✔️it is a hook. 
#### ✔️used to accesses the values through tha urls's. 
#### ✔️ex: 
```
const {id}=useParams();
```

### ✔️Assignment Questions and answers
#### ✔️1.what would be happen if we do console.log(useState())?
#### 👉If we do console.log(useState()), we get an array [undefined, function] where first item in an array is state is undefined and the second item in an array is setState function is bound dispatchSetState. 
#### ✔️2.How will useEffect behave if we don't add a dependency array?
#### 👉If there is no array dependency in useEffect then it will called on every render and update.  
```
 useEffect(()=>{console.log("rendering")})
``` 
#### ✔️3.What is SPA?
#### 👉spa stands for single page application.when we are using react then we are not navigate one page to another page.Tha whole data(tags,matter,etc) contains in single page and based on click tha tha (require)containt will change in single page.This will possible using react-router-dom🔥🔥🔥(<Link><Link/>).
#### ✔️4.What is the difference between Client Side Routing and Server Side Routing?
#### 👉There are two types of Routing there 
-1.clint side routing 
-2.server side routing 
#### 👉1.here we are initial only one time we are make tha network call for all .html,.css,js etc files.
#### 👉2.here we are making tha network call every time when url's change.


