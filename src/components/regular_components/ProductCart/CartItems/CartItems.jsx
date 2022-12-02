import React, {useState} from 'react';
import classes from './CartItems.module.css'
import RemoAllCartItems from "./RemoAllCartItems/RemoAllCartItems";
import CartProductCard from "./CartProductCard/CartProductCard";
import TotalPriceBlock from "./TotalPriceBlock/TotalPriceBlock";

const CartItems = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const updateTotalPrice = (price) => setTotalPrice( totalPrice + price)

    return (
        <div>
            <RemoAllCartItems />
            {
                cart.map(product =>
                    <CartProductCard updateTotalPrice={updateTotalPrice} product={product} key={product.id}/>
                )
            }
            <TotalPriceBlock totalPrice={totalPrice} />
        </div>
    );
};

export default CartItems;