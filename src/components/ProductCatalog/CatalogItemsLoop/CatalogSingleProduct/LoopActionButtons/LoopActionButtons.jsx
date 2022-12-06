import React, {useEffect} from 'react';
import classes from './LoopActionButtons.module.css'
import compare_icon from "../../../../../assets/icons/header_icons/main-header__compare-icon.svg";
import wishlist_icons from "../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg";
import active_wishlist from '../../../../../assets/icons/actions/heart_active.svg';
import active_compare from '../../../../../assets/icons/actions/compare_active.svg';
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const LoopActionButtons = ({product}) => {
    const {wishlistAddItem, wishlistRemoveItem, comparelistAddItem,comparelistRemoveItem} = useActions()
    const {wishlist, compare} = useTypedSelector(state => state)
    const isExistsInWishlist = wishlist.some(p => p.id === product.id)
    const isExistsInComparelist = compare.some(p => p.id === product.id)

    useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist))}, [wishlist])

    return (
        <div className={classes.productCartActionButtons}>
            <img
                src={isExistsInComparelist ? active_compare : compare_icon}
                onClick={() => { isExistsInComparelist ? comparelistRemoveItem(product) : comparelistAddItem(product)}}
                alt="Сравнение"
                className={classes.actionButton}
            />
            <img
                src={isExistsInWishlist ? active_wishlist : wishlist_icons}
                onClick={() => { isExistsInWishlist ? wishlistRemoveItem(product) : wishlistAddItem(product)}}
                alt="Избранное"
                className={classes.actionButton}
            />
        </div>
    );
};

export default LoopActionButtons;