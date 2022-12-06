import React from 'react';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import HorizontalProductCard from "../../../UIUX/NEW_UI/MyBlocks/HorizontalProductCart/HorizontalProductCard";

const FullWishlist = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <>
            { wishlist.map(product => <HorizontalProductCard product={product} /> )}
        </>
    );
};

export default FullWishlist;