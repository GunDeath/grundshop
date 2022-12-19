import React, { useState} from 'react';
import CartProductCard from "../../../UIUX/NEW_UI/MyBlocks/CartProductCard/CartProductCard";
import TotalPriceBlock from "./TotalPriceBlock/TotalPriceBlock";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../store/hooks/useActions";
import MyRemoveAllItems from "../../../UIUX/NEW_UI/MyFunctionalComponents/MyRemoveAllItems/MyRemoveAllItems";

const CartItems = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const getTotal = (totalNew) => {setTotalPrice(totalNew)};

    const [selected, setSelected] = useState(false)
    const checkSelected = () => {
        setSelected(!selected)
    }

    const {cartRemove, cart} = useTypedSelector(state => state)
    const {removeCartList, removeItem, addCartItems, massRemoveCartItems} = useActions()
    const stateName = 'cart'

    return (
        <div>
            <MyRemoveAllItems
                checkSelected={checkSelected}
                stateName={stateName}
                stateObject={cart}
                stateRemoveObject={removeItem}
                stateMassObject={cartRemove}
                stateMassRemoveObject={removeCartList}
                stateMassAddItemsObject={addCartItems}
                stateMassRemoveAllObject={massRemoveCartItems}
            />
            { cart.map(product => <CartProductCard selected={selected} product={product} key={product.id} getTotal={getTotal}/>) }
            <TotalPriceBlock totalPrice={totalPrice} />
        </div>
    );
};

export default CartItems;