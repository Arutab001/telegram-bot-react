import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {UserProvider} from "./UserContext.js";
import {StringArrayProvide, UserLanguageProvider} from "./UserLanguageProvider.js";
import LanguageProvider from "./LanguageContext.js";

const TokenContext = createContext();

export const useToken = () => {
    return useContext(TokenContext);
};

// Функция для установки cookie с временем истечения
function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // 5 минут в миллисекундах
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Функция для получения cookie по имени
function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}

// Функция для удаления cookie
function eraseCookie(name) {
    document.cookie = `${name}=; Max-Age=-99999999; path=/`;
}

export const TelegramAuth = ({children}) => {
    const [token, setToken] = useState('');

    const handleSetToken = (new_token) => {
        setToken(new_token);
        setCookie('authToken', new_token, 5); // Сохраняем токен в cookie на 5 минут
    };

    function configureAxios() {
        axios.defaults.baseURL = "https://geckoshi-stage.up.railway.app";
    }

    useEffect(() => {
        const fetchData = async () => {
            configureAxios();
            const savedToken = getCookie('authToken'); // Получаем токен из cookie
            if (savedToken) {
                console.log('Токен найден в cookie:', savedToken);
                setToken(savedToken); // Устанавливаем токен из cookie, если он существует
            } else {
                const initData = window.Telegram.WebApp.initData; // Инициализационные данные
                const startParams = String(window.Telegram.WebApp.initDataUnsafe.start_param); // Аргумент старта

                try {
                    const response = await axios.post('/auth/v4', {
                        init_data: initData,       // Строка с инициализационными данными
                        start_argument: startParams // Аргумент старта
                    });
                    const result = response.data.access_token;
                    handleSetToken(result.toString()); // Сохраняем токен
                } catch (e) {
                    console.error(e);
                }

            }
        };
        fetchData();
    }, []); // Пустой массив зависимостей, чтобы эффект выполнился только один раз

    // Мониторинг изменений токена
    useEffect(() => {
        if (token) {
            console.log('Токен обновлён:', token);
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
        }
    }, [token]);

    return (
        <TokenContext.Provider value={{token, handleSetToken}}>
            <UserProvider><UserLanguageProvider><LanguageProvider>{children}</LanguageProvider></UserLanguageProvider></UserProvider>
        </TokenContext.Provider>
)
    ;
};
