import React from 'react';
import classes from "./MyBackHome.module.css";
import {Link} from "react-router-dom";

const MyBackHome = ({children}) => {
    return (
        <Link
            to='/'
            className={classes.myNormalRegularBtn}
        >
            {children}
        </Link>
    );
};

export default MyBackHome;