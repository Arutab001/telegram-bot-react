import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(location.search);
        return urlParams.get(param); // Извлекаем значение параметра startapp
    };

    const startAppParam = getQueryParam('startapp');
    useEffect(() => {
        const startApp = getQueryParam('startapp');

        if (startApp) {
            navigate(`/ActivateCheck/${startApp}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
