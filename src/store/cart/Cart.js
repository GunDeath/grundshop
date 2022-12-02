import {createSlice} from "@reduxjs/toolkit";
import {useEffect} from "react";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
const initialState = cartFromLocalStorage || [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            return state.filter(p => p.id === action.payload.id)
        },
        updateItem: (state, action) => {
            let index = state.findIndex((i) => i.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity = action.payload.quantity
                state[index].newPrice = action.payload.newPrice
            }
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions