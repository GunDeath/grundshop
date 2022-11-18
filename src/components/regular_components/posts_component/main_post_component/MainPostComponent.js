import React from 'react';
import classes from './MyMainPostComponent.module.css'
import {usePosts} from "../usePosts";
import BannerBtn from "../../../UIUX/buttons/banner_btn/BannerBtn";

const MainPostComponent = () => {
    const mainPost = usePosts(671)
    return (
        <>
            {mainPost.map(post =>
                <div key={post.id} className={classes.main_page__top_banner}>
                    <div className={classes.main_page__top_banner__left_part}>
                        <h2 className={classes.top_banner__left_part__title}>
                            {post.title.rendered}
                        </h2>
                        <p className={classes.top_banner__left_part__text}>
                            {post.content.rendered}
                        </p>
                        {post.acf.second_abstract_of_main_post === ""
                            ? ""
                            : <p
                                className={classes.top_banner__left_part__text}
                            >
                                {post.acf.second_abstract_of_main_post}
                            </p>
                        }
                    </div>
                    <div className={classes.main_page__top_banner__right_part}>
                        <img src={post.fimg_url} alt="" className={classes.top_banner__img}/>
                        <div className={classes.top_banner__sub_text__block}>
                            <p className={classes.top_banner__sub_text_title}>
                                {post.acf.sub_title_of_block}
                            </p>
                            <p className={classes.top_banner__sub_text__text}>
                                {post.acf.sub_text_of_banner_block}
                            </p>
                            <BannerBtn link={post.acf.banner_post_link}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MainPostComponent;