import React, {useEffect, useState} from 'react';
import classes from './CartProductCard.module.css'
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../../store/hooks/useActions";
import ProductCartCheckbox from "./ProductCartCheckbox/ProductCartCheckbox";
import ProductCartItemImg from "./ProductCartItemImg/ProductCartItemImg";
import ProductCartItemInfo from "./ProductCartItemInfo/ProductCartItemInfo";
import ProductCartItemPrice from "./ProductCartItemPrice/ProductCartItemPrice";
import ProductCartItemQtn from "./ProductCartItemQtn/ProductCartItemQtn";

const CartProductCard = ({product, updateTotalPrice}) => {
    const {cart} = useTypedSelector(state => state)
    const singleProduct = cart.find(p=> p.id === product.id)

    const [counter, setCounter] = useState(singleProduct.quantity || 1)
    const [newPrice, setNewPrice] =useState(0)
    const counterIncrease = () => setCounter((prevState => prevState + 1))
    const counterDecrease = () => setCounter((prevState => prevState - 1))
    const {updateItem} = useActions()


    useEffect(()=>{
        setNewPrice(product.price * counter)
        const newProduct = {id: product.id, quantity: counter}
        console.log(newPrice)
        updateItem(newProduct)
    }, [counter])

    console.log(singleProduct.newPrice)

    useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])
    useEffect(()=>{
        const newProduct = {id: product.id, newPrice: newPrice || product.price}
        updateItem(newProduct)
    }, [newPrice])

    return (
        <div className={classes.productCard}>
            <ProductCartCheckbox />
            <ProductCartItemImg productImg={product.images[0]} />
            <ProductCartItemInfo product={product} />
            <ProductCartItemPrice newPrice={singleProduct.newPrice} />
            <ProductCartItemQtn product={product} counter={counter} counterDecrease={counterDecrease} counterIncrease={counterIncrease}/>
        </div>
    );
};

export default CartProductCard;