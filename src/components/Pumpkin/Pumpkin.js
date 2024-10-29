// MovingDot.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Pumpkin.module.css';
import { useToken } from "../Base_Logic/TelegramAuth.js";

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const { token } = useToken();

    useEffect(() => {
        // Проверяем наличие токена перед выполнением запроса
        if (!token) {
            console.error("Токен отсутствует, запрос не отправлен");
            return;
        }
        console.log(token)
        // Функция для проверки доступности точки
        const checkAvailability = async () => {
            try {
                const response = await axios.get('https://geckoshi-prod.up.railway.app/event-bonus?event_id=1', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.data.available) {
                    setDotVisible(true);
                    randomizePosition();
                } else {
                    setDotVisible(false);
                }
            } catch (error) {
                console.error("Ошибка при проверке доступности:", error);
                setDotVisible(false); // Если ошибка, скрываем точку
            }
        };

        // Выполняем проверку доступности только один раз при наличии токена
        checkAvailability();
    }, [token]); // Запуск эффекта только при наличии токена

    const randomizePosition = () => {
        const top = Math.random() * 90 + "%";
        const left = Math.random() * 90 + "%";
        setPosition({ top, left });
    };

    const handleDotClick = async () => {
        setDotVisible(false); // Скрываем точку сразу после нажатия

        if (!token) {
            console.error("Токен отсутствует, запрос не отправлен");
            return;
        }

        try {
            await axios.post('https://geckoshi-prod.up.railway.app/event-bonus?event_id=1', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("POST-запрос успешно отправлен");
        } catch (error) {
            console.error("Ошибка при отправке POST-запроса:", error);
        }

        // Через минуту снова проверяем доступность
        setTimeout(() => {
            if (token) {
                checkAvailability();
            }
        }, 6000); // 1 минута
    };

    return (
        dotVisible && (
            <div
                className={styles.dot}
                style={{ top: position.top, left: position.left }}
                onClick={handleDotClick}
            />
        )
    );
};

export default MovingDot;
