import React from 'react';
import classes from './CategoryItem.module.css'
import {Link} from "react-router-dom";

const CategoryItem = ({category}) => {
    return (
        <li>
            <Link to={`catalog/${category.slug}`} state={{category}} className={classes.category_list_single_item}>
                <div className={classes.category_item_img_block}>
                    <img src={category.image.src} alt="" className={classes.category_img}/>
                </div>
                <div className={classes.category_title_block}>
                    <span className={classes.category_title}>{category.name}</span>
                </div>
            </Link>
        </li>
    );
};

export default CategoryItem;