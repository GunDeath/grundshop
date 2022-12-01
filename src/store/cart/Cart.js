import {createSlice} from "@reduxjs/toolkit";

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
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions