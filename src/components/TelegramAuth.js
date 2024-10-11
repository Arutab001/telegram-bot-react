'use client';
import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {UserProvider} from "../UserContext.js";

const TokenContext = createContext();

export const useToken = () => {
    return useContext(TokenContext);
};

export const TelegramAuth = ({children}) => {  // Accept children as a prop
    const [token, setToken] = useState('');

    const handleSetToken = (new_token) => {
        setToken(new_token);
    };

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
    }

    useEffect(() => {
        const fetchData = async () => {
            configureAxios();
            try {
                const initData = window.Telegram.WebApp.initData;
                console.log(initData.toString())
                const response = await axios.post('/auth/v3', {
                    data: initData
                });
                const result = response.data.access_token;
                handleSetToken(result.toString());
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []); // No dependencies to ensure it only runs once

    // To monitor token changes
    useEffect(() => {
        if (token) {
            console.log('Token updated:', token);
        }
    }, [token]);

    return (
        <TokenContext.Provider value={{token, handleSetToken}}>
            <UserProvider>{children}</UserProvider>
        </TokenContext.Provider>
    );
}
