import React, {useEffect} from 'react';
import classes from './MyCompare.module.css'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import active_compare from "../../../../../assets/icons/actions/compare_active.svg";
import compare_icon from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";

const MyCompare = ({product, extended = false}) => {
    const {comparelistAddItem,comparelistRemoveItem} = useActions()
    const {compare} = useTypedSelector(state => state)
    const isExistsInComparelist = compare.some(p => p.id === product.id)

    useEffect(() => { localStorage.setItem('compare', JSON.stringify(compare))}, [compare])

    return (
        <div className={classes.compareBlock} onClick={() => { isExistsInComparelist ? comparelistRemoveItem(product) : comparelistAddItem(product)}}>
            <img
                src={isExistsInComparelist ? active_compare : compare_icon}
                alt="Сравнение"
            />
            {
                extended ? 'Сравнить' : ''
            }
        </div>
    );
};

export default MyCompare;