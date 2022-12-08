import React from 'react';
import classes from './MainLayout.module.css';
import {Outlet} from 'react-router-dom';
import Header from "../../components/main_components/header/Header";
import Footer from "../../components/main_components/footer/Footer";
import MyBreadCrumbs from "../../components/UIUX/NEW_UI/MyBreadCrumbs/MyBreadCrumbs";

const MainLayout = () => {
    return (
        <div className={classes.mainLayout}>
            <Header />
            <MyBreadCrumbs />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;