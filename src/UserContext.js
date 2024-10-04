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
            id: 0,
            premium: false,
            referrals: 250,
            withdraw: 0,
            balance: 0
        }
    );

    function httpGet(theUrl) {
        let xmlHttpReq = new XMLHttpRequest();
        xmlHttpReq.open("GET", theUrl, true);
        xmlHttpReq.send(null);
        return xmlHttpReq.responseText;
    }


    useEffect(() => {
        try {
            httpGet("https://geckoshi-stage.up.railway.app/user/info");
        setUser({
            name: tg.initDataUnsafe.user.first_name,
            id: JSON.parse(httpGet("https://geckoshi-stage.up.railway.app/user/info")).telegram_id,
            premium: xhr.responseText.is_premium.toString(),
            referrals: xhr.responseText.referred_users_count.toString(),
            withdraw: xhr.responseText.withdrew.toString(),
            balance: xhr.responseText.balance.toString()
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
