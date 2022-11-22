import React from 'react';
import {useLocation} from "react-router-dom";

const ProductPage = (props) => {
    const location = useLocation()
    const { product } = location.state
    console.log(product)
    return (
        <div>
            {product.name}
        </div>
    );
};

export default ProductPage;