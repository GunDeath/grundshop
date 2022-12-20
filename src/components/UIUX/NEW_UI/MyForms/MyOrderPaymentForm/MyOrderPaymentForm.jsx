import React from 'react';
import classes from './MyOrderPaymentForm.module.css'
import MyOrderTitle from "../../MyTitles/MyOrderTitle/MyOrderTitle";

const MyOrderPaymentForm = () => {
    return (
        <div className={classes.myOrderPaymentFormLayout}>
            <MyOrderTitle>Выберите способ доставки</MyOrderTitle>
        </div>
    );
};

export default MyOrderPaymentForm;