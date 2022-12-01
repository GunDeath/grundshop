import React from 'react';
import classes from './EmptyCart.module.css'
import MyNormalRegularBtn from "../../../UIUX/buttons/MyNormalRegularBtn/MyNormalRegularBtn";
import BannerBtn from "../../../UIUX/buttons/banner_btn/BannerBtn";

const EmptyCart = () => {
    return (
        <div className={classes.emptyCart}>
            <div className={classes.emptyCartBlock}>
                <div className={classes.emptyCartTitle}>Корзина пуста</div>
                <div className={classes.emptyCartText}>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</div>
                <div className={classes.buttonBlock}>
                    <MyNormalRegularBtn activeTab={false}>На главную</MyNormalRegularBtn>
                    <BannerBtn />
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;