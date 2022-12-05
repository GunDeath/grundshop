import React from 'react';
import {Link} from "react-router-dom";
import classes from "./CatalogFalseAside.module.css";

const CatalogFalseAside = ({categoryList, changeActive, active}) => {
    return (
        <div className={classes.list_link}>
            {
                categoryList.map(category =>
                    <Link to={`/catalog/${category.id}`} key={category.id}
                          onClick={() => {
                              changeActive(category.id)
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