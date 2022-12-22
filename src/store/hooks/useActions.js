import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../cart/Cart";
import {cartMasActions} from "../cart/CartMassRemove";
import {wishlistActions} from "../wishlist/Wishlist";
import {comparelistActions} from "../compare/Compare";
import {categoriesActions} from "../categories/useCategories";
import {goodsListActions} from "../products/Products";
import {singleCategoryActions} from "../categories/singleCategory";
import {wishlistMassActions} from "../wishlist/WishlistMassRemove";
import {compareMassActions} from "../compare/CompareMassRemove";
import {attributesActions} from "../attributes/Attributes";
import {productFilterListActions} from "../filter/Filter";

const allActions = {
    ...cartActions,
    ...cartMasActions,
    ...wishlistActions,
    ...comparelistActions,
    ...categoriesActions,
    ...goodsListActions,
    ...singleCategoryActions,
    ...wishlistMassActions,
    ...compareMassActions,
    ...attributesActions,
    ...productFilterListActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}