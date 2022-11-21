import React from 'react';
import {usePopularGoods} from "../../../customHooks";
import SimpleSlider from "../../UIUX/slider/regular_slider/SimpleSlider";
import {titleArray} from "../../../dataArrays";

const PopularGoods = () => {
    const products = usePopularGoods()
    return (
        <div>
            <SimpleSlider title={titleArray[2].title} goods={products}/>
        </div>
    );
};

export default PopularGoods;