
import React from 'react';
import Header from '../../Header.js';
import Footer from '../../Footer.js';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

const Layout = () => {

    return (
        <>
            <Header />
            <main style={{marginBottom: "15vh"}}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;