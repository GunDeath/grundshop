import React from 'react';
import {Link, useParams} from "react-router-dom";
import classes from "./CatalogFalseAside.module.css";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";

const CatalogFalseAside = ({changeActive, active}) => {
    const {categories} = useTypedSelector(state => state)
    return (
        <div className={classes.list_link}>
            {
                categories.map(category =>
                    <Link to={`/catalog/${category.id}`} key={Math.random()}
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