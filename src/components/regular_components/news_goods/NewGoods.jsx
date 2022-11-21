import React from 'react';
import {titleArray} from "../../../dataArrays";
import SimpleSlider from "../../UIUX/slider/regular_slider/SimpleSlider";
import {useNewGoods} from "../../../customHooks";

const NewGoods = () => {
    const products = useNewGoods()
    return (
        <div>
            <SimpleSlider title={titleArray[0].title} goods={products}/>
        </div>
    );
};

export default NewGoods;