import React from 'react';
import classes from './MyRegularSliderArrowBlock.module.css'

const MyRegularSliderArrowBlock = ({navigationPrevRef, navigationNextRef}) => {
    return (
        <div className={classes.myRegularSliderArrowSection}>
            <div ref={navigationPrevRef}  className={classes.myRegularSliderArrowBlock}/>
            <div ref={navigationNextRef}  className={classes.myRegularSliderArrowBlock}/>
        </div>
    );
};

export default MyRegularSliderArrowBlock;