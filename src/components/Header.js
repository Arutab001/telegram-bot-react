import React from 'react';
import {useUser} from "../UserContext.js";



const Header = () => {
    let tg = window.Telegram.WebApp;
    //tg.initDataUnsafe.query_id
    const {user, updateUser} = useUser();
    return (
        <div className="Header">
            {tg.initDataUnsafe.user.first_name}
        </div>
    );
};

export default Header;