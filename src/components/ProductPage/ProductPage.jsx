import React from 'react';
import {useLocation} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import RegularText from "../UIUX/body/RegularText";
import MyBlogTitle from "../UIUX/titles/blog_title/MyBlogTitle";
import parse from 'html-react-parser'

const ProductPage = (props) => {
    const location = useLocation()
    const { product } = location.state
    console.log(product)
    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div>
                <MyLowTitle>{product.name}</MyLowTitle>
                <br/>
                <RegularText>{product.sku}</RegularText>
                <br/>
                <MyBlogTitle title={product.price}/>
                <br/>
                <div className={classes.description}>{parse(product.description)}</div>
            </div>

        </div>
    );
};

export default ProductPage;