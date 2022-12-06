import React from 'react';
import classes from './MyCartProductTitle.module.css'
import {Link} from "react-router-dom";

const MyCartProductTitle = ({product}) => {
    return (
        <Link to={product.slug} state={{product}} className={classes.titleStyles}>
            {product.name}
        </Link>
    );
};

export default MyCartProductTitle;