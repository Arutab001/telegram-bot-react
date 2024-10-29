import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
import Spider from "../Spider/Spider.js";
import Pumpkin from "../Pumpkin/Pumpkin.js";
import styles from '../Pumpkin/Pumpkin.module.css'

const Layout = () => {

    return (
        <>
            <Header/>
            <div style={{position: "relative"}}>
                <div className={styles.PumpkinContainer}>
                    <Pumpkin/>
                </div>
            </div>
            <main style={{marginBottom: "15vh"}}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;