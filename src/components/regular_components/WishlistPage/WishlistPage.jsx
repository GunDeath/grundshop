import React from 'react';
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import FullWishlist from "./FullWishlist/FullWishlist";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";

const WishlistPage = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <> { wishlist.length !== 0 ? <FullWishlist /> : <EmptyWishlist />} </>
    );
};

export default WishlistPage;