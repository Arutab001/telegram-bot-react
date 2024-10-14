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
        language: ''
    });

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-prod.up.railway.app';
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
    }

    const handleUserFirst = (new_name, new_id) => {
        setUser(prevState => ({
            ...prevState,
            name: new_name,
            id: new_id
        }));
    };

    const handleUserSecond = (new_premium, new_referrals, new_withdraw, new_balance, new_language) => {
        setUser(prevState => ({
            ...prevState,
            premium: new_premium,
            referrals: new_referrals,
            withdraw: new_withdraw,
            balance: new_balance,
            language: new_language
        }));
    };

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
                        data.data.is_premium.toString(),
                        data.data.referred_users_count,
                        data.data.withdrew,
                        data.data.balance,
                        data.data.language
                    );
                    console.log(data);
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
        };

        fetchUserInfo();
    }, [token]); // Теперь эффект срабатывает при изменении токена

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
