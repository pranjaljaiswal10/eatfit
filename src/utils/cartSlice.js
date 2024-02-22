import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
      state.items.push(action.payload);
        },
        clearCart:(state)=>{
         state.items.length=0
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        increase:(state)=>{
            state.items.quantity+=1
        },
        decrease:(state)=>{
            state.items.quantity-=1
        }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItem,clearCart,increase,decrease}=cartSlice.actions;