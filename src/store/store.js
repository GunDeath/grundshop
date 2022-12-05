import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/Cart";
import {cartMasReducer} from "./cart/CartMassRemove";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartRemove: cartMasReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})

