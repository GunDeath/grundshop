import React from 'react';
import classes from './WishListLayout.module.css'
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import PopularGoods from "../../../components/regular_components/HomePage/popular_goods/PopularGoods";
import FullWishlist from "../../../components/regular_components/WishlistPage/FullWishlist/FullWishlist";
import EmptyWishlist from "../../../components/regular_components/WishlistPage/EmptyWishlist/EmptyWishlist";

const WishListLayout = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Избранное </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <CatalogAside/>
                    <div className={classes.contentSection}>
                        { wishlist.length !== 0 ? <FullWishlist /> : <EmptyWishlist />}
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default WishListLayout;