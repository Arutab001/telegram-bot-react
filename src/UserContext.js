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
        name: tg.initDataUnsafe?.user?.first_name || 'Гость',
        id: tg.initDataUnsafe?.user?.id || null,
        premium: false,
        referrals: 0,
        withdraw: 0,
        balance: 0
    });


    useEffect(() => {
        console.log("STARTING")
        configureAxios();
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('/user/chat?id=728740521');
                console.log(response)
                if (response.request.status === 200) {

                    const data = await response.request.data;
                    console.log(data);
                    setUser((prevUser) => ({
                        ...prevUser,
                        name: data.first_name,
                        id: data.id,
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
