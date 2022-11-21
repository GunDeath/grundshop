import React from 'react';
import classes from './MyBlogTitle.module.css'

const MyBlogTitle = ({title}) => {
    return (
        <h3 className={classes.title_styles}>
            {title}
        </h3>
    );
};

export default MyBlogTitle;