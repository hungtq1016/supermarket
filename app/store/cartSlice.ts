'use client'

import { ICartItem } from '@/lib/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export interface ICartState{
    cartItems : Array<ICartItem>
}
// const carts:ICartItem[] = JSON.parse(localStorage.getItem('carts') || '[]');

const initialState: ICartState = {cartItems:[]};

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
            // localStorage.setItem('carts', JSON.stringify(state.cartItems));
        },
        decrement:(state,action:PayloadAction<string>)=>{
            const item = state.cartItems.find(item => item.product.id == action.payload)
            if(item){
                item.inCart > 1 ?
                    item.inCart--
                :
                    state.cartItems = state.cartItems.filter((item)=>{
                        return item.product.id !== action.payload
                    })
            }
            // localStorage.setItem('carts', JSON.stringify(state.cartItems));
        },
        clearById:(state,action:PayloadAction<string>)=>{
            state.cartItems = state.cartItems.filter((item)=>{
                return item.product.id !== action.payload
            })
            // localStorage.setItem('carts', JSON.stringify(state.cartItems));

        },
        clearAll:(state)=>{
            state.cartItems = []
            // localStorage.setItem('carts', JSON.stringify(state.cartItems));
        }
    }
})

export const {increment,decrement,clearById,clearAll} = cartSlice.actions;
export default cartSlice.reducer;