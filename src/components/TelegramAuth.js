'use client'
import {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";

const TokenContext = createContext();

export const useToken = () => {
    return useContext(TokenContext)
}

export default function TelegramAuth() {
    const [token, setToken] = useState('');
    const handleSetToken = (new_token) => {
        setToken(new_token);
    }

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
    }

    useEffect(async () => {
        configureAxios();
        try {
            const initData = window.Telegram.WebApp.initData;
            const response = await axios.post('/auth/v3', {
                data: initData
            });
            const result = await response.data.access_token;
            handleSetToken(result.toString());
            console.log(token);
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (<TokenContext.Provider value={{token, handleSetToken}}>
        {children}
    </TokenContext.Provider>);
}