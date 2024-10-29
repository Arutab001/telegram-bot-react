// MovingDot.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Pumpkin.module.css';
import { useToken } from "../Base_Logic/TelegramAuth.js";
import pumpkinVideo from '../../images/pump.webm';

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const { token } = useToken();

    // Функция для проверки доступности тыквы
    const checkAvailability = async () => {
        if (!token) {
            console.error("Токен отсутствует, запрос не отправлен");
            return;
        }

        try {
            const response = await axios.get('/event-bonus?event_id=1', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log(response.data);
            if (response.data.data.available === true) {
                setDotVisible(true);
                randomizePosition();
            } else {
                setDotVisible(false);
            }
        } catch (error) {
            console.error("Ошибка при проверке доступности:", error);
            setDotVisible(false);
        }
    };

    useEffect(() => {
        if (token) {
            console.log("Token available:", token);
            checkAvailability();
        }
    }, [token]);

    const randomizePosition = () => {
        const top = Math.random() * 90 + "%";
        const left = Math.random() * 90 + "%";
        setPosition({ top, left });
    };

    const handleDotClick = async () => {
        setDotVisible(false);

        if (!token) {
            console.error("Токен отсутствует, запрос не отправлен");
            return;
        }

        try {
            await axios.post(
                '/event-bonus?event_id=1',
                {}, // Тело запроса, здесь пустой объект
                { headers: { 'Authorization': `Bearer ${token}` } }
            );
            console.log("POST-запрос успешно отправлен");
        } catch (error) {
            console.error("Ошибка при отправке POST-запроса:", error);
        }

        // Через минуту снова проверяем доступность
        setTimeout(() => {
            if (token) {
                checkAvailability();
            }
        }, 60000); // 1 минута
    };

    return (
        dotVisible && (
            <video
                className={styles.pumpkin}
                style={{ top: position.top, left: position.left }}
                onClick={handleDotClick}
                autoPlay
                loop
                muted
                src={pumpkinVideo}
            />
        )
    );
};

export default MovingDot;
