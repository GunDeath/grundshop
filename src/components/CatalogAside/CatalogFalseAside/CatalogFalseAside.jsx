import React from 'react';
import classes from "./CatalogFalseAside.module.css";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import CatalogAsideLink from "./CatalogAsideLink/CatalogAsideLink";

const CatalogFalseAside = () => {
    const {categories} = useTypedSelector(state => state)
    return (
        <li className={classes.list_link}>
            { categories.map(category => category.parent === 0 ? <CatalogAsideLink category={category} key={Math.random()}/> :  <React.Fragment key={Math.random()}/> ) }
        </li>
    );
};

export default CatalogFalseAside;