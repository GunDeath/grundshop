import React, { useState} from 'react';
import RemoAllCartItems from "./RemoAllCartItems/RemoAllCartItems";
import CartProductCard from "./CartProductCard/CartProductCard";
import TotalPriceBlock from "./TotalPriceBlock/TotalPriceBlock";

const CartItems = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const getTotal = (totalNew) => {setTotalPrice(totalNew)};

    const [selected, setSelected] = useState(false)
    const checkSelected = () => {
        setSelected(!selected)
    }
    console.log(selected)

    return (
        <div>
            <RemoAllCartItems checkSelected={checkSelected}/>
            { cart.map(product => <CartProductCard selected={selected} product={product} key={product.id} getTotal={getTotal}/>) }
            <TotalPriceBlock totalPrice={totalPrice} />
        </div>
    );
};

export default CartItems;