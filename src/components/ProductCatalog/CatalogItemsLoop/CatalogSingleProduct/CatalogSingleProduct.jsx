import React from 'react';
import classes from "./CatalogSingleProduct.module.css";
import {Link} from "react-router-dom";
import rating_icons from "../../../../assets/icons/product-cart__rating.svg";
import LoopSaleLabel from "./LoopSaleLabel/LoopSaleLabel";
import LoopActionButtons from "./LoopActionButtons/LoopActionButtons";
import LoopProductPrice from "./LoopProductPrice/LoopProductPrice";
import MyAddToCart from "../../../UIUX/buttons/product_page/AddToCart/MyAddToCart";
import default_img from '../../../../assets/img/default_img.png'

const CatalogSingleProduct = ({product}) => {
    return (
        <div className={classes.product_cart__catalog_loop__single} key={product.id}>
            <div className={classes.product_cart__img_block}>
                <img src={product.images.length !== 0 ? product.images[0].src : default_img} alt="" className={classes.product_cart__img_item}/>
                {product.sale_price === "" ? "" : <LoopSaleLabel sale_price={product.sale_price} regular_price={product.regular_price} /> }
                <LoopActionButtons product={product} />
            </div>
            <div className={classes.product_cart__information_block}>
                <div className={classes.product_cart__title_element}>
                    <Link to={`/catalog/${product.categories[0].slug}/${product.slug}`} state={{product}} >{product.name}</Link>
                </div>
                <div className={classes.product_cart__rating_element}>
                    <img src={rating_icons} alt=""/>
                </div>
                <div className={classes.product_cart__sku_block}>
                    Артикул: {product.sku}
                </div>
                <div className={classes.product_cart__price_cart}>
                    <LoopProductPrice sale_price={product.sale_price} price={product.price} regular_price={product.regular_price}/>
                    <MyAddToCart isCatalog={true} product={product} />
                </div>
            </div>
        </div>
    );
};

export default CatalogSingleProduct;