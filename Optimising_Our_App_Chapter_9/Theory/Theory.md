# 🚀Namaste Optimising_Our_App_Chapter_9❤️ 
## 🗒️ Note  
### singleResponsibility:- 
#### ✔️it's work on only it's work like displaying only cards.
### Modularity:-  
#### ✔️divide into small modules for testable and maintainable && reusable. 

## Owen Custom hook  Example:-

```
import { useEffect, useState } from "react"

const useOnlineStates=()=>{
    const [state,setState]=useState(true);
    useEffect(()=>{
     window.addEventListener("online",()=>{
        setState(true);
     })
     window.addEventListener("offline",()=>{
        setState(false);
     })
    },[])
    return state;
}
export default useOnlineStates;

```
### Assessment:- 
### 1.When and Why do we need lazy()?
#### ✔️basically tha parcel is load all js files into single file called bundle(at intiail load).but this is very complex and not optimize if there is large code.so here we are used tha lazy() function for divide tha code into different bundle.it is done when we move to next page then create particular code  bundles.

### 2.What is Suspense?  
#### ✔️Suspense is a component in react library. 
### 3.Advantages and disadvantages of using this code splitting pattern? 
#### ✔️advantages of code splitting:- 
- Fast to load because tha size of file is small. 
- Small size for bundlers.
- when we need tha code then only load (on tha user click).
#### ✔️disadvantages of code splitting:- 
- more network requests are need.
- increased tasting processes.
### 5.When do we and why do we need suspense?
#### ✔️suspense is a component.it is used when tha actually code is not loaded in lazy function.
- if we not use this we got tha errors sometimes.because react is fast to load.but we don't have load tha code that time(if use tha lazy).so that time we use this component to load tha shimmer(like loading...).
