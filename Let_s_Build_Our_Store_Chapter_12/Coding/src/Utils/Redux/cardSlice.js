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