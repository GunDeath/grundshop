import React from 'react';
import classes from './SlugBreadCrumbs.module.css'
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const SlugBreadCrumbs = ({catSlug, slug}) => {
    const {categories, goodsList} = useTypedSelector(state => state)
    const singleCategory = categories.filter(cat => cat.slug === catSlug)
    const singleProduct = goodsList.filter(prod => prod.slug === slug)
    return (
        <div className={classes.breadCrumbsLayout}>
            <NavLink to='/'>Главная</NavLink>
            <div>></div>
            <NavLink to='/catalog'>Каталог</NavLink>
            <div>></div>
            <NavLink to={`/catalog/${catSlug}`}>{singleCategory[0].name}</NavLink>
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