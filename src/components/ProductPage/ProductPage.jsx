import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import MyBlogTitle from "../UIUX/titles/blog_title/MyBlogTitle";
import {api} from "../../woocommerce_api";
import rating_icons from "../../assets/icons/product-cart__rating.svg";
import compare_icon from "../../assets/icons/header_icons/main-header__compare-icon.svg";
import wishlist_icons from "../../assets/icons/header_icons/main-header__wishlist-icon.svg";
import MyQuantity from "../UIUX/quantity/MyQuantity";
import MyAddToCart from "../UIUX/buttons/product_page/AddToCart/MyAddToCart";
import MyBuyNow from "../UIUX/buttons/product_page/BuyNow/MyBuyNow";
import ProductImgBlock from "./ImageBlock/ProductImgBlock";
import RegularText from "../UIUX/body/RegularText";
import CompareButtonsBlock from "./CompareButtonsBlock/CompareButtonsBlock";
import ProductTitle from "./ProductTitle/ProductTitle";
import AttributeBlock from "./AttributeBlock/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import QuantityButtonBlock from "./QuantityButtonBlock/QuantityButtonBlock";

const ProductPage = (props) => {
    const params = useParams()
    const location = useLocation()
    const [singleProduct, setSingleProduct] = useState({attributes: [], images: []})
    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        if (location.state !== null) {
            const {product} = location.state
            setSingleProduct(product)
        } else {
            api.get(`products/${params.id}`)
                .then(response => {
                    if (response.status === 200) {
                        setSingleProduct(response.data)
                    }
                })
                .catch(error => {
                })
        }
    }, [])

    console.log(singleProduct)
    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div className={classes.product_cart_main}>
                <div>
                    {singleProduct.images.map((img, index) =>
                        <div key={img.id}>
                            <ProductImgBlock img={img} index={index}/>
                        </div>
                    )}
                </div>
                <div>
                    <ProductTitle title={singleProduct.name}/>
                    <div className={classes.ratingCompareBlock}>
                        <div>
                            <img src={rating_icons} alt=""/>
                        </div>
                        <CompareButtonsBlock/>
                    </div>
                    <AttributeBlock singleProduct={singleProduct}/>
                    <PriceBlock regularPrice={singleProduct.price}/>
                    <QuantityButtonBlock quantity={quantity} />
                </div>
            </div>


            {/*{singleProduct.description*/}
            {/*    ? <div className={classes.description}>{parse(singleProduct.description)}</div>*/}
            {/*    : <></>*/}
            {/*}*/}

        </div>
    )
        ;
};

export default ProductPage;