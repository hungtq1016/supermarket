'use client'

import { ICartItem } from '@/lib/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface ICartState{
    cartItems : Array<ICartItem>
}
const initialState: ICartState = {cartItems:[],};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<ICartItem>)=>{
            const item = state.cartItems.find(item => item.product.id == action.payload.product.id)

            item ? item.inCart += action.payload.inCart: 

            state.cartItems.push({
                product: action.payload.product,
                inCart:action.payload.inCart,
            })
        }
    }
})

export const {increment} = cartSlice.actions;
export default cartSlice.reducer;