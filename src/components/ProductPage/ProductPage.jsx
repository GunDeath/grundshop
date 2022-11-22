import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import MyLowTitle from "../UIUX/titles/low_title/MyLowTitle";
import RegularText from "../UIUX/body/RegularText";
import MyBlogTitle from "../UIUX/titles/blog_title/MyBlogTitle";
import parse from 'html-react-parser'
import {api} from "../../woocommerce_api";

const ProductPage = (props) => {
    const params = useParams()
    const location = useLocation()
    const [singleProduct, setSingleProduct] = useState({})


    useEffect(()=>{
        if(location.state !== null){
            const { product } = location.state
            setSingleProduct(product)
        }else{
            api.get(`products/${params.id}`)
                .then(response => {if(response.status === 200){setSingleProduct(response.data)}})
                .catch(error => {})
        }
    },[])
    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div className={classes.product_cart_main}>
                <MyLowTitle>{singleProduct.name}</MyLowTitle>
                <br/>
                <RegularText>{singleProduct.sku}</RegularText>
                <br/>
                <MyBlogTitle title={singleProduct.price}/>
                <br/>
                {singleProduct.description
                    ? <div className={classes.description}>{parse(singleProduct.description)}</div>
                    : <></>
                }

            </div>

        </div>
    );
};

export default ProductPage;