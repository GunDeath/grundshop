import {createSlice} from "@reduxjs/toolkit";

const subCategoriesLocalStorage = JSON.parse(localStorage.getItem('subCategories'))
const initialState = subCategoriesLocalStorage || []

export const subCategoriesSlice = createSlice({
    name: 'subCategories',
    initialState,
    reducers:{
        subCategoryAddItem: (state, action) => {
            if(state.length === 0){
                state.push(...action.payload)
            }else if(state.length !== 0 && Array.isArray(action.payload)){
                action.payload.map(act => {
                    if(!state.some(element => element.id === act.id)){
                        state.push(act)
                    }
                })
            }
        },
        subCategoryRemoveItem: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const subCategoriesReducer = subCategoriesSlice.reducer
export const subCategoriesActions = subCategoriesSlice.actions