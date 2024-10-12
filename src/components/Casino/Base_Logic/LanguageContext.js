import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
import {useToken} from "./TelegramAuth.js";
import {useStringArray} from "./LanguagePack.js";
const LanguageContext = createContext();


export const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);
    const {token} = useToken();
    const {stringArray, setStrings} = useStringArray()
    useEffect(() => {
        const fetchUserLanguage = async () => {
            try {
                axios.defaults.baseURL = `http://geckoshi-stage.up.railway.app`;
                const response = await axios.get(`/language/pack`, {
                    headers: {'Authorization': `Bearer ${token}`}
                });
                const data = await response.data;
                console.log(data);
                setStrings(data);

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
