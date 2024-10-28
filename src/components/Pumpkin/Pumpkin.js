// MovingDot.js
import React, { useState, useEffect } from "react";
import styles from './Pumpkin.module.css';

const MovingDot = () => {
    const [dotVisible, setDotVisible] = useState(true);
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    useEffect(() => {
        // Показываем точку каждые 5 минут, если она не была нажата
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
