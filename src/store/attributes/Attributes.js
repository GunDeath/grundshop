import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const attributesSlice = createSlice({
    name: 'attributes',
    initialState,
    reducers: {
        addAttributes: (state, action) => {
            if(state.length === 0){
                state.push(...action.payload)
            }else{
                state.filter(attr => attr.name !== action.payload.name)
            }
        },
    }
})

export const attributesReducer = attributesSlice.reducer
export const attributesActions = attributesSlice.actions