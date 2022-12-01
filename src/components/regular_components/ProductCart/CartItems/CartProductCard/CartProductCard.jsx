import React, {useEffect, useState} from 'react';
import classes from './CartProductCard.module.css'
import Checkbox from "@mui/material/Checkbox";
import default_img from '../../../../../assets/img/default_img.png'
import {Link} from "react-router-dom";
import MyQuantity from "../../../../UIUX/quantity/MyQuantity";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CartProductCard = ({product}) => {
    const [counter, setCounter] = useState(product.quantity)
    const [newPrice, setNewPrice] =useState(15000)
    const counterIncrease = () => setCounter((prevState => prevState + 1))
    const counterDecrease = () => setCounter((prevState => prevState - 1))
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const {cart} = useTypedSelector(state => state)
    const changeCart = (cart, id) => {
        const newProduct = cart.find(p=> p.id === id)
        console.log(newProduct)
    }

    useEffect(()=>{
        setNewPrice(product.price * counter)
        changeCart(cart, product.id)
    }, [counter])

    return (
        <div className={classes.productCard}>
            <div>
                <Checkbox {...label} />
            </div>
            <div className={classes.productImgBlock}>
                <img src={product.images[0].src || default_img} alt="" className={classes.img}/>
            </div>
            <div className={classes.productInfoBlock}>
                <Link to={`/catalog/product/${product.slug}`} state={{product}} className={classes.productTitle}>
                    {product.name}
                </Link>
                <div className={classes.skuText}>
                    Артикул: {product.sku}
                </div>
                <div className={classes.addingBtnBlock}>
                    <div className={classes.addingBtn}>В избранное</div>
                    <div className={classes.addingBtn}>Удалить</div>
                </div>
            </div>
            <div className={classes.productPriceBlock}>
                {Math.round(newPrice)} руб.
            </div>
            <div>
                <MyQuantity counter={counter} countIncrease={counterIncrease} countDecrease={counterDecrease} />
            </div>
        </div>
    );
};

export default CartProductCard;