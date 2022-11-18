import React from 'react';
import classes from './MyTitleBlock.module.css'

const TitleBlock = ({title}) => {
    return (
        <h2 className={classes.title_of_some_block}>
            {title}
        </h2>
    );
};

export default TitleBlock;