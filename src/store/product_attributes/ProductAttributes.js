import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const attributeProductsSlice = createSlice({
    name: 'attributeProductsList',
    initialState,
    reducers:{
        addAttributeProductsList: (state, action) => {
            action.payload.map(item=>{
                if(!state.some(element => element.id === item.id)){
                    state.push(item)
                }
            })
        },
        updateAttributeProductsList: (state, action) => {
            return state
        }
    }
})

export const attributeProductsReducer = attributeProductsSlice.reducer
export const attributeProductsActions = attributeProductsSlice.actions