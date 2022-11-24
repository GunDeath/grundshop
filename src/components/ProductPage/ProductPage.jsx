import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import {api} from "../../woocommerce_api";
import ProductInfoBlock from "./ProductInfoBlock/ProductInfoBlock";
import ProductImgSection from "./ImageBlock/ProductImgSection/ProductImgSection";

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

    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div className={classes.product_cart_main}>
                <div className={classes.productMainWrapper}>
                    <ProductImgSection singleProduct={singleProduct}/>
                    <ProductInfoBlock singleProduct={singleProduct} quantity={quantity}/>
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