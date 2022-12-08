import {createSlice} from "@reduxjs/toolkit";

const productListLocalStorage = JSON.parse(localStorage.getItem('goods'))
const initialState = productListLocalStorage || [];

export const goodsSlice = createSlice({
    name: 'goodsList',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            if (state.length === 0) {
                state.push(...action.payload)
            } else if (!state.map(el => el.value).includes(action.payload.value)) {
                state.push(action.payload)
            }
        },
        removeProducts: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        updateProductList: (state, action) => {
            state.push(...action.payload)
        },
    }
})

export const goodsListReducer = goodsSlice.reducer
export const goodsListActions = goodsSlice.actions