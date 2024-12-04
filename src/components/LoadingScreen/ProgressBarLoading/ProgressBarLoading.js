import React from 'react';
import styles from './ProgressBarLoading.module.css';

const ProgressBarLoading = ({ progress }) => {
    return (
        <div className={styles.progress_bar_container}>
            <div className={styles.progress_bar_track}>
                <div
                    className={styles.progress_bar_bar}
                    style={{ width: `${progress}%` }} // Inline стиль для динамического изменения ширины
                />
            </div>
        </div>
    );
};

export default ProgressBarLoading;
