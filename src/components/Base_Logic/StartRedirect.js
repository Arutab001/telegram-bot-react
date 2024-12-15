import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    const getHashParam = (param) => {
        const hash = window.location.hash.slice(1); // Убираем '#'
        console.log('Full hash:', hash); // Выведи весь хэш
        const params = new URLSearchParams(hash);
        return params.get(param);
    };


    useEffect(() => {
        const startApp = getHashParam('startapp'); // Извлекаем параметр 'startapp' из хэша
        console.log("Param:" + startApp)
        if (startApp) {
            navigate(`/ActivateCheck/${startApp}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
