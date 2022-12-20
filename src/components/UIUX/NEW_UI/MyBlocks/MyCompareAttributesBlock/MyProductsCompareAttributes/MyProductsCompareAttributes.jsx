import React from 'react';
import classes from './MyProductsCompareAttributes.module.css'
import MyCompareProductAttributes from "../../../MyCompareSlider/MyCompareProductAttributes/MyCompareProductAttributes";
import {useTypedSelector} from "../../../../../../store/hooks/useTypedSelector";
import MyCompareAttributesText from "../../../MyText/MyCompareAttributesText/MyCompareAttributesText";

const MyProductsCompareAttributes = ({sliderCounter, subarray}) => {
    const {attributesReducer} = useTypedSelector(state => state)

    return (
        <div className={classes.attributesBlock}>
            {
                attributesReducer.map(attr =>(
                    <div  key={Math.random()} className={classes.myProductsCompareAttributesBlock}>
                        <div className={classes.attributeDefaultTitle}>
                            <MyCompareAttributesText>{attr.name}</MyCompareAttributesText>
                        </div>
                        <MyCompareProductAttributes sliderCounter={sliderCounter} attributeName={attr.name} subarray={subarray} />
                    </div>
                ))
            }
        </div>
    );
};

export default MyProductsCompareAttributes;