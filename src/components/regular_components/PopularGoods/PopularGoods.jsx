import React from 'react';
import {usePopularGoods} from "../../../customHooks";
import {titleArray} from "../../../dataArrays";
import MyRegularSlider from "../../UIUX/NEW_UI/MyRegularSlider/MyRegularSlider";

const PopularGoods = () => {
    const products = usePopularGoods()
    return (
        <React.Fragment>
            <MyRegularSlider title={titleArray[0].title} goods={products}/>
        </React.Fragment>
    );
};

export default PopularGoods;