# 🚀Let's Build Our Store Chapter-12❤️
## 🗒️ Note 
#### ->1.useContext vs Redux.
### useContext
- It is used from react library.
- There is only minimum setup for it. 
- it is used for small projects.
### Redux 
- It is used from redux library.
- There is some more setup for it(compare to useContext).
- it is used for large projects. 

### ->2.Advantages of using Redux Toolkit over Redux. 
#### here we are easy to setup tha configuration and actions compare to Redux.
#### here we can create individual slices(like card,favoratelist).
#### it use tha immer libery to automatic done tha mutable state{...state}.

#### ->3.Explain Dispatcher.
### Dispatcher is a hook (useDispatcher) and it is used to we can call tha reducers functions(action) to change tha store values corresponding slices.
```
import { useDispatch } from "react-redux";
const MenuItemes=({data})=>{
  const dispatch=useDispatch();
  const handileOnClick=(data)=>{
   dispatch(addItem(data));
  }
    return(
        <>
        <div onClick={()=>handileOnClick(data)}>
             clk
       </div>
      </>
    )
}
export default MenuItemes;
```

### ->4.Explain slice.
#### A "slice" is a collection of Redux reducer logic and actions for a single feature in your app.
### ->5.Explain selector. 
#### selector is a hook and it takes arguments through callback function and we can accesses store values.
```
const itemCards=useSelector((state)=>state.cart.itemes);
```

### ->6.Explain createSlice and the configuration it takes.
### createSlice :-
#### it used to we can create tha slice.
#### it takes an object and some properties of this object :- 
- name: it is name of slice.ex- card. 
- initialState: it is state value for tha slices. 
- reducers: it contains tha functions for update or delete tha state of slices.
```
import { createSlice } from "@reduxjs/toolkit";
const cardSlice=createSlice({
    name:"card",
    initialState:{
        itemes: []
    },
    reducers:{
        addItem: function(state,action){
           state.itemes.push(action.payload);
        }
    }
})
export const {addItem}=cardSlice.actions;
export default cardSlice.reducer;
``` 

### configuration :- 
#### configureStore is used to create tha redux store. 
#### which contain tha reducer property.reducer is a combination of reducers(slices). 
```
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
const appStore=configureStore({
    reducer:{
        cart: cardReducer
    }
});
export default appStore;
```

