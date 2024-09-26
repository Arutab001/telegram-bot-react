// src/components/Layout.js
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

import {useSwipeable} from "react-swipeable";

const Layout = () => {
    const routes = ['/', '/Profile', '/Casino', '/Tasks'];
    const navigate = useNavigate();
    const location = useLocation();

    // Найдем индекс текущего маршрута
    const currentIndex = routes.indexOf(location.pathname);

    const handleSwipeRight = () => {
        const nextIndex = (currentIndex + 1) % routes.length;
        navigate(routes[nextIndex]);
        return(<Link to={"/Tasks"} />);
    };

    const handleSwipeLeft = () => {
        const prevIndex = currentIndex === 0 ? routes.length - 1 : currentIndex - 1;
        navigate(routes[prevIndex]);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <div {...handlers}>
            <Header />
            <main style={{marginBottom: "25vh"}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
