import React from 'react';
import classes from './CatalogAsideLink.module.css'
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";

const CatalogAsideLink = ({category}) => {
    const {singleCategory} = useTypedSelector(state => state)
    return (
        <Link to={`/catalog/${category.slug}`} state={{category}} className = {category.id === singleCategory[0].id ? classes.active_link : classes.link}>
            {category.name}
        </Link>
    );
};

export default CatalogAsideLink;