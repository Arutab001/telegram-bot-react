import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useToken} from "./TelegramAuth.js";
import {useLangProfile} from "./UserLanguageProvider.js";
const LanguageContext = createContext();


export const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(null);
    const {token} = useToken();
    const {userLanguage} = useLangProfile();

    useEffect(() => {
        const fetchUserLanguage = async () => {
            if (!token) return; // Если токена нет, выходим из функции

            try {
                axios.defaults.baseURL = 'https://geckoshi-prod.up.railway.app';

                const response = await axios.get(`/language/pack`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const data = response.data.data;
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
    }, [token, userLanguage]);

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
