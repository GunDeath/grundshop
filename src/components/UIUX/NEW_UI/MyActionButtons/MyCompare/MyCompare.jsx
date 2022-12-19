import React, {useEffect} from 'react';
import classes from './MyCompare.module.css'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import active_compare from "../../../../../assets/icons/actions/compare_active.svg";
import compare_icon from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";
import {Link} from "react-router-dom";

const MyCompare = ({product = {id: 0}, extended = false, headerIcon = false}) => {
    const {comparelistAddItem, comparelistRemoveItem} = useActions()
    const {compare} = useTypedSelector(state => state)
    useEffect(() => {localStorage.setItem('compare', JSON.stringify(compare))}, [compare])
    const isExistsInComparelist = compare.some(p => p.id === product.id)

    return (
        <>
            {
                headerIcon
                    ? (
                        <Link to='/compare' className={classes.wishlistBlockPosition}>
                            <img src={compare_icon} alt="Сравнение" className={classes.actionButton}/>
                            <span className={classes.countSpan}>{compare.length}</span>
                        </Link>
                    )
                    : (
                        <div className={classes.wishlistBlock} onClick={() => {
                            isExistsInComparelist ? comparelistRemoveItem(product) : comparelistAddItem(product)
                        }}>
                            <img
                                src={isExistsInComparelist ? active_compare : compare_icon}
                                alt="Сравнение"
                            />
                            {extended ? 'Сравнить' : ''}
                        </div>
                    )
            }
        </>
    );
};

export default MyCompare;