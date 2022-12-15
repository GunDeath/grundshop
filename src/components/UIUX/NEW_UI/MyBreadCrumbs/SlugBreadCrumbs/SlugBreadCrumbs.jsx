import React from 'react';
import classes from './SlugBreadCrumbs.module.css'
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const SlugBreadCrumbs = ({slug}) => {
    const {goodsList, singleCategory} = useTypedSelector(state => state)
    const singleProduct = goodsList.filter(prod => prod.slug === slug)
    return (
        <div className={classes.breadCrumbsLayout}>
            <NavLink to='/'>Главная</NavLink>
            <div>></div>
            <NavLink to='/catalog'>Каталог</NavLink>
            <div>></div>
            <NavLink to={`/catalog/${singleCategory[0].slug}`}>{singleCategory[0].name}</NavLink>
            {
                slug
                    ? (
                        <>
                            <div>></div>
                            <NavLink to={`/catalog/${slug}`}>{singleProduct[0].name}</NavLink>
                        </>
                    ) : <></>
            }
        </div>
    );
};

export default SlugBreadCrumbs;