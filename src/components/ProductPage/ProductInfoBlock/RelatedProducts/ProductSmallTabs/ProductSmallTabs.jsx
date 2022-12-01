import React from 'react';
import classes from './ProductSmallTabs.module.css'
import MyRegularSmallBtn from "../../../../UIUX/buttons/MyRegularSmallBtn/MyRegularSmallBtn";

const ProductSmallTabs = ({changeActive, activeTab}) => {

    return (
        <div className={classes.productSmallTabs}>
            <MyRegularSmallBtn change={changeActive} activeTab={activeTab}>Похожие</MyRegularSmallBtn>
            <MyRegularSmallBtn change={changeActive} activeTab={!activeTab}>Комплектующие</MyRegularSmallBtn>
        </div>
    );
};

export default ProductSmallTabs;