import React, {useEffect, useState} from 'react';
import classes from "./CatalogSubCategories.module.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {subCategoryFunction} from "../../../../customFunctions";

const CatalogSubCategories = () => {
    const {singleCategory} = useTypedSelector(state => state);
    const [subCategory, setSubCategory] = useState([]);
    useEffect(()=>{
        setSubCategory([])
        if(singleCategory.length !== 0){ subCategoryFunction(singleCategory[0].id, setSubCategory) }
    }, [singleCategory]);

    return (
        <div className={subCategory.length !== 0 ? classes.mb : ''}>
            <ul className={classes.catalogMainTopMenu}>
                {
                    subCategory.length !== 0
                    ?
                        subCategory.map(category =>
                            <li key={category.id}>
                                <Link to={`/catalog/${category.id}`} >
                                    {category.name}
                                </Link>
                            </li>
                        )
                    :
                        <></>
                }
            </ul>
        </div>
    );
};

export default CatalogSubCategories;