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
        copySuccess: "ID copied!",
        copyError: "Error copying ID",
        ref_link: "Referral link"
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
        copySuccess: "ID скопирован!",
        copyError: "Ошибка при копировании ID",
        ref_link: "Реферальная ссылка"
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
        copySuccess: "ID kopiert!",
        copyError: "Fehler beim Kopieren der ID",
        ref_link: "Empfehlungslink"
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
        copySuccess: "ID kopyalandı!",
        copyError: "ID kopyalanırken hata oluştu",
        ref_link: "Yönlendirme bağlantısı"
    },
};

const Profile = () => {
    const { user, updateUser, handleUserBalance } = useUser();
    const { language } = useLanguage();
    const { userLanguage } = useLangProfile();
    const { token } = useToken();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [copySuccess, setCopySuccess] = useState('');
    const [refCopySuccess, setRefCopySuccess] = useState('');

    const localisation = translations[userLanguage] || translations[user.language] || translations.english;

    const [eventBalance, setEventBalance] = useState('');

    const handleCopyId = async (param) => {
        if (!navigator.clipboard) {
            console.error("Clipboard API не поддерживается этим браузером");
            param === 'id' ? setCopySuccess(localisation.copyError) : setRefCopySuccess(localisation.copyError);
            return;
        }
        try {
            if (param === 'id') {
                await navigator.clipboard.writeText(user.id.toString());
                setCopySuccess(localisation.copySuccess);
            } else {
                await navigator.clipboard.writeText('https://t.me/Geckoshi_bot/webapp?startapp=' + user.ref_link.toString());
                setRefCopySuccess(localisation.copySuccess);
            }
        } catch (e) {
            console.error(e);
            param === 'id' ? setCopySuccess(localisation.copyError) : setRefCopySuccess(localisation.copyError);
        }
    };

    useEffect(() => {
        if (copySuccess || refCopySuccess) {
            const timer = setTimeout(() => {
                setCopySuccess('');
                setRefCopySuccess('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [copySuccess, refCopySuccess]);

    const openLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(true);
    };

    const closeLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(false);
    };

    useEffect(() => {
        const getbalance = async () => {
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
        const getEventBalance = async () => {
            try {
                const response = await axios.get('/event-bonus/balance?event_id=1');
                if (response.status === 200) {
                    setEventBalance(response.data.data.balance);
                }
            } catch (e) {
                console.error(e);
            }
        }
        getbalance();
        getEventBalance();
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
                        <img
                            src={avatar}
                            alt="User Avatar"
                            style={{ width: "15%", height: "100%", borderRadius: "100%", margin: "5%" }}
                        />
                        <h1>{localisation.Info}</h1>
                    </div>
                    <div className="Block">
                        <span>{localisation.Name}: </span> {user.name} <br />
                        <span>{localisation.Id}: </span>
                        <span onClick={() => handleCopyId('id')}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >{user.id}</span>
                        {copySuccess && <span>{copySuccess}</span>}
                        <br />
                    </div>
                    <div className="Block">
                        <span>{localisation.Premium}: </span> {user.premium ? '✓' : '✗'} <br />
                        <span> {localisation.ref_link}: </span>
                        <span onClick={() => handleCopyId('ref_link')}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >{user.ref_link}</span>
                        {refCopySuccess && <span>{refCopySuccess}</span>} <br />
                                                <span>{localisation.Ref}: </span> {user.referrals} <br />
                        <span>{localisation.Withdrawn}: </span> {user.withdrawn} <br />
                        <span>{localisation.WI}: </span> {user.withdrawn_info} <br />
                        <span>{localisation.Text1}</span> <br />
                        <span>{localisation.Text2}</span> <br />
                    </div>
                    <div className="Block">
                        <span>{localisation.Balance}: </span> {formatNumber(user.balance)} <br />
                        <span>Event Balance: </span> {formatNumber(eventBalance)} <br />
                    </div>
                    <div className="buttons">
                        <MyBtn onClick={() => setIsModalOpen(true)} text={localisation.Change} />
                        <GetPremium />
                    </div>
                </div>
            </div>
            {isLangModalOpen && <LanguageModal onClose={closeLang} />}
            {isErrorVisible && <ErrorModal onClose={() => setErrorVisible(false)} />}
        </div>
    );
};

export default Profile;

