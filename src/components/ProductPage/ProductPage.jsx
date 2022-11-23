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
                    <div>
                        <MyBlogTitle title={singleProduct.name}/>
                    </div>
                    <div>
                        <div>
                            <img src={rating_icons} alt=""/>
                        </div>
                        <div>
                            <img src={compare_icon} alt=""/>
                            <img src={wishlist_icons} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Артикул:</div>
                            <div>{singleProduct.sku}</div>
                        </div>
                        {singleProduct.attributes.map(attr =>
                            <div key={attr.id}>
                                <div>{attr.name}</div>
                                <div>{attr.options[0]}</div>
                            </div>
                        )}
                    </div>
                    <div>
                        <MyLowTitle>{singleProduct.price}</MyLowTitle>
                    </div>
                    <div>
                        <div>
                            <MyQuantity quantity={quantity}/>
                        </div>
                        <div>
                            <MyAddToCart>В корзину</MyAddToCart>
                            <MyBuyNow>Купить в 1 клик</MyBuyNow>
                        </div>
                    </div>
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