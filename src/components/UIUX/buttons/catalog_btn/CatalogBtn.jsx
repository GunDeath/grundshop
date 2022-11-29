import React, {useEffect, useState} from 'react';
import classes from './CatalogBtn.module.css'

const CatalogBtn = ({product, quantity}) => {
    const [singleProduct, setProduct] = useState({
        id: product.id,
        name: product.name,
        price: product.price,
        sale_price: product.sale_price,
        img: product.images ? product.images[0].src : ''
    })
    const [cartArray, setCartArray] = useState([])

    useEffect(()=>{
        // localStorage.setItem(`cart`, JSON.stringify(cartArray))
    }, [cartArray])

    return (
        <div onClick={()=> {
            setCartArray([...cartArray, singleProduct])
        }} className={classes.product_cart__button}>
            В корзину
        </div>
    );
};

export default CatalogBtn;