import React from 'react';
import {useUser} from "../UserContext.js";

const Header = () => {
    let tg = window.Telegram.WebApp;
    const {user, updateUser} = useUser();

    return (
        <div className="Header">
            {tg.initDataUnsafe.initData.query}
        </div>
    );
};

export default Header;