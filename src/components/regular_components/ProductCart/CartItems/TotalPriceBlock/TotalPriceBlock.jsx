import React from 'react';
import classes from './TotalPriceBlock.module.css'
import MyNormalRegularBtn from "../../../../UIUX/buttons/MyNormalRegularBtn/MyNormalRegularBtn";

const TotalPriceBlock = ({totalPrice}) => {

    return (
        <div className={classes.totalPriceBlock}>
            <div>
                Итого:
            </div>
            <div className={classes.totalPriceRightBlock}>
                <div className={classes.totalPrice}>
                    {Math.round(totalPrice)} руб.
                </div>
                <MyNormalRegularBtn>Оформить заказ</MyNormalRegularBtn>
            </div>
        </div>
    );
};

export default TotalPriceBlock;