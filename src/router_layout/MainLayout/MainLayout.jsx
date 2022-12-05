import React from 'react';
import classes from './MainLayout.module.css';
import {Outlet} from 'react-router-dom';
import Header from "../../components/main_components/header/Header";
import Footer from "../../components/main_components/footer/Footer";

const MainLayout = () => {
    return (
        <div className={classes.mainLayout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;