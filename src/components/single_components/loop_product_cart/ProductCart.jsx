import React from 'react';
import classes from './MyProductCart.module.css'
import rating_icons from '../../../assets/icons/product-cart__rating.svg'
import wishlist_icons from '../../../assets/icons/header_icons/main-header__wishlist-icon.svg'
import compare_icon from '../../../assets/icons/header_icons/main-header__compare-icon.svg'



const ProductCart = ({product}) => {
    let product_title = product.categories[0].name + " насос " + product.name;
    let sale_label_proc = 100 - ((product.sale_price * 100) / product.regular_price)
    return (
        <div className={classes.product_cart__catalog_loop__single} key={product.id}>
            <div className={classes.product_cart__img_block}>
                <img src={product.images[0].src} alt="" className={classes.product_cart__img_item}/>
                {product.sale_price === "" ? "" :
                    <div className={classes.product_cart__sale_label}>
                        - {Math.round(sale_label_proc)}%
                    </div>
                }
                <div className={classes.product_cart__action_buttons}>
                    <img src={compare_icon} alt=""/>
                    <img src={wishlist_icons} alt=""/>
                </div>
            </div>
            <div className={classes.product_cart__information_block}>
                <div className={classes.product_cart__title_element}>
                    {product_title}
                </div>
                <div className={classes.product_cart__rating_element}>
                    <img src={rating_icons} alt=""/>
                </div>
                <div className={classes.product_cart__sku_block}>
                    Артикул: {product.sku}
                </div>
                <div className={classes.product_cart__price_cart}>
                    {product.sale_price === ""
                        ?
                        <div className={classes.product_cart__price_block}>
                            <div className={classes.product_cart__regular_price}>
                                {Math.round(product.price)} руб.
                            </div>
                        </div>
                        :
                        <div className={classes.product_cart__price_block}>
                            <div className={
                                `${classes.product_cart__regular_price} ${classes.sale_styles}`
                            }>
                                {Math.round(product.regular_price)} руб.
                            </div>
                            <div className={classes.product_cart__sale_price}>
                                {Math.round(product.sale_price)}
                            </div>
                        </div>
                    }
                    <div className={classes.product_cart__button}>В корзину</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;