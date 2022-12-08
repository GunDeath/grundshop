import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../cart/Cart";
import {cartMasActions} from "../cart/CartMassRemove";
import {wishlistActions} from "../wishlist/Wishlist";
import {comparelistActions} from "../compare/Compare";
import {categoriesActions} from "../categories/useCategories";
import {goodsListActions} from "../products/Products";

const allActions = {
    ...cartActions,
    ...cartMasActions,
    ...wishlistActions,
    ...comparelistActions,
    ...categoriesActions,
    ...goodsListActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}