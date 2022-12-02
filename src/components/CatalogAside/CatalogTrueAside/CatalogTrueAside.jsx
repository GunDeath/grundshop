import React from 'react';
import classes from "./CatalogTrueAside.module.css";

const CatalogTrueAside = ({change, categoryList, changeActive, catalogLoader, active}) => {
    return (
        <ul className={classes.list_link}>
            {categoryList.map(category =>
                <li
                    onClick={()=>{
                        change(category.id)
                        changeActive(category.id)
                        catalogLoader(true)
                    }}
                    key={category.id}
                    className={
                        category.id === active
                            ? classes.active_link
                            : classes.link
                    }
                >
                    {category.name}
                </li>
            )}
        </ul>
    );
};

export default CatalogTrueAside;