import React from 'react';
import {useUser} from "../UserContext.js";

const Header = () => {

    const {user, updateUser} = useUser();

    return (
        <div className="Header">
            {user.name}
        </div>
    );
};

export default Header;