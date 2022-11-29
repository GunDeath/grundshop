import React, {useEffect, useState} from 'react';
import MyTitleFilter from "../../UIUX/titles/MyTitleFilter/MyTitleFilter";
import AttributeCart from "./AttributeCart/AttributeCart";

const ProductAttributes = ({product}) => {
    // const attributeLength = product.attributes.length;
    const [attributePages, setAttributePages] = useState(0)
    const defaultCount = 4;
    const indexOfLastAttribute = 1 * defaultCount;
    const indexOfFirstAttribute = indexOfLastAttribute - defaultCount;
    useEffect(()=>{
        if(product.attributes){
            let arrayLen = product.attributes.length || 4
            setAttributePages( arrayLen / defaultCount)

        }
    }, [product])

    const currentAttributes = product.attributes.slice(indexOfFirstAttribute, indexOfLastAttribute);

    return (
        <div>
            <MyTitleFilter>Технические характеристики {product.name}</MyTitleFilter>
            {
                [...Array(attributePages)].map((elem, index) =>
                    <AttributeCart  currentAttributes={currentAttributes} key={index}/>
                )
            }
        </div>
    );
};

export default ProductAttributes;