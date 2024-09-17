import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {


    const [user, setUser] = useState(
        {
            name: "aaa",
            id: 0,
            premium: false,
            referrals: 250,
            withdraw: 0
        }
    );

    const updatePremium = () => {
        user.premium = true;
    }

 //window.Telegram.WebApp.initData.name
    const updateUser = (newUserData) => {
        setUser(newUserData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
