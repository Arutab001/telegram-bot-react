import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();


export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    let tg = window.Telegram.WebApp;
    const [user, setUser] = useState(
        {
            name: tg.initDataUnsafe.user.first_name,
            id: tg.initDataUnsafe.user.id,
            premium: false,
            referrals: 250,
            withdraw: 0,
            balance: 0
        }
    );



    useEffect(() => {
        try {
        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', 'https://geckoshi-stage.up.railway.app/user/info', true);
        setUser({
            name: tg.initDataUnsafe.user.first_name,
            id: xhr.response.telegram_id,
            premium: xhr.response.is_premium,
            referrals: xhr.response.referred_users_count,
            withdraw: xhr.response.withdrew,
            balance: xhr.response.balance
        })
        }
        catch (error) {
            console.log(error)
        }
    }, []);










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
