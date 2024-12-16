import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import styles from "./ActivateCheck.module.css";

const ActivateCheck = () => {
    const {checkId} = useParams();
    const {navigate} = useNavigate();

    const [password, setPassword] = useState("");

    const handleSetPassword = (e) => {
        setPassword(e.target.value); // Обновляем состояние значением из поля
    };

    const CheckActivation = async () => {
        try {
            const response = await axios.post(`/cheque/activation?id=${checkId}&p=${password}`);
            if (response.status === 200) {
                navigate('/Home');
            }
            else {
                alert("Something wrong!");
            }
        } catch (e) {
            console.error(e);
            alert("Error activating check.");
        }
    };

    return (
        <div className={styles.activate}>

            <div className={styles.main}>
                <h1>Activate Check</h1>
                <p>Check Id: {checkId}</p>
                <p>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={handleSetPassword} // Добавляем обработчик
                        placeholder="Input password (if it has)"
                    />
                </p>
                <button onClick={CheckActivation}>Activate</button>
                {/* Кнопка для отправки */}
            </div>
        </div>
    );
};

export default ActivateCheck;
