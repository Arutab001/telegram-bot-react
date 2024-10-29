// MovingDot.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Pumpkin.module.css';
import { useToken } from "../Base_Logic/TelegramAuth.js";

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const token = useToken();

    useEffect(() => {
        // Проверка на наличие токена перед выполнением запроса
        if (!token) return;

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

        // Запрос при инициализации компонента и каждые 5 минут
        checkAvailability();
        const interval = setInterval(checkAvailability, 300000); // 5 минут

        return () => clearInterval(interval);
    }, [token]);

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
            await axios.post('https://geckoshi-prod.up.railway.app/event-bonus?event_id=1', {}, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log("POST-запрос успешно отправлен");
        } catch (error) {
            console.error("Ошибка при отправке POST-запроса:", error);
        }

        // Через минуту проверяем доступность заново
        setTimeout(() => {
            if (token) {
                checkAvailability();
            }
        }, 60000); // 1 минута
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
