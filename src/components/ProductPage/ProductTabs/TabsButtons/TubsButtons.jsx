import React from 'react';
import classes from './TubsButtoons.module.css';
import MyNormalRegularBtn from "../../../UIUX/buttons/MyNormalRegularBtn/MyNormalRegularBtn";

const TubsButtons = ({isActive, changeActiveTab}) => {

    return (
        <div className={classes.tabsButtonsLayout}>
            <MyNormalRegularBtn
                change={changeActiveTab}
                activeTab={isActive}
            >
                Описание
            </MyNormalRegularBtn>

            <MyNormalRegularBtn
                change={changeActiveTab}
                activeTab={!isActive}
            >
                Документация
            </MyNormalRegularBtn>
        </div>
    );
};

export default TubsButtons;