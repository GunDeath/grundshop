import React from 'react';
import classes from './ProductTitle.module.css'
import MyBlogTitle from "../../../UIUX/titles/blog_title/MyBlogTitle";

const ProductTitle = ({title}) => {
    return (
        <div className={classes.titleBlock}>
            <MyBlogTitle title={title}/>
        </div>
    );
};

export default ProductTitle;