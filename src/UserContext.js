import React, {createContext, useContext, useEffect, useState} from 'react';
import base64 from 'crypto-js/enc-base64';
import hmac from 'crypto-js/hmac-sha256';

const UserContext = createContext();


export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {

    let tg = window.Telegram.WebApp;

    useEffect(() => {
        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', 'https://geckoshi-stage.up.railway.app/user/info', true);
        console.log(xhr.response);
    }, []);





    const [user, setUser] = useState(
        {
            name: tg.initDataUnsafe.user.first_name,
            id: tg.initDataUnsafe.user.id,
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
