import React, {useState} from 'react';
import classes from './MyCheckbox.module.css'
import MyOrderCheckTitle from "../../MyTitles/MyOrderCheckTitle/MyOrderCheckTitle";
import {Radio} from "@mui/material";

const MyCheckbox = ({value, name}) => {
    const [paymentMethod, setPaymentMethod] = useState('cod')
    const handleChange = (event) => {
        setPaymentMethod(event.target.value)
    }
    return (
        <div className={classes.myCheckbox}>
            <div className={classes.radiaBlockSubText}>
                <div className={classes.radiaBlock}>
                    <Radio  checked={paymentMethod === 'cod'}  onChange={handleChange}  value="cod"  name="payment_method" />
                </div>
                <div>
                    <MyOrderCheckTitle>Наличными при получении</MyOrderCheckTitle>
                    Расчет происходит с курьером наличными, при получении товара или через кассу на условиях самовывоза
                </div>
            </div>
            <div className={classes.radiaBlock}>
                <Radio checked={paymentMethod === 'bacs'}  onChange={handleChange}  value="bacs"  name="payment_method" />
                <MyOrderCheckTitle>Безналичный расчет</MyOrderCheckTitle>
            </div>


        </div>
    );
};

export default MyCheckbox;