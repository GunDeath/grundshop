import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../components/main_components/header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;