import React, {useState} from 'react';
import classes from "../../ProductPage.module.css";
import DescriptionTab from "../DescriptionTab/DescriptionTab";
import MyRegularSmallBtn from "../../../UIUX/buttons/MyRegularSmallBtn/MyRegularSmallBtn";

const DescriptionBlock = ({product_description}) => {
    const [shortDescr, setShotDescr] = useState(true)
    const getShortDescription = () => {setShotDescr(!shortDescr)}
    return (
        <div>
            <div className={
                shortDescr
                    ?  classes.descriptionHeight
                    : ''
            }>
                <DescriptionTab description={product_description}/>
            </div>
            <div className={classes.readMore}>
                <MyRegularSmallBtn change={getShortDescription}>Читать еще</MyRegularSmallBtn>
            </div>
        </div>
    );
};

export default DescriptionBlock;