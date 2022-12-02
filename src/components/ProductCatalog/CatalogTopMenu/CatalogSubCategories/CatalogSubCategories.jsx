import React from 'react';
import classes from "./CatalogSubCategories.module.css";
import {Link} from "react-router-dom";

const CatalogSubCategories = ({subCategory}) => {
    return (
        <div>
            <ul className={classes.catalogMainTopMenu}>
                {subCategory.map(category =>
                    <li key={category.id}>
                        <Link to={`/catalog/${category.id}`} >
                            {category.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CatalogSubCategories;