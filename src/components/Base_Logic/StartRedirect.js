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
                const params = new URLSearchParams(startParam);
                const startApp = params.get("startapp");

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
