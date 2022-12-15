import React from 'react';
import {Link} from "react-router-dom";
import classes from "./CatalogFalseAside.module.css";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";

const CatalogFalseAside = () => {
    const {categories, singleCategory} = useTypedSelector(state => state)
    return (
        <div className={classes.list_link}>
            {
                categories.map(category =>
                    <Link to={`/catalog/${category.slug}`}  state={{category}} key={Math.random()}
                          className={
                              category.id === singleCategory[0].id
                                  ? classes.active_link
                                  : classes.link
                          }
                    >
                        {category.name}
                    </Link>
                )
            }
        </div>
    );
};

export default CatalogFalseAside;