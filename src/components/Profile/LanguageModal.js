import React, {useEffect, useState} from 'react';
import "./LanguageModal.css";
import MyBtn from "./MyBtn.js";
import axios from "axios";
import {useToken} from "../TelegramAuth.js";

const LanguageModal = ({show, onClose}) => {
    const {token} = useToken();
    const [languages, setLanguages] = useState([]);

    // Имитируем запрос для получения доступных языков
    useEffect(() => {
        const fetchLanguages = async () => {
            axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
            const response = await axios.get(`/language/available`, {
                headers: {'Authorization': `Bearer ${token}`}
            });
            const data = await response;
            console.log(data.data.data);
            setLanguages(data.data); // data.data содержит массив языков
        };

        fetchLanguages();
    }, []);

    if (!show) return null;

    return (
        <div className="language-overlay">
            <div className="language-content">
                <h2>Choose your language</h2>
                {languages.map((lang) => (
                    <MyBtn key={lang} text={capitalizeFirstLetter(lang)} onClick={onClose}/>
                ))}
            </div>
        </div>
    );
};

// Функция для капитализации первой буквы (чтобы красиво отобразить название языка)
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default LanguageModal;
