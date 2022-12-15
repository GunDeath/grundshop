import React from 'react';
import classes from './WishListLayout.module.css'
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import MyBreadCrumbs from "../../../components/UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/PopularGoods/PopularGoods";

const WishListLayout = () => {
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Избранное </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <CatalogAside/>
                    <div className={classes.contentSection}>
                        <MyBreadCrumbs url='/wishlist' title='Избранное'/>
                        <WishListLayout />
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