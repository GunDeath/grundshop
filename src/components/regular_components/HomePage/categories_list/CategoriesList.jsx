import React from 'react';
import classes from './MyCategoriesList.module.css'
import {useCategories} from "../../../../customHooks";

const CategoriesList = () => {
    let categories = useCategories();
    return (
        <div className={classes.categories_list_block}>
            <ul className={classes.categories_list}>
                {categories.map(category =>
                    <li className={classes.category_list_single_item} key={category.id}>
                        <div className={classes.category_item_img_block}>
                            <img src={category.image.src} alt="" className={classes.category_img}/>
                        </div>
                        <div className={classes.category_title_block}>
                            <span className={classes.category_title}>{category.name}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CategoriesList;