import React, { useEffect, useState } from 'react';
import "./Profile.css";
import MyBtn from "./MyBtn.js";
import { useUser } from "../Base_Logic/UserContext.js";
import GetPremium from "./GetPremium.js";
import PremiumNotification from "./PremiumNotification.js";
import LanguageModal from "./LanguageModal.js";
import ErrorModal from "./ErrorModal.js";
import defaultAvatar from "../../images/sticker 1.png";
import { useLanguage } from "../Base_Logic/LanguageContext.js";
import axios from "axios";
import { useToken } from "../Base_Logic/TelegramAuth.js";
import { useLangProfile } from "../Base_Logic/UserLanguageProvider.js"; 

const translations = {
    english: {
        Info: "Account Info",
        Name: "Name",
        Id: "Your ID",
        Premium: "Premium",
        Ref: "Referrals",
        Withdrawn: "Withdrawn",
        WI: "Withdrawn Info",
        Text1: "We will notify you in advance about payouts",
        Text2: "MINIMUM WITHDRAWAL WILL BE 0 ON AIRDROP TODAY",
        Change: "Change Language",
        Balance: "$GMEME",
        CopySuccess: "ID copied to clipboard: ",
    },
    russian: {
        Info: "Информация об аккаунте",
        Name: "Имя",
        Id: "Ваш ID",
        Premium: "Премиум",
        Ref: "Рефералы",
        Withdrawn: "Выведено",
        WI: "Информация о выводе",
        Text1: "Мы заранее уведомим вас о выплатах",
        Text2: "МИНИМАЛЬНЫЙ ВЫВОД СЕГОДНЯ БУДЕТ 0 В AIRDROP",
        Change: "Сменить язык",
        Balance: "$GMEME",
        CopySuccess: "ID скопирован в буфер обмена: ",
    },
    german: {
        Info: "Konto Informationen",
        Name: "Name",
        Id: "Ihre ID",
        Premium: "Premium",
        Ref: "Empfehlungen",
        Withdrawn: "Abgehoben",
        WI: "Abhebungsinformationen",
        Text1: "Wir werden Sie im Voraus über Auszahlungen informieren",
        Text2: "DAS MINDESTABHEBEN WIRD HEUTE 0 BEI AIRDROP SEIN",
        Change: "Sprache ändern",
        Balance: "$GMEME",
        CopySuccess: "ID in die Zwischenablage kopiert: ",
    },
    turkish: {
        Info: "Hesap Bilgileri",
        Name: "İsim",
        Id: "ID'niz",
        Premium: "Premium",
        Ref: "Yönlendirmeler",
        Withdrawn: "Çekildi",
        WI: "Çekim Bilgisi",
        Text1: "Ödemeler hakkında önceden sizi bilgilendireceğiz",
        Text2: "BUGÜN AIRDROP'DA MİNİMUM ÇEKİM 0 OLACAK",
        Change: "Dili Değiştir",
        Balance: "$GMEME",
        CopySuccess: "ID panoya kopyalandı: ",
    },
};

const Profile = () => {
    const { user, handleUserBalance } = useUser();
    const { language } = useLanguage();
    const { userLanguage } = useLangProfile();
    const { token } = useToken();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);
    const [avatar, setAvatar] = useState(defaultAvatar); 
    const [copyMessage, setCopyMessage] = useState(""); // Состояние для сообщения о копировании

    const localisation = translations[userLanguage] || translations[user.language] || translations.english;

    const copyToClipboard = async (text) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                setCopyMessage(localisation.CopySuccess + text); // Устанавливаем сообщение
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed"; 
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                try {
                    document.execCommand("copy");
                    setCopyMessage(localisation.CopySuccess + text); // Устанавливаем сообщение
                } catch (err) {
                    console.error("Ошибка при копировании ID с использованием execCommand: ", err);
                } finally {
                    document.body.removeChild(textarea);
                }
            }
        } catch (err) {
            console.error("Ошибка копирования ID: ", err);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setCopyMessage(""); // Сброс сообщения через 3 секунды
        }, 3000);

        return () => clearTimeout(timer);
    }, [isVisible, copyMessage]);

    useEffect(() => {
        const getBalance = async () => {
            try {
                const response = await axios.get('/coin/balance');
                if (response.status === 200) {
                    handleUserBalance(response.data.data.GMEME);
                }
            } catch (e) {
                console.log("Balance error:");
                console.error(e);
            }
        };
        getBalance();
    }, []);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <PremiumNotification isVisible={isVisible} />
            <div className="profile">
                <div>
                    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
                        <img src={avatar} 
                             alt="User Avatar"
                             style={{ width: "15%", height: "100%", borderRadius: "100%", margin: "5%" }} />
                        <h1>{localisation.Info}</h1>
                    </div>
                    <span>{localisation.Name}: </span> {user.name} <br />
                    <span> {localisation.Id}: </span> 
                    <span 
                        style={{ cursor: "pointer", color: "blue" }} 
                        onClick={() => copyToClipboard(user.id)} // Копируем ID при клике
                    >
                        {user.id}
                    </span>
                    {copyMessage && <div style={{ marginTop: "5px", color: "green" }}>{copyMessage}</div>} {/* Отображение сообщения */}
                    <br />
                    <span> {localisation.Premium}: </span> {user.premium ? '✓' : '✗'} <br />
                    <span> {localisation.Ref}: </span>{user.referrals} <br />
                    <span> {localisation.Withdrawn}: </span>{user.withdraw} <br />
                    <span> {localisation.Balance}:</span> {formatNumber(user.balance)} <br />
                    <span> $BMEME:</span> 0 <br />
                </div>

                <div style={{ paddingTop: "5%" }}>
                    <MyBtn text={localisation.Premium}
                           onClick={() => setIsModalOpen(true)}
                           disabled={true}
                    />
                </div>
                <div>
                    <MyBtn
                        text={localisation.Change}
                        onClick={() => setIsLangModalOpen(true)}
                    />
                </div>
                <GetPremium show={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            className="Modal"
                            handleNot={setIsVisible}
                            openError={() => setErrorVisible(true)}
                />
                <LanguageModal show={isLangModalOpen} onClose={() => setIsLangModalOpen(false)} />
            </div>
            <ErrorModal show={isErrorVisible} onClose={() => setErrorVisible(false)} />
        </div>
    );
};

export default Profile;
