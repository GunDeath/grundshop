import React from 'react';
import classes from './CompareLayout.module.css'
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import MyPageTitle from "../../../components/UIUX/NEW_UI/MyTitles/MyPageTitle/MyPageTitle";
import CatalogAside from "../../../components/CatalogAside/CatalogAside";
import MyBreadCrumbs from "../../../components/UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";
import FullWishlist from "../../../components/regular_components/WishlistPage/FullWishlist/FullWishlist";
import EmptyWishlist from "../../../components/regular_components/WishlistPage/EmptyWishlist/EmptyWishlist";
import PopularGoods from "../../../components/regular_components/PopularGoods/PopularGoods";

const CompareLayout = () => {
    const {compare} = useTypedSelector(state => state)
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <MyPageTitle> Сравнение </MyPageTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <CatalogAside/>
                    <div className={classes.contentSection}>
                        <MyBreadCrumbs url='/compare' title='Сравнение'/>
                        { compare.length !== 0 ? <FullWishlist /> : <EmptyWishlist />}
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CompareLayout;