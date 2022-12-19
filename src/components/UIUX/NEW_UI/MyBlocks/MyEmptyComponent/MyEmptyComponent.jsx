import React from 'react';
import classes from './MyEmptyComponent.module.css'
import BannerBtn from "../../../buttons/banner_btn/BannerBtn";
import MyBackHome from "../../MyButtons/MyBackHome/MyBackHome";

const MyEmptyComponent = ({pageTitle}) => {
    return (
        <div className={classes.emptyPageBlock}>
            <div className={classes.emptyPageBlockSection}>
                <div className={classes.emptyPageBlockSectionTitle}>{pageTitle}</div>
                <div className={classes.emptyPageBlockSectionText}>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</div>
                <div className={classes.emptyPageButtonsBlock}>
                    <MyBackHome>На главную</MyBackHome>
                    <BannerBtn />
                </div>
            </div>
        </div>
    );
};

export default MyEmptyComponent;