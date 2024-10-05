import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const tg = window.Telegram.WebApp;

    // Инициализация состояния пользователя
    const [user, setUser] = useState({
        name: tg.initDataUnsafe?.user?.first_name || 'Гость',
        id: tg.initDataUnsafe?.user?.id || null,
        premium: false,
        referrals: 0,
        withdraw: 0,
        balance: 0
    });

    // useEffect для запроса данных при загрузке компонента
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('https://geckoshi-stage.up.railway.app/user/info?id=728740521', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json(); // Парсинг ответа JSON
                    setUser((prevUser) => ({
                        ...prevUser,
                        id: data.telegram_id.toString(),
                        premium: data.is_premium,
                        referrals: data.referred_users_count,
                        withdraw: data.withdrew,
                        balance: data.balance,
                    }));
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
        };

        fetchUserInfo();
    }, []);

    // Функция для обновления премиум-статуса
    const updatePremium = () => {
        setUser((prevUser) => ({
            ...prevUser,
            premium: true,
        }));
    };

    // Функция для обновления данных пользователя
    const updateUser = (newUserData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...newUserData,
        }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser, updatePremium }}>
            {children}
        </UserContext.Provider>
    );
};
