// MovingDot.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Pumpkin.module.css';

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    useEffect(() => {
        // Функция для проверки доступности точки
        const checkAvailability = async () => {
            try {
                // Добавляем параметр event_id = 1 в GET-запрос
                const response = await axios.get('https://geckoshi-prod.up.railway.app/event-bonus', {
                    params: { event_id: 1 }
                });
                console.log("PUMPKIN")
                console.log(response.data)
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
    }, []);

    const randomizePosition = () => {
        const top = Math.random() * 90 + "%";
        const left = Math.random() * 90 + "%";
        setPosition({ top, left });
    };

    const handleDotClick = async () => {
        setDotVisible(false); // Скрываем точку сразу после нажатия

        try {
            // Добавляем параметр event_id = 1 в POST-запрос
            await axios.post('https://geckoshi-prod.up.railway.app/event-bonus', { event_id: 1 });
            console.log("POST-запрос успешно отправлен");
        } catch (error) {
            console.error("Ошибка при отправке POST-запроса:", error);
        }

        // Через минуту проверяем доступность заново
        setTimeout(() => {
            checkAvailability();
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
