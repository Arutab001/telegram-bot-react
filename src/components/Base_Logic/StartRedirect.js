import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from '../Main_Page/Home.js'; // Импорт компонента Home

const StartRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startParam = queryParams.get("start");

        if (startParam) {
            // Перенаправление на ActivateCheck/:checkId
            navigate(`/ActivateCheck/${startParam}`);
        }
    }, [location, navigate]);

    // Если нет параметра start, рендерим Home
    const queryParams = new URLSearchParams(location.search);
    const startParam = queryParams.get("start");
    if (!startParam) {
        return <Home />;
    }

    return null; // Ничего не отображаем, если перенаправляем
};

export default StartRedirect;
