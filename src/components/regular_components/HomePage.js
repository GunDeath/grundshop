import React from 'react';
import classes from './MyHomePage.module.css'
import MainPostComponent from "./posts_component/MainPostComponent";

const HomePage = () => {

    return (
        <div className={classes.main_container}>
            <MainPostComponent />
        </div>
    );
};

export default HomePage;