import React, { useEffect, useState } from 'react';
import "./Profile.css";
import MyBtn from "./MyBtn.js";
import { useUser } from "../Casino/Base_Logic/UserContext.js";
import GetPremium from "./GetPremium.js";
import PremiumNotification from "./PremiumNotification.js";
import LanguageModal from "./LanguageModal.js";
import ErrorModal from "./ErrorModal.js";
import defaultAvatar from "../../images/chromecore 1.png"; // Заглушка, если нет аватарки

const Profile = () => {
    const { user, updateUser } = useUser();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);
    const [avatar, setAvatar] = useState(defaultAvatar); // Состояние для аватарки

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

    const [localisation, setLocalisation] = useState({
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
        Balance: "Balance"
    });

    // useEffect для загрузки аватарки
    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const response = await fetch(`https://geckoshi-stage.up.railway.app/user/chat-photo?id=728740521&type=small_file_id`);
                if (response.ok) {
                    const data = await response.json();
                    setAvatar(data.photo_url); // Обновляем состояние аватарки
                } else {
                    console.error('Ошибка при получении аватарки:', response.statusText);
                }
            } catch (error) {
                console.error('Ошибка сети при получении аватарки:', error);
            }
        };

        fetchAvatar();
    }, []); // Один раз при монтировании компонента

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
                    <span> {localisation.Premium}: </span> {user.premium} <br />
                    <span> {localisation.Ref}: </span>{user.referrals} <br />
                    <span> {localisation.Withdrawn}: </span>{user.withdraw} <br />
                    <span> {localisation.Balance}</span> {user.balance} <br />
                </div>
                <div>
                    <h1>
                        {localisation.WI}
                    </h1>
                    <p>{localisation.Text1}! </p>
                    <p className="p2">{localisation.Text2}</p>
                </div>
                <div>
                    <MyBtn text={localisation.Premium}
                           onClick={openModal}
                           onClose={closeModal}
                           setIsModalOpen={setIsModalOpen}
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
