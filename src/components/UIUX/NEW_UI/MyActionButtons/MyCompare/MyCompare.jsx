import React from 'react';
import classes from './MyCompare.module.css'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import active_compare from "../../../../../assets/icons/actions/compare_active.svg";
import compare_icon from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";

const MyCompare = ({product}) => {
    const {comparelistAddItem,comparelistRemoveItem} = useActions()
    const {compare} = useTypedSelector(state => state)
    const isExistsInComparelist = compare.some(p => p.id === product.id)

    return (
        <img
            src={isExistsInComparelist ? active_compare : compare_icon}
            onClick={() => { isExistsInComparelist ? comparelistRemoveItem(product) : comparelistAddItem(product)}}
            alt="Сравнение"
            className={classes.myCompare}
        />
    );
};

export default MyCompare;