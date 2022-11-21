import React, {useRef} from 'react';
import classes from './MySimpleSlider.module.css';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'

import ProductCart from "../../../catalog_of_products/catalog_product_item/ProductCart";
import TitleBlock from "../../titles/block_title/TitleBlock";

const SimpleSlider = ({title, goods}) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    SwiperCore.use([Autoplay])
    return (
        <div className={classes.regular_slider_block}>
            <TitleBlock title={title}/>
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
                        <ProductCart product={product}/>
                    </SwiperSlide>
                )}
                <div className={classes.slider_arrow_section}>
                    <div ref={navigationPrevRef} className={classes.slider_arrow_block} />
                    <div ref={navigationNextRef} className={classes.slider_arrow_block}/>
                </div>
            </Swiper>
        </div>
    );
};

export default SimpleSlider;