import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../Main_Page/Home.js'; // Импорт компонента Home

const StartRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Получаем параметр tgWebAppStartParam из текущего URL
        const urlParams = new URLSearchParams(window.location.search);
        const startParam = urlParams.get("startapp"); // Извлекаем параметр

        if (startParam) {
            // Перенаправление на нужный маршрут
            navigate(`/ActivateCheck/${startParam}`);
        }
        else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Рендерим Home, если параметра нет
};

export default StartRedirect;
