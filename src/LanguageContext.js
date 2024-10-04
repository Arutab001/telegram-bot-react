import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null);

    useEffect(() => {
        const fetchUserLanguage = async () => {
            try {
                const response = await fetch('https://geckoshi-stage.up.railway.app/language/get_available_langs_language_available_get');
                if (response.ok) {
                    const data = await response.json();
                    setLanguage(data.language);
                } else {
                    console.error('Ошибка при получении данных:', response.status);
                }
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
