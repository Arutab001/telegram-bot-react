import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../Main_Page/Home.js';

const StartRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tg = window.Telegram.WebApp;
        tg.ready(); // Убедимся, что WebApp готов

        // Читаем initData, который Telegram передаёт вашему WebApp
        const initData = tg.initData;
        const urlParams = new URLSearchParams(initData);
        const startParam = urlParams.get("startapp"); // Получаем параметр startapp

        if (startParam) {
            // Перенаправляем на нужный маршрут
            navigate(`/ActivateCheck/${startParam}`);
        }
    }, [navigate]);

    return <Home />; // Показываем Home, если параметра нет
};

export default StartRedirect;
