import React from 'react';
import classes from './HorizontalProductCardAttributes.module.css'
import MyAttributeText from "../../../../MyText/MyAttributeText/MyAttributeText";

const HorizontalProductCardAttributes = ({attributes}) => {
    return (
        <div className={classes.attributesBlock}>
            {
                attributes.map(attribute =>
                    <div key={Math.random()} className={classes.attributeRowLayout}>
                        <MyAttributeText> {attribute.name} </MyAttributeText>
                        <MyAttributeText> {attribute.options[0]} </MyAttributeText>
                    </div>
                )
            }
        </div>
    );
};

export default HorizontalProductCardAttributes;