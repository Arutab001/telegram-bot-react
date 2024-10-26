
import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import Spider from "../Spider/Spider.js";

const Layout = () => {

    return (
        <>
            <Spider />
            <Header />
            <main style={{marginBottom: "15vh"}}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;