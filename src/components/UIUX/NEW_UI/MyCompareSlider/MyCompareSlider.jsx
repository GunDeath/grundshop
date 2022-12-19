import React from 'react';
import classes from './MyCompareSlider.module.css'
import {Navigation} from "swiper";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import MySmallProductCardSlider from "../MyBlocks/MySmallProductCardSlider/MySmallProductCardSlider";

const MyCompareSlider = () => {
    const {compare} = useTypedSelector(state => state)
    return (
        <div className={classes.myRegularSliderBlock}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
            >
                {compare.map(product =>
                    <SwiperSlide key={product.id}>
                        <MySmallProductCardSlider product={product}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default MyCompareSlider;