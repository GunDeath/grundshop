import React from 'react';
import {Link} from "react-router-dom";
import classes from "./CatalogFalseAside.module.css";

const CatalogFalseAside = ({categoryList, changeActive, active, catalogLoader, loading}) => {
    return (
        <div className={classes.list_link}>
            {
                categoryList.map(category =>
                    <Link to={`/catalog/${category.id}`} key={category.id}
                          onClick={() => {
                              changeActive(category.id)
                              // catalogLoader(false)
                          }}
                          className={
                              category.id === active
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