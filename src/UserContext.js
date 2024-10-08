import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
import TelegramAuth from "./components/TelegramAuth.js";


const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const tg = window.Telegram.WebApp;

    const [isAuth, setAuth] = useState();
    const [token, setToken] = useState();

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

    const handleUserFirst = (new_name, new_id) => {
      setUser(prevState =>
          ({...prevState,
      name: new_name,
      id: new_id }))}

    const handleUserSecond = (new_premium, new_referrals, new_withdraw, new_balance) => {
        setUser(prevState =>
            ({...prevState,
                premium: new_premium,
                referrals: new_referrals,
                withdraw: new_withdraw,
                balance: new_balance
            })
        )
    }

    async function checkAuth() {

    }
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    async function authenticateUser () {

    }

    useEffect(() => {
        console.log("STARTING")
        console.log(window.Telegram.WebApp.initData);
        console.log(window.Telegram.WebApp.initDataUnsafe);
       // configureAxios();

        const fetchUserInfo = async () => {
            console.log("a");
            try {
                const WebApp = window.Telegram;
                const initData = window.Telegram.WebApp.initData;
                if (initData) {
                    try {
                        console.log(`/auth?${initData.toString()}`);
                        const encodedInitData = encodeURIComponent(initData.toString());
                        const response = await axios.get(`https://geckoshi-stage.up.railway.app/auth?${encodedInitData}`);

                        if (response.request.status === 200) {

                            const data = await response.data;
                            console.log(data);
                        } else {
                            console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                        }
                        console.log("CHECK");
                        console.log(response.data.access_token);
                        setToken(response.data.access_token);
                        return response.data.access_token
                    } catch (error) {
                        console.error('Error during authentication:', error)
                        setIsAuthenticated(false)
                    }
                }
                else {
                    console.log("NO DATA");
                }
            }
            catch (e) {
                console.error(e);
            }
            try {

                const response = await axios.get(`/user/chat?`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });
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
                    headers: {
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
            }
            catch (error) {
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
        <UserContext.Provider value={{ user, updateUser, updatePremium }}>
            {children}
        </UserContext.Provider>
    );
};

