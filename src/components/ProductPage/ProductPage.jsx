import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import CatalogAside from "../CatalogAside/CatalogAside";
import {api} from "../../woocommerce_api";
import ProductInfoBlock from "./ProductInfoBlock/ProductInfoBlock";
import ProductImg from "./ImageBlock/ProductImg";

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


    useEffect(() => {
        if (location.state !== null) {
            const {product} = location.state
            setSingleProduct(product)
            setRelatedID(product.upsell_ids)
            setProductPrice(product.price)
        } else {
            api.get(`products/${params.id}`)
                .then(response => {
                    if (response.status === 200) {
                        setSingleProduct(response.data)
                        setRelatedID(response.data.upsell_ids)
                        setProductPrice(response.data.price)
                    }
                })
                .catch(error => {
                })
        }
    }, [])

    useEffect(() => {
        api.get(`products?include=${relatedID[0]}, ${relatedID[1]}`)
            .then(response => {
                if (response.status === 200) {
                    setRelated(response.data)
                }
            })
            .catch(error => {
            })
    }, [relatedID])


    const getQuantity = (quantity) => {
        setQuantity(quantity);
    }
    let totalPrice = productPrice * quantity;
    return (
        <div className={classes.product_main__layout}>
            <CatalogAside/>
            <div className={classes.product_cart_main}>
                <div className={classes.productMainWrapper}>
                    <ProductImg singleProduct={singleProduct.images} firstImg={singleProduct.images[0] || {src: ''}}/>
                    <ProductInfoBlock
                        singleProduct={singleProduct}
                        price={totalPrice}
                        getQuantity={getQuantity}
                    />
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