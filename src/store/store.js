import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/Cart";
import {cartMasReducer} from "./cart/CartMassRemove";
import {wishlistReducer} from "./wishlist/Wishlist";
import {comparelistReducer} from "./compare/Compare";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartRemove: cartMasReducer,
        wishlist: wishlistReducer,
        compare: comparelistReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})

