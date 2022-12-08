import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import classes from './ProductPage.module.css'
import {api} from "../../woocommerce_api";
import ProductInfoBlock from "./ProductInfoBlock/ProductInfoBlock";
import ProductImg from "./ImageBlock/ProductImg";
import ProductAttributes from "./ProductAttributes/ProductAttributes";
import ProductTabs from "./ProductTabs/ProductTabs";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";

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
    /*quantity counter*/
    const [counter, setCounter] = useState(1)
    const {cart} = useTypedSelector(state => state)
    const [isExistsInCart, setIsExistsInCart] = useState(true);

    useEffect(() => {
        if (location.state !== null) {
            const {product} = location.state
            setSingleProduct(product)
            setRelatedID(product.related_ids)
            setProductPrice(product.price)
            setIsExistsInCart(cart.some(p => p.id === product.id))
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
        if (!loading) {
            api.get(`products?include=${relatedID[0]}, ${relatedID[1]}`)
                .then(response => {
                    if (response.status === 200) {
                        setRelated(response.data)
                    }
                })
                .catch(error => {
                })
        }
    }, [relatedID])



    useEffect(() => {
        setQuantity(counter)
        console.log(isExistsInCart)
        console.log(cart)
        console.log(cart.some(p => p.id === singleProduct.id))
    }, [counter])

    const countIncrease = () => {
        setCounter(counter + 1)
    }
    const countDecrease = () => {
        setCounter(counter - 1)
    }

    /*change price if we want more one product*/
    let totalPrice = productPrice * quantity;


    return (
        <>
            <div className={classes.productMainWrapper}>
                <ProductImg singleProduct={singleProduct.images}
                            firstImg={singleProduct.images[imgIndex] || {src: ''}}/>
                <ProductInfoBlock
                    singleProduct={singleProduct}
                    price={totalPrice}
                    countIncrease={countIncrease}
                    countDecrease={countDecrease}
                    isExistsInCart={isExistsInCart}
                    counter={counter}
                    related={related}
                />
            </div>
            <ProductTabs product={singleProduct}/>
            <div>
                <ProductAttributes product={singleProduct}/>
            </div>
        </>
    );
};

export default ProductPage;