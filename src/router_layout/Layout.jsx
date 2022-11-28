import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from "../components/main_components/header/Header";
import Footer from "../components/main_components/footer/Footer";
import classes from './Layout.module.css'

const Layout = () => {
    const matches = useLocation();
    console.log(matches)
    return (
        <div className={classes.main}>
            <Header />
            <Outlet className={classes.content}/>
            <Footer />
        </div>
    );
};

export default Layout;