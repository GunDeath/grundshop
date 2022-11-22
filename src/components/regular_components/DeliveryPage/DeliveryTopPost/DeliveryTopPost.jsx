import React, {useEffect, useState} from 'react';
import TitleBlock from "../../../UIUX/titles/block_title/TitleBlock";
import {ReactComponent as ListLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-spisok.svg";
import {ReactComponent as MoneyLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-dengi.svg";
import {ReactComponent as DeliveryLogo} from "../../../../assets/icons/delivery_icons/dostavka-icon-dostavka.svg";
import classes from './DeliveryTopPost.module.css'
import img from '../../../../assets/img/dostavka-001.png'
import RegularText from "../../../UIUX/body/RegularText";


const DeliveryTopPost = () => {
    return (
        <div className={classes.top_post}>
            <div className={classes.top_post_info}>
                <div className={classes.top_post_info_text}>
                    <TitleBlock title={'Доставка'}/>
                    <RegularText>
                        Курьерская доставка продукции осуществляется по Москве и Московской области, а также Санкт-Петербургу. Средний срок исполнения заказа - 1-2 дня. Для доставки Вы можете выбрать любой день, но время согласуется отделом доставки за день до отправки товара. В случае, если по каким-либо причинам Вы отказываетесь от наших услуг или хотите что-то поменять – сообщите, пожалуйста, нам за день до предварительной даты исполнения заказа.
                    </RegularText>
                </div>
                <div className={classes.top_post_info_icon}>
                    <ListLogo className={classes.logo_styles}/>
                    <MoneyLogo className={classes.logo_styles}/>
                    <DeliveryLogo className={classes.logo_styles}/>
                </div>
            </div>
            <div className={classes.img_block}>
                <img src={img} alt="" className={classes.post_img}/>
            </div>
        </div>
    );
};

export default DeliveryTopPost;