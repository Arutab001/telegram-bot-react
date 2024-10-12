import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
import {useToken} from "./TelegramAuth.js";

const LanguageContext = createContext();


export const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const {token} = useToken();

    useEffect(() => {
        console.log("DAN DA DAN DAN DA DAN")
        const fetchUserLanguage = async () => {
            try {
                axios.defaults.baseURL = `https://geckoshi-stage.up.railway.app`;
                const response = await axios.get(`/language/pack`, {
                    headers: {'Authorization': `Bearer ${token}`}
                });
                const data = await response.data;
                console.log(data);
                setLanguage(data);

            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        fetchUserLanguage();
    }, []);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
