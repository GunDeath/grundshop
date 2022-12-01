import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/Cart";

export const store = configureStore({
    reducer: {cart: cartReducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})

