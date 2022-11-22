import { Swiper, SwiperSlide } from "swiper/react";
import classes from './MyTopSlider.module.css'
import "swiper/swiper-bundle.min.css";

import 'swiper/swiper.min.css'

import SwiperCore, {Autoplay, Pagination} from 'swiper';
import {usePostCategories} from "../../../../usePosts";
import BannerBtn from "../../../UIUX/buttons/banner_btn/BannerBtn";

const SliderReact = () => {
    const postsMain = usePostCategories(33)
    SwiperCore.use([Autoplay])

    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={10}
            mousewheel={true}
            slidesPerView={1}
            loop={true}
            direction="vertical"
            pagination={{ clickable: true }}
            autoplay={{delay: 5000}}
        >
            {postsMain.map(post =>
                <SwiperSlide key={post.id}>
                    <div className={classes.slider_main_grid_block}>
                        <div className={classes.slider_text_block}>
                            <div>
                                <p className={classes.slide_title}>
                                    {post.title.rendered}
                                    <span className={classes.slider_span_title}>{post.acf.second_part_of_title}</span>
                                </p>
                            </div>
                            <div className={classes.sub_text_slide}>
                                {post.content.rendered}
                            </div>
                            <div className={classes.btn_banner_block}>
                                <BannerBtn link={post.acf.link_on_main_banner_button}/>
                            </div>
                        </div>
                        <div className={classes.slider_img_block}>
                            <img src={post.fimg_url} alt="" className={classes.slide_img}/>
                        </div>
                    </div>
                </SwiperSlide>
            )}
            ...
        </Swiper>
    );
};

export default SliderReact;