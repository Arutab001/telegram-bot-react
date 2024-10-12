import React, {useEffect, useState} from 'react';
import "./LanguageModal.css";
import MyBtn from "./MyBtn.js";
import axios from "axios";
import {useToken} from "../Casino/Base_Logic/TelegramAuth.js";
import {useLanguage} from "../Casino/Base_Logic/LanguageContext.js";

const LanguageModal = ({show, onClose}) => {
    const {token} = useToken();
    const [languages, setLanguages] = useState([]);
    const {language} = useLanguage();

    function configureAxios() {
        axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
    }
    // Имитируем запрос для получения доступных языков
    useEffect(() => {
        const fetchLanguages = async () => {
            configureAxios();
            const response = await axios.get(`/language/available`, {
                headers: {'Authorization': `Bearer ${token}`}
            });
            const data = await response;
            setLanguages(data.data.data); // data.data содержит массив языков
        };
        const getArrayOfStrings = async () => {

        }
        fetchLanguages();
    }, []);

    if (!show) return null;

    const changeLanguage = async (lang) => {
        configureAxios();
        const response = await axios.get(`/language?lang=${lang}`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        onClose();
    }

    return (
        <div className="language-overlay">
            <div className="language-content">
                <h2>{language.lang_menu}</h2>
                {languages.map((lang) => (
                    <MyBtn key={lang} text={capitalizeFirstLetter(lang)} onClick={changeLanguage}/>
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
