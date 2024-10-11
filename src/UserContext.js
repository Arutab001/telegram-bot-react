import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useToken} from "./components/TelegramAuth.js";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {

    const {token, handleSetToken} = useToken();

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
    }

    const [user, setUser] = useState({
        name: '',
        id: 0,
        premium: false,
        referrals: 0,
        withdraw: 0,
        balance: 0
    });

    const handleUserFirst = (new_name, new_id) => {
        setUser(prevState =>
            ({
                ...prevState,
                name: new_name,
                id: new_id
            }))
    }

    const handleUserSecond = (new_premium, new_referrals, new_withdraw, new_balance) => {
        setUser(prevState =>
            ({
                ...prevState,
                premium: new_premium,
                referrals: new_referrals,
                withdraw: new_withdraw,
                balance: new_balance
            })
        )
    }

    useEffect(() => {
        configureAxios();
        const fetchUserInfo = async () => {
            try {

                const response = await axios.get(`/user/chat?${token}`
                   );
                console.log(response)
                if (response.request.status === 200) {

                    const data = await response.data;
                    console.log(data);
                    handleUserFirst(data.data.first_name, data.data.id);
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
            try {
                const response = await axios.get(`/user/chat?`, {
                    header: {
                        authorization: `Bearer ${token}`
                    }
                });
                if (response.request.status === 200) {
                    const data = await response.data;
                    console.log(data);
                    handleUserSecond(data.data.is_premium.toString(), data.data.referred_users_count, data.data.withdrew, data.data.balance)
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error)
            }
        };
        console.log(user);
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
        <UserContext.Provider value={{user, updateUser, updatePremium}}>
            {children}
        </UserContext.Provider>
    );
};

