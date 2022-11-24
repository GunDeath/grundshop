import React from 'react';
import classes from './AttributeBlock.module.css'

const AttributeBlock = ({singleProduct}) => {
    return (
        <div className={classes.attributesBlock}>
            <div className={classes.singleAttribute}>
                <div className={classes.attributesText}>Артикул:</div>
                <div className={classes.attributesText}>{singleProduct.sku}</div>
            </div>
            {singleProduct.attributes.map(attr =>
                <div className={classes.singleAttribute} key={attr.id}>
                    <div className={classes.attributesText}>{attr.name}</div>
                    <div className={classes.attributesText}>{attr.options[0]}</div>
                </div>
            )}
        </div>
    );
};

export default AttributeBlock;