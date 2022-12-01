import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../cart/Cart";

const allActions = {
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}