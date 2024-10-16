import React, { useEffect, useState } from 'react';
import "./Profile.css";
import MyBtn from "./MyBtn.js";
import { useUser } from "../Base_Logic/UserContext.js";
import GetPremium from "./GetPremium.js";
import PremiumNotification from "./PremiumNotification.js";
import LanguageModal from "./LanguageModal.js";
import ErrorModal from "./ErrorModal.js";
import defaultAvatar from "../../images/sticker 1.png";
import {useLanguage} from "../Base_Logic/LanguageContext.js";
import axios from "axios";
import {useToken} from "../Base_Logic/TelegramAuth.js";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js"; // Заглушка, если нет аватарки

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
    },
};


const Profile = () => {
    const { user, updateUser, handleUserBalance } = useUser();
    const {language} = useLanguage();
    const { userLanguage } = useLangProfile();
    const {token} = useToken();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);
    const [avatar, setAvatar] = useState(defaultAvatar); // Состояние для аватарки

    const localisation = translations[userLanguage] || translations[user.language] ||  translations.english;

    const openLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(true);
    };

    const closeLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(false);
    };

    const handleIsVisible = (param) =>
        setIsVisible(param);

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    };

    const openError = (e) => {
        e.preventDefault();
        setErrorVisible(true);
    };

    const closeError = (e) => {
        e.preventDefault();
        setErrorVisible(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(handleIsVisible(false), 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isVisible]);

    useEffect(()  =>{
        const getbalance = async () => {
            try {
                const response = await axios.get('/coin/balance');
                if (response.status === 200){
                    handleUserBalance(response.data.data.GMEME);
                }
            }
            catch (e) {
                console.log("Balance error:");
                console.error(e)
            }
        }
        getbalance();
    }, [])

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <PremiumNotification isVisible={isVisible} />
            <div className="profile">
                <div>
                    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
                        <img src={avatar} // Используем состояние аватарки
                             alt="User Avatar"
                             style={{ width: "15%", height: "100%", borderRadius: "100%", margin: "5%" }} />
                        <h1>
                            {localisation.Info}
                        </h1>
                    </div>
                    <span>{localisation.Name}: </span> {user.name} <br />
                    <span> {localisation.Id}: </span> {user.id}<br />
                    <span> {localisation.Premium}: </span> {user.premium ? '✓' : '✗'} <br />
                    <span> {localisation.Ref}: </span>{user.referrals} <br />
                    <span> {localisation.Withdrawn}: </span>{user.withdraw} <br />
                    <span> {localisation.Balance}:</span> {formatNumber(user.balance)} <br />
                    <span> $BMEME:</span> 0 <br />
                </div>

                <div style={{paddingTop: "5%"}}>
                    <MyBtn text={localisation.Premium}
                           onClick={openModal}
                           onClose={(e) => closeModal(e)}
                           setIsModalOpen={setIsModalOpen}
                           disabled={true}
                    />
                </div>
                <div>
                    <MyBtn
                        text={localisation.Change}
                        onClick={openLang}
                    />
                </div>
                <GetPremium show={isModalOpen}
                            onClose={closeModal}
                            className="Modal"
                            closeModal={closeModal}
                            handleNot={handleIsVisible}
                            openError={openError}
                />
                <LanguageModal show={isLangModalOpen} onClose={closeLang} />
            </div>
            <ErrorModal show={isErrorVisible} onClose={closeError} />
        </div>
    );
};

export default Profile;
