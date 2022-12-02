import React from 'react';
import MyLowTitle from "../../../UIUX/titles/low_title/MyLowTitle";
import deliveryLogo from '../../../../assets/img/dostavka-002.png'
import classes from './DeliveryBottom.module.css'
import {Link} from "react-router-dom";

const DeliveryBottom = () => {
    return (
        <div className={classes.main_section}>
            <div className={classes.text_block}>
                <MyLowTitle>
                    Рассчитать стоимость доставки в регионы страны вы сможете на сайтах представленных компаний
                </MyLowTitle>
            </div>
            <div className={classes.img_block}>
                <img src={deliveryLogo} alt="" className={classes.img}/>
            </div>
        </div>
    );
};

export default DeliveryBottom;