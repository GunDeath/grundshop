import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser'
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import {api} from "../../woocommerce_api";
import ProductInfoBlock from "./ProductInfoBlock/ProductInfoBlock";
import ProductImg from "./ImageBlock/ProductImg";
import DescriptionTab from "./ProductTabs/DescriptionTab/DescriptionTab";
import MyNormalRegularBtn from "../UIUX/buttons/MyNormalRegularBtn/MyNormalRegularBtn";

const ProductPage = (props) => {
    /*get product id by url*/
    const params = useParams();
    /*get product object by location of prev page*/
    const location = useLocation();
    /*state of prev product*/
    const [singleProduct, setSingleProduct] = useState({attributes: [], images: []});
    /*relation products id array*/
    const [relatedID, setRelatedID] = useState([]);
    /*array of related products*/
    const [related, setRelated] = useState([]);
    /*quantity variable*/
    const [quantity, setQuantity] = useState(1);
    /*product price*/
    const [productPrice, setProductPrice] = useState(10000);
    /*loading*/
    const [loading, setLoading] = useState(true)
    /*main img*/
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
        if (location.state !== null) {
            const {product} = location.state
            setSingleProduct(product)
            setRelatedID(product.related_ids)
            setProductPrice(product.price)
            setLoading(false)
        } else {
            api.get(`products?slug=${params.slug}`)
                .then(response => {
                    if (response.status === 200) {
                        setSingleProduct(response.data[0])
                        setRelatedID(response.data[0].related_ids)
                        setProductPrice(response.data[0].price)
                        setLoading(false)
                    }
                })
                .catch(error => {
                })
        }
    }, [params.slug])

    useEffect(() => {
        if(!loading){
            api.get(`products?include=${relatedID[0]}, ${relatedID[1]}`)
                .then(response => {
                    if (response.status === 200) {
                        setRelated(response.data)
                        console.log(related)
                    }
                })
                .catch(error => {
                })
        }
    }, [relatedID])

    /*get quantity counter*/
    const getQuantity = (quantity) => {
        setQuantity(quantity);
    }

    /*change price if we want more one product*/
    let totalPrice = productPrice * quantity;

    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div className={classes.product_cart_main}>
                <div className={classes.productMainWrapper}>
                    <ProductImg singleProduct={singleProduct.images} firstImg={singleProduct.images[imgIndex] || {src: ''}}/>
                    <ProductInfoBlock
                        singleProduct={singleProduct}
                        price={totalPrice}
                        getQuantity={getQuantity}
                        related={related}
                    />
                </div>
                <div>
                    <div className={classes.productTabsBlock}>
                        <MyNormalRegularBtn>Описание</MyNormalRegularBtn>
                        <MyNormalRegularBtn>Документация</MyNormalRegularBtn>
                    </div>
                    {
                        singleProduct.description
                        ? <DescriptionTab description={singleProduct.description} />
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
        ;
};

export default ProductPage;