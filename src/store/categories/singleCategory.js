import {createSlice} from "@reduxjs/toolkit";

const singleCategoryLocalStorage = JSON.parse(localStorage.getItem('singleCategory'));
const initialState = singleCategoryLocalStorage || []

export const singleCategorySlice = createSlice({
    name: 'singleCategory',
    initialState,
    reducers: {
        singleCategoryAddItem: (state, action) => {
            if(state.length === 0){
                console.log('default')
                state.push(action.payload)
            }else{
                console.log('custom')
                state.splice(0, 1, action.payload)
                // state.filter(elem => elem.slug !== action.payload.slug)
            }
        }
    }
})

export const singleCategoryReducer = singleCategorySlice.reducer
export const singleCategoryActions = singleCategorySlice.actions