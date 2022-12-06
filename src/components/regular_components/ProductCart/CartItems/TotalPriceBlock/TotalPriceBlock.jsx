import React from 'react';
import classes from './TotalPriceBlock.module.css'
import MyGetOrder from "../../../../UIUX/NEW_UI/MyButtons/MyGetOrder/MyGetOrder";

const TotalPriceBlock = ({totalPrice}) => {

    return (
        <div className={classes.totalPriceBlock}>
            <div className={classes.totalText}>
                Итого:
            </div>
            <div className={classes.totalPriceRightBlock}>
                <div className={classes.totalPrice}>
                    {Math.round(totalPrice)} руб.
                </div>
                <MyGetOrder>Оформить заказ</MyGetOrder>
            </div>
        </div>
    );
};

export default TotalPriceBlock;