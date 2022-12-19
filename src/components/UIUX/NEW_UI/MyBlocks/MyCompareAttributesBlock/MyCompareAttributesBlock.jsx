import React, {useEffect, useState} from 'react';
import classes from './MyCompareAttributesBlock.module.css'
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import MyCompareSlider from "../../MyCompareSlider/MyCompareSlider";
import {useActions} from "../../../../../store/hooks/useActions";

const MyCompareAttributesBlock = () => {
    const {compare, attributesReducer} = useTypedSelector(state => state)
    const {addAttributes} = useActions()

    useEffect(() => {
        if(compare.length !== 0){
            compare.map(item => {
                addAttributes([...item.attributes])
            })
        }
    }, [compare])

    console.log(attributesReducer)

    return (
        <>
            {
                compare.length > 1
                    ? (
                        <div className={classes.myCompareAttributesBlock}>
                            <div className={classes.MyCompareAttributesBlockTopSection}>
                                <div className={classes.compareBlockTitle}>
                                    Сравниваемые товары
                                </div>
                                <div className={classes.sliderBlock}>
                                    <MyCompareSlider />
                                </div>
                            </div>
                            <div className={classes.attributesBlock}>
                                {
                                    attributesReducer.map(attr =>
                                        <>
                                            <div key={Math.random()}>{attr.name}</div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ) : (
                        <></>
                    )
            }
        </>
    );
};

export default MyCompareAttributesBlock;