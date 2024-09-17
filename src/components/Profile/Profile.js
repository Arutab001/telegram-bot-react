import React, {useEffect, useState} from 'react';
import "./Profile.css";
import MyBtn from "./MyBtn.js";
import {useUser} from "../../UserContext.js";
import GetPremium from "./GetPremium.js";
import PremiumNotification from "./PremiumNotification.js";
import LanguageModal from "./LanguageModal.js";

const Profile = () => {

    const {user, updateUser} = useUser();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const [isLangModalOpen, setIsLangModalOpen] = useState(false);

    const openLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(true);
    }

    const closeLang = (e) => {
        e.preventDefault();
        setIsLangModalOpen(false);
    }

    const handleIsVisible = (param) =>
        setIsVisible(param);

    const openModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    };

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(false); // Скрыть уведомление
            setTimeout(handleIsVisible(false), 500); // Закрыть уведомление после анимации
        }, 3000);

        return () => clearTimeout(timer); // Очистить таймер при размонтировании компонента
    }, [isVisible]);
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <PremiumNotification isVisible={isVisible} />
            <div className="profile">
                <div>
                    <h1>
                        Account Info
                    </h1>
                    Name: {user.name} <br/>
                    Your ID: {user.id}<br/>
                    Premium: {user.premium} <br/>
                    Referrals: {user.referrals} <br/>
                    Withdrawn: {user.withdraw} <br/>
                </div>
                <div>
                    <h1>
                        Withdraw Info
                    </h1>
                    <p>We will notify you in advance about payouts! </p>
                    <p>MINIMUM WITHDRAWAL WILL BE 0 ON AIRDROP TODAY</p>
                </div>
                <div>
                    <MyBtn text="Premium"
                           onClick={openModal}
                           onClose={closeModal}
                           setIsModalOpen={setIsModalOpen}
                    />
                </div>
                <div>
                    <MyBtn
                        text="Change Language"
                        onClick={openLang}
                    />
                </div>
                <GetPremium show={isModalOpen}
                            onClose={closeModal}
                            className="Modal"
                            closeModal={closeModal}
                            handleNot={handleIsVisible}
                />
                <LanguageModal show={isLangModalOpen} onClose={closeLang}/>
            </div>
        </div>
    );
};

export default Profile;