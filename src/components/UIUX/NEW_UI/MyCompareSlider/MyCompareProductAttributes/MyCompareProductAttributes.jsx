import React from 'react';
import MyCompareAttributesText from "../../MyText/MyCompareAttributesText/MyCompareAttributesText";

const MyCompareProductAttributes = ({sliderCounter, subarray, attributeName}) => {

    return (
        <React.Fragment>
            {
                subarray.length !== 0
                    ? (
                        subarray[sliderCounter].map(item => (
                            item.attributes.map(itemAttr => (
                                itemAttr.name === attributeName ?  <MyCompareAttributesText key={Math.random()}>{itemAttr.options[0]}</MyCompareAttributesText> : ''
                            ))
                        ))
                    ) : <></>
            }
        </React.Fragment>
    );
};

export default MyCompareProductAttributes;