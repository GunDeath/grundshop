import React from 'react';
import {titleArray} from "../../../../dataArrays";
import {useNewGoods} from "../../../../customHooks";
import MyRegularSlider from "../../../UIUX/NEW_UI/MyRegularSlider/MyRegularSlider";

const NewGoods = () => {
    const products = useNewGoods()
    return (
        <div>
            <MyRegularSlider title={titleArray[0].title} goods={products}/>
        </div>
    );
};

export default NewGoods;