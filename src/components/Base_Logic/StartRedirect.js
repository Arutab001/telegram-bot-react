import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const { initDataRaw, initData } = retrieveLaunchParams();

const StartRedirect = () => {
    const navigate = useNavigate();

    const getHashParam = (param) => {
        const initdata = window.Telegram.WebApp.initDataUnsafe;
        console.log(initdata)
    };

    useEffect(() => {
        const tgWebAppData = getHashParam('tgWebAppData'); // Извлекаем tgWebAppData
        console.log('tgWebAppData:', tgWebAppData); // Выведем tgWebAppData

        if (tgWebAppData) {
            try {
                // Разделяем строку по символу '=', чтобы извлечь сам JSON
                const jsonData = tgWebAppData.split('=')[1];
                const parsedData = JSON.parse(decodeURIComponent(jsonData)); // Декодируем и парсим JSON
                console.log('Parsed tgWebAppData:', parsedData);
                // Можешь теперь использовать данные из tgWebAppData для дальнейшей логики
            } catch (e) {
                console.error('Ошибка при парсинге tgWebAppData', e);
            }
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
