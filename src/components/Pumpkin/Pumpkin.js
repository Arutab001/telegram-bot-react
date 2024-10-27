// MovingDot.js
import React, { useState, useEffect } from "react";
import styles from './Pumpkin.module.css'; // Подключаем CSS-модуль

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(false);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    useEffect(() => {
        const interval = setInterval(() => {
            setDotVisible(true);
            randomizePosition();
        }, 300000); // 5 минут

        return () => clearInterval(interval);
    }, []);

    const randomizePosition = () => {
        const top = Math.random() * 90 + "%";
        const left = Math.random() * 90 + "%";
        setPosition({ top, left });
    };

    const handleDotClick = () => {
        setDotVisible(false);
        setTimeout(() => {
            setDotVisible(true);
            randomizePosition();
        }, 300000); // 5 минут
    };

    return (
        <div className={styles.container}>
            {dotVisible && (
                <div
                    className={styles.dot}
                    style={{ top: position.top, left: position.left }}
                    onClick={handleDotClick}
                />
            )}
        </div>
    );
};

export default MovingDot;
