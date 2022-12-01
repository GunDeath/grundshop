import React from 'react';
import parse from 'html-react-parser'
import classes from './DescriptionTab.module.css'
import RegularText from "../../../../UIUX/body/RegularText";

const DescriptionTab = ({description}) => {
    return (
        <RegularText className={classes.descriptionHeight}>
            {parse(description)}
        </RegularText>
    );
};

export default DescriptionTab;