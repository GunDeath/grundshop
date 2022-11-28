import React from 'react';
import classes from "./CatalogSubCategories.module.css";

const CatalogSubCategories = ({subCategory}) => {
    return (
        <div>
            <ul className={classes.catalogMainTopMenu}>
                {subCategory.map(category =>
                    <li key={category.id}>{category.name}</li>
                )}
            </ul>
        </div>
    );
};

export default CatalogSubCategories;