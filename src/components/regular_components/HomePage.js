import React from 'react';
import classes from './MyHomePage.module.css'
import MainPostComponent from "./posts_component/main_post_component/MainPostComponent";
import TopSlider from "./posts_component/main_top_slider/TopSlider";
import CategoriesList from "./categories_list/CategoriesList";
import MainAboutBlock from "../main_block_banner/MainAboutBlock";
import NewGoods from "./news_goods/NewGoods";
import SimpleMap from "./map_block/MapBlock";
import BottomPosts from "./posts_component/bottom_posts/BottomPosts";
import PopularGoods from "./popular_goods/PopularGoods";

const HomePage = () => {

    return (
        <div>
            <TopSlider />
            <div className={classes.main_container}>
                <CategoriesList />
                <PopularGoods />
                <MainPostComponent />
                <MainAboutBlock />
                <NewGoods />
            </div>
            <SimpleMap />
            <div className={classes.main_container}>
                <BottomPosts />
            </div>
        </div>
    );
};

export default HomePage;