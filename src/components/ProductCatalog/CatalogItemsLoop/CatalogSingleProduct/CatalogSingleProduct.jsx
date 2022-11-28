import React from 'react';
import classes from "./CatalogSingleProduct.module.css";
import {Link} from "react-router-dom";
import rating_icons from "../../../../assets/icons/product-cart__rating.svg";
import CatalogBtn from "../../../UIUX/buttons/catalog_btn/CatalogBtn";
import LoopSaleLabel from "./LoopSaleLabel/LoopSaleLabel";
import LoopActionButtons from "./LoopActionButtons/LoopActionButtons";
import LoopProductPrice from "./LoopProductPrice/LoopProductPrice";

const CatalogSingleProduct = ({product}) => {
    return (
        <div className={classes.product_cart__catalog_loop__single} key={product.id}>
            <div className={classes.product_cart__img_block}>
                <img src={product.images[0].src} alt="" className={classes.product_cart__img_item}/>
                {product.sale_price === "" ? "" : <LoopSaleLabel sale_price={product.sale_price} regular_price={product.regular_price} /> }
                <LoopActionButtons />
            </div>
            <div className={classes.product_cart__information_block}>
                <div className={classes.product_cart__title_element}>
                    <Link to={`/catalog/product/${product.slug}`} state={{product}} >{product.name}</Link>
                </div>
                <div className={classes.product_cart__rating_element}>
                    <img src={rating_icons} alt=""/>
                </div>
                <div className={classes.product_cart__sku_block}>
                    Артикул: {product.sku}
                </div>
                <div className={classes.product_cart__price_cart}>
                    <LoopProductPrice sale_price={product.sale_price} price={product.price} regular_price={product.regular_price}/>
                    <CatalogBtn product={product} quantity={1}/>
                </div>
            </div>
        </div>
    );
};

export default CatalogSingleProduct;