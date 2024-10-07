import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";


const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const tg = window.Telegram.WebApp;

    function handleAuthError(error) {
        const toast = useToast()
        if (error.response && error.response.status === 401) {
            const refresh_token = cookies.get(c_binds.refresh_token)
            if (refresh_token === undefined || refresh_token === null) {
                toast.info('Current session expired. Login one more time.')
                router.push('/login').catch(err => {
                    console.log(err)
                })
                return Promise.reject(error)
            }
            return refreshAccessToken()
                .then(() => {
                    return axios.request(error.config)
                })
                .catch()
        }
        return Promise.reject(error)
    }

    function addAuthToRequest(config) {
        if (cookies.get(c_binds.access_token) === undefined) {
            return config;
        }
        config.headers.Authorization = `Bearer ${cookies.get(c_binds.access_token)}`
        return config;
    }

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app'
        //axios.interceptors.response.use(null, handleAuthError)
        //axios.interceptors.request.use(addAuthToRequest)
    }


    const [user, setUser] = useState({
        name: '',
        id: 0,
        premium: false,
        referrals: 0,
        withdraw: 0,
        balance: 0
    });


    useEffect(() => {
        console.log("STARTING")
        console.log(window.Telegram.WebApp.initData);
        console.log(window.Telegram.WebApp.initDataUnsafe);
        configureAxios();
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/user/chat?id=728740521');
                console.log(response)
                if (response.request.status === 200) {

                    const data = await response.data;
                    console.log(data);
                    setUser((prevUser) => ({
                        ...prevUser,
                        name: data.data.first_name,
                        id: data.data.id,
                    }));
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
            try {
                const response = await axios.get('/user/info?id=728740521');
                if (response.request.status === 200) {
                    const data = await response.data.data;
                    setUser((prevUser) => ({
                        ...prevUser,
                        premium: data.is_premium,
                        referrals: data.referred_users_count,
                        withdraw: data.withdrew,
                        balance: data.balance
                    }));
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            }
            catch (error) {
                console.error('Ошибка сети:', error)
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

