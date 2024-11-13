import React, {useEffect, useState} from 'react';
import './CasinoInfo.css'
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../Base_Logic/UserContext.js";

const translations = {
    english: "Welcome to the slots section.\nHere you can win a lot of money.\nHere are the winning.",
    russian: "Добро пожаловать в раздел слотов.\nЗдесь вы можете выиграть много денег.\nВот ваши выигрыши.",
    german: "Willkommen im Slot-Bereich.\nHier können Sie viel Geld gewinnen.\nHier sind die Gewinne.",
    turkish: "Slot bölümüne hoş geldiniz.\nBurada çok para kazanabilirsiniz.\nKazançlar burada.",
};


const CasinoInfo = () => {
    const { userLanguage } = useLangProfile();
    const [isVisible, setIsVisible] = useState(true);

    const {user} = useUser();

    const setClose = (e) => {
        e.preventDefault();
        setIsVisible(false);
    }

    const [localisation, setLocalisation] = useState("");

    useEffect(() => {
        setLocalisation(translations[userLanguage] || translations[user.language] || translations.english);
    }, [userLanguage]);

    return (
        <div className={`CasinoInfo ${isVisible ? 'show' : 'hide'}`}>
            {localisation}
            <svg onClick={setClose} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 36 21" fill="none">
                <path d="M33 18L18.0023 3.00227" stroke="#364035" stroke-width="5" stroke-linecap="round"/>
                <path d="M2.71045 18L17.7104 3" stroke="#364035" stroke-width="5" stroke-linecap="round"/>
            </svg>
        </div>
    );
};

export default CasinoInfo;