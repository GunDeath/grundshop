import React, {useEffect, useState} from 'react';
import MyTitleFilter from "../../UIUX/titles/MyTitleFilter/MyTitleFilter";
import AttributeCart from "./AttributeCart/AttributeCart";
import classes from './ProductAttributes.module.css'

const ProductAttributes = ({product}) => {
    // const attributeLength = product.attributes.length;
    const [attributePages, setAttributePages] = useState(0)
    const defaultCount = 4;
    useEffect(()=>{
        if(product.attributes){
            let arrayLen = product.attributes.length || 4
            setAttributePages( Math.round(arrayLen / defaultCount))
        }
    }, [product])

    return (
        <div>
            <MyTitleFilter>Технические характеристики {product.name}</MyTitleFilter>
            <div className={classes.attributeBlock}>
                {
                    [...Array(attributePages)].map((elem, index) =>
                        <AttributeCart defaultCount={defaultCount} index={index} attributes={product.attributes} key={index}/>
                    )
                }
            </div>
        </div>
    );
};

export default ProductAttributes;