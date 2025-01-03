import React, {useEffect, useState} from 'react';
import styles from "./LanguageModal.modal.css";
import MyBtn from "./MyBtn.js";
import axios from "axios";
import {useToken} from "../Base_Logic/TelegramAuth.js";
import {useLanguage} from "../Base_Logic/LanguageContext.js";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";

const LanguageModal = ({show, onClose}) => {
    const {token} = useToken();
    const [languages, setLanguages] = useState([]);
    const {language} = useLanguage();
    const {setUserLanguage} = useLangProfile();


    // Имитируем запрос для получения доступных языков
    useEffect(() => {
        const fetchLanguages = async () => {
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

    const changeLanguage = async (lang, e) => {
        const response = await axios.post(`/language?lang=${lang}`, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        setUserLanguage(lang);
        onClose(e);
    }

    return (
        <div className={styles.language_overlay}>
            <div className={styles.language_content}>
                <h2>{language.lang_menu}</h2>
                {languages.map((lang) => (
                    <MyBtn key={lang} text={capitalizeFirstLetter(lang)} onClick={(e) => changeLanguage(lang, e)}/>
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
