import React from 'react';
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import FullWishlist from "./FullWishlist/FullWishlist";
import MyEmptyComponent from "../../UIUX/NEW_UI/MyBlocks/MyEmptyComponent/MyEmptyComponent";

const WishlistPage = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <> { wishlist.length !== 0 ? <FullWishlist /> : <MyEmptyComponent pageTitle='Список избранного пуст' />} </>
    );
};

export default WishlistPage;