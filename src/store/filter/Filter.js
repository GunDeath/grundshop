import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const productFilterSlice = createSlice({
    name: 'productFilterList',
    initialState,
    reducers:{
        addFilterProductsToList: (state, action) => {
            return action.payload
        },
        removeProductsFromFilterList: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const productFilterListReducer = productFilterSlice.reducer
export const productFilterListActions = productFilterSlice.actions