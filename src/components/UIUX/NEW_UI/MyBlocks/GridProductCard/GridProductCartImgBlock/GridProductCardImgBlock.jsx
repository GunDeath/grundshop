import React from 'react';
import classes from './GridProductCardImgBlock.module.css';
import GridActionBlock from "./GridActionBlock/GridActionBlock";
import GridProductMainImg from "./GridProductMainImg/GridProductMainImg";
import MyLabelProductCard from "../../../MyLabelProductCard/MyLabelProductCard";

const GridProductCardImgBlock = ({product}) => {
    return (
        <div className={classes.gridProductCartImgBlock}>
            <GridProductMainImg product={product}/>
            {product.sale_price === "" ? "" : <MyLabelProductCard product={product} /> }
            <GridActionBlock product={product} />
        </div>
    );
};

export default GridProductCardImgBlock;