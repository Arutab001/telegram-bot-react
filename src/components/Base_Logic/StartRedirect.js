import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    const getHashParam = (param) => {
        const hash = window.location.hash.slice(1); // Убираем '#' из хэша
        const params = new URLSearchParams(hash); // Создаем объект URLSearchParams из хэша
        return params.get(param); // Извлекаем нужный параметр
    };

    useEffect(() => {
        const startApp = getHashParam('startapp'); // Извлекаем параметр 'startapp' из хэша

        if (startApp) {
            navigate(`/ActivateCheck/${startApp}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
