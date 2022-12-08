import React, {useEffect} from 'react';
import classes from './MyWishlist.module.css'
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../../store/hooks/useActions";
import active_wishlist from "../../../../../assets/icons/actions/heart_active.svg";
import wishlist_icons from "../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg";

const MyWishlist = ({product, extended = false}) => {
    const {wishlistAddItem, wishlistRemoveItem} = useActions()
    const {wishlist} = useTypedSelector(state => state)
    const isExistsInWishlist = wishlist.some(p => p.id === product.id)

    useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist))}, [wishlist])

    return (
        <div className={classes.wishlistBlock}>
            <img
                src={isExistsInWishlist ? active_wishlist : wishlist_icons}
                onClick={() => { isExistsInWishlist ? wishlistRemoveItem(product) : wishlistAddItem(product)}}
                alt="Избранное"
                className={classes.wishlistBtn}
            />
            {
                extended ? 'Избранное' : ''
            }
        </div>
    );
};

export default MyWishlist;