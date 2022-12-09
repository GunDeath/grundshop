import React from 'react';
import {useParams} from "react-router-dom";
import SimpleBreadCrumbs from "./SimpleBreadCrumbs/SimpleBreadCrumbs";
import SlugBreadCrumbs from "./SlugBreadCrumbs/SlugBreadCrumbs";

const MyBreadCrumbs = ({url, title}) => {
    const params = useParams()
    return (
        <React.Fragment>
            { params.category_slug ? <SlugBreadCrumbs catSlug={params.category_slug} slug={params.slug}/> : <SimpleBreadCrumbs url={url} title={title}/> }
        </React.Fragment>
    );
};

export default MyBreadCrumbs;