import React from 'react';
import classes from './ProductSmallTabs.module.css'
import MyRegularSmallBtn from "../../../../UIUX/buttons/MyRegularSmallBtn/MyRegularSmallBtn";

const ProductSmallTabs = () => {
    return (
        <div className={classes.productSmallTabs}>
            <MyRegularSmallBtn>Похожие</MyRegularSmallBtn>
            <MyRegularSmallBtn>Комплектующие</MyRegularSmallBtn>
        </div>
    );
};

export default ProductSmallTabs;