import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const StartRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tgWebAppData = window.Telegram.WebApp.initDataUnsafe.start_param;

        if (tgWebAppData) {
            // Используем динамический путь
            navigate(`/ActivateCheck/${tgWebAppData}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);


    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
