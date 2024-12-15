import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    // Функция для извлечения параметров из декодированного хэша
    const getHashParam = (param) => {
        const hash = window.location.hash.slice(1); // Убираем '#' из хэша
        const decodedHash = decodeURIComponent(hash); // Декодируем хэш
        console.log('Decoded Hash:', decodedHash); // Выводим декодированный хэш для диагностики
        const params = new URLSearchParams(decodedHash); // Создаем объект URLSearchParams из декодированного хэша
        return params.get(param); // Извлекаем нужный параметр
    };

    useEffect(() => {
        const startApp = getHashParam('startapp'); // Извлекаем параметр startapp из хэша
        console.log('StartApp:', startApp); // Выводим startapp в консоль для диагностики

        if (startApp) {
            navigate(`/ActivateCheck/${startApp}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
