import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useToken} from "./TelegramAuth.js";

const LanguageContext = createContext();


export const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(null);
    const {token} = useToken();

    useEffect(() => {
        const fetchUserLanguage = async () => {
            if (!token) return; // Если токена нет, выходим из функции

            try {
                axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';

                const response = await axios.get(`/language/pack`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const data = response.data;
                console.log(data);
                setLanguage(data);

            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
                if (error.response && error.response.status === 401) {
                    console.error('Неавторизованный доступ. Проверьте токен.');
                }
            }
        };

        fetchUserLanguage(); // Вызываем функцию при каждом изменении токена
    }, [token]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
