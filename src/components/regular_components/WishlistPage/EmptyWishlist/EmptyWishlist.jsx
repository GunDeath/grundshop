import React from 'react';
import classes from './EmptyWishlist.module.css'
import MyNormalRegularBtn from "../../../UIUX/buttons/MyNormalRegularBtn/MyNormalRegularBtn";
import BannerBtn from "../../../UIUX/buttons/banner_btn/BannerBtn";

const EmptyWishlist = () => {
    return (
        <div className={classes.emptyWishlist}>
            <div className={classes.emptyWishlistBlock}>
                <div className={classes.emptyWishlistTitle}>Список избранного пуст</div>
                <div className={classes.emptyWishlistText}>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</div>
                <div className={classes.buttonBlock}>
                    <MyNormalRegularBtn activeTab={false}>На главную</MyNormalRegularBtn>
                    <BannerBtn />
                </div>
            </div>
        </div>
    );
};

export default EmptyWishlist;