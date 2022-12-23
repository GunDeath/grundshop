import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/Cart";
import {cartMasReducer} from "./cart/CartMassRemove";
import {wishlistReducer} from "./wishlist/Wishlist";
import {categoriesReducer} from "./categories/useCategories";
import {goodsListReducer} from "./products/Products";
import {singleCategoryReducer} from "./categories/singleCategory";
import {wishlistMassReducer} from "./wishlist/WishlistMassRemove";
import {compareMassReducer} from "./compare/CompareMassRemove";
import {comparelistReducer} from "./compare/Compare";
import {attributesReducer} from "./attributes/Attributes";
import {productFilterListReducer} from './filter/Filter'
import {attributeProductsReducer} from "./product_attributes/ProductAttributes";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartRemove: cartMasReducer,
        wishlist: wishlistReducer,
        wishlistMassRemove: wishlistMassReducer,
        compare: comparelistReducer,
        compareMassRemove: compareMassReducer,
        categories: categoriesReducer,
        goodsList: goodsListReducer,
        singleCategory: singleCategoryReducer,
        attributesReducer: attributesReducer,
        productFilterList: productFilterListReducer,
        attributeProducts: attributeProductsReducer
    },
})

