import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const tg = window.Telegram.WebApp;

    // Инициализация состояния пользователя
    const [user, setUser] = useState({
        name: tg.initDataUnsafe.user.first_name,
        id: tg.initDataUnsafe.user.id,
        premium: false,
        referrals: 250,
        withdraw: 0,
        balance: 0
    });

    // useEffect для запроса данных при загрузке компонента
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://geckoshi-stage.up.railway.app/user/info', true);

                // Обработка завершения запроса
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText); // Парсинг ответа JSON
                        setUser({
                            name: tg.initDataUnsafe.user.first_name,
                            id: response.telegram_id.toString(),
                            premium: response.is_premium.toString(),
                            referrals: response.referred_users_count.toString(),
                            withdraw: response.withdrew.toString(),
                            balance: response.balance.toString()
                        });
                    } else {
                        console.error(`Ошибка: ${xhr.status}`);
                    }
                };

                xhr.onerror = function () {
                    console.error('Ошибка выполнения запроса');
                };

                xhr.send(); // Отправка запроса
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };

        fetchUserInfo();
    }, []);


    const updatePremium = () => {
        setUser((prevUser) => ({
            ...prevUser,
            premium: true,
        }));
    };


    const updateUser = (newUserData) => {
        setUser(newUserData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser, updatePremium }}>
            {children}
        </UserContext.Provider>
    );
};
