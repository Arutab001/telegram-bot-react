import React from 'react';
import {useUser} from "./Casino/Base_Logic/UserContext.js";



const Header = () => {
    let tg = window.Telegram.WebApp;
    //tg.initDataUnsafe.query_id
    const {user, updateUser} = useUser();
    return (
        <div className="Header">
            {user.name}
        </div>
    );
};

export default Header;