import React from 'react';
import classes from './CartItems.module.css'
import RemoAllCartItems from "./RemoAllCartItems/RemoAllCartItems";
import CartProductCard from "./CartProductCard/CartProductCard";

const CartItems = ({cart}) => {
    return (
        <div>
            <RemoAllCartItems />
            {
                cart.map(product =>
                    <CartProductCard product={product} key={product.id}/>
                )
            }
        </div>
    );
};

export default CartItems;