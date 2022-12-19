import React, {useEffect} from 'react';
import classes from './MyWishlist.module.css'
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../../store/hooks/useActions";
import active_wishlist from "../../../../../assets/icons/actions/heart_active.svg";
import wishlist_icons from "../../../../../assets/icons/header_icons/main-header__wishlist-icon.svg";
import {Link} from "react-router-dom";

const MyWishlist = ({product = {id: 0}, extended = false, headerIcon = false}) => {
    const {wishlistAddItem, wishlistRemoveItem} = useActions()
    const {wishlist} = useTypedSelector(state => state)
    useEffect(() => { localStorage.setItem('wishlist', JSON.stringify(wishlist)) }, [wishlist])
    const isExistsInWishlist = wishlist.some(element => element.id === product.id)

    return (
        <>
            {
                headerIcon
                    ? (
                        <Link to='/wishlist' className={classes.wishlistBlockPosition}>
                            <img src={wishlist_icons} alt="Избранное" className={classes.actionButton}/>
                            <span className={classes.countSpan}>{wishlist.length}</span>
                        </Link>
                    )
                    : (
                        <div className={classes.wishlistBlock} onClick={() => {
                            isExistsInWishlist ? wishlistRemoveItem(product) : wishlistAddItem(product)
                        }}>
                            <img
                                src={isExistsInWishlist ? active_wishlist : wishlist_icons}
                                alt="Избранное"
                            />
                            {extended ? 'Избранное' : ''}
                        </div>
                    )
            }
        </>
    );
};

export default MyWishlist;