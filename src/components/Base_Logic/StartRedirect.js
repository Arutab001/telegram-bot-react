import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Проверяем, инициализирован ли WebApp SDK
        if (window.Telegram && window.Telegram.WebApp) {
            const startParam = window.Telegram.WebApp.initData; // Инициализация данных от WebApp

            // Если параметры переданы, редиректим на нужный маршрут
            if (startParam) {
                // Преобразуем данные из WebApp в объект (если нужно)
                const hash = window.location.hash.slice(1);
                const params = new URLSearchParams(hash);
                const startApp = params.get('tgWebAppStartParam');

                if (startApp) {
                    navigate(`/ActivateCheck/${startApp}`);
                } else {
                    navigate('/Home');
                }
            }
        } else {
            console.log("WebApp SDK не инициализирован");
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
