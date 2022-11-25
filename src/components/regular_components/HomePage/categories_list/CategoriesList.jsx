import React from 'react';
import classes from './MyCategoriesList.module.css'
import {useCategories} from "../../../../customHooks";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoriesList = () => {
    let categories = useCategories();
    return (
        <div className={classes.categories_list_block}>
            <ul className={classes.categories_list}>
                {categories.slice(0).reverse().map(category =>
                    <CategoryItem category={category} key={category.id}/>
                )}
            </ul>
        </div>
    );
};

export default CategoriesList;