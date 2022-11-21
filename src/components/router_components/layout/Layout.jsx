import React from 'react';
import Header from "../../main_components/header/Header";
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
                <Outlet />
        </>
    );
};

export default Layout;