import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    const getHashParam = (param) => {
        const hash = window.location.hash.slice(1); // Убираем '#' из хэша
        const decodedHash = decodeURIComponent(hash); // Декодируем хэш
        console.log('Decoded Hash:', decodedHash); // Выводим декодированный хэш для диагностики

        const params = new URLSearchParams(decodedHash); // Создаем объект URLSearchParams из декодированного хэша
        return params.get(param); // Извлекаем нужный параметр
    };

    useEffect(() => {
        const tgWebAppData = getHashParam('tgWebAppData'); // Извлекаем tgWebAppData

        console.log('tgWebAppData:', tgWebAppData); // Выведем tgWebAppData

        if (tgWebAppData) {
            try {
                const data = JSON.parse(decodeURIComponent(tgWebAppData)); // Декодируем и парсим JSON
                console.log('Parsed tgWebAppData:', data);
                // Можешь теперь использовать данные из tgWebAppData для дальнейшей логики
            } catch (e) {
                console.error('Ошибка при парсинге tgWebAppData', e);
            }
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
