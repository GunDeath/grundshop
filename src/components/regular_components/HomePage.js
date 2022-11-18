import React from 'react';
import classes from './MyHomePage.module.css'
import MainPostComponent from "./posts_component/main_post_component/MainPostComponent";
import TopSlider from "./posts_component/main_top_slider/TopSlider";
import CategoriesList from "./categories_list/CategoriesList";
import RegularSlider from "../slider_react/regular_slider/RegularSlider";

const HomePage = () => {

    return (
        <div>
            <TopSlider />
            <div className={classes.main_container}>
                <CategoriesList />
                <RegularSlider />
                <MainPostComponent />
            </div>
        </div>
    );
};

export default HomePage;