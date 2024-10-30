// UserProvider.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useToken } from "./TelegramAuth.js";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const { token } = useToken();  // Получаем токен
    const [user, setUser] = useState({
        name: '',
        id: 0,
        premium: false,
        referrals: 0,
        withdraw: 0,
        balance: 0,
        language: '',
        ref_link: ''
    });

    function configureAxios() {
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
    }

    const handleUserFirst = (new_name, new_id) => {
        setUser(prevState => ({
            ...prevState,
            name: new_name,
            id: new_id
        }));
    };

    const handleUserSecond = (new_premium, new_referrals, new_withdraw, new_language, new_ref_link) => {
        setUser(prevState => ({
            ...prevState,
            premium: new_premium,
            referrals: new_referrals,
            withdraw: new_withdraw,
            language: new_language,
            ref_link: 'https://t.me/Geckoshi_bot/webapp?startapp=' + new_ref_link
        }));
    };
    const handleUserBalance = (new_balance) => {
        setUser(prevState => ({
            ...prevState,
            balance: new_balance
        }))
    }

    useEffect(() => {
        if (!token) {
            // Если токен отсутствует, то не выполняем запросы
            return;
        }

        configureAxios();

        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/user/chat');
                if (response.status === 200) {
                    const data = await response.data;
                    handleUserFirst(data.data.first_name, data.data.id);
                    console.log(data);
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }

            try {
                const response = await axios.get('/user/info');
                if (response.status === 200) {
                    const data = await response.data;
                    handleUserSecond(
                        data.data.is_admin.toString(),
                        data.data.referred_users_count,
                        data.data.withdrew,
                        data.data.language,
                        data.data.referral_id
                    );
                    console.log(data);
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
            try {
                const response = await axios.get('/coin/balance');
                if (response.status === 200){
                    handleUserBalance(response.data.data.GMEME);
                }
            }
            catch (e) {
                console.log("Balance error:");
                console.error(e)
            }
        };

        fetchUserInfo();
    }, [token, user.balance]); // Теперь эффект срабатывает при изменении токена

    return (
        <UserContext.Provider value={{ user, setUser, handleUserBalance }}>
            {children}
        </UserContext.Provider>
    );
};
