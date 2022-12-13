import React, {useRef} from 'react';
import classes from './MyRegularSlider.module.css'
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import GridProductCard from "../MyBlocks/GridProductCard/GridProductCard";
import MyTitleByBlockSection from "../MyTitles/MyTitleByBlockSection/MyTitleByBlockSection";
import MyRegularSliderArrowBlock from "./MyRegularSliderArrowBlock/MyRegularSliderArrowBlock";

const MyRegularSlider = ({title, goods}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    SwiperCore.use([Autoplay])
    return (
        <div className={classes.myRegularSliderBlock}>
            <MyTitleByBlockSection>{title}</MyTitleByBlockSection>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                slidesPerGroup={4}
                speed={1200}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                loop={true}
                pagination={{clickable: true}}
                autoplay={{delay: 10000}}
            >
                {goods.map(product =>
                    <SwiperSlide key={product.id}>
                        <GridProductCard product={product}/>
                    </SwiperSlide>
                )}
                <MyRegularSliderArrowBlock navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef}/>
            </Swiper>
        </div>
    );
};

export default MyRegularSlider;