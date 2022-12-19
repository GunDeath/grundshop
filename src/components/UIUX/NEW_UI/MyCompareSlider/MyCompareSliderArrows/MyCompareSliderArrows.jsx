import React from 'react';
import classes from './MyCompareSliderArrows.module.css'

const MyCompareSliderArrows = ({navigationPrevRef, navigationNextRef}) => {
    return (
        <div className={classes.myCompareSliderArrows}>
            <div ref={navigationPrevRef}  className={classes.myCompareSliderArrowsBlock}/>
            <div ref={navigationNextRef}  className={classes.myCompareSliderArrowsBlock}/>
        </div>
    );
};

export default MyCompareSliderArrows;