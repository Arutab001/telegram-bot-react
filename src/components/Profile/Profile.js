import React, {useEffect, useState} from 'react';
import "./Profile.css";
import MyBtn from "./MyBtn.js";
import {useUser} from "../../UserContext.js";
import GetPremium from "./GetPremium.js";
import PremiumNotification from "./PremiumNotification.js";
import LanguageModal from "./LanguageModal.js";
import ErrorModal from "./ErrorModal.js";
import new_ava from "../../images/chromecore 1.png"

const Profile = () => {

    const {user, updateUser} = useUser();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const [isLangModalOpen, setIsLangModalOpen] = useState(false);

    const [isErrorVisible, setErrorVisible] = useState(false);

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

    const openError = (e) => {
        e.preventDefault()
        setErrorVisible(true);
    }

    const closeError = (e) => {
        e.preventDefault();
        setErrorVisible(false);
    }

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
        Change: "Change Language"

    })

    let avatar = window.Telegram.WebApp.initDataUnsafe.user.photo_url;

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <PremiumNotification isVisible={isVisible}/>
            <div className="profile">
                <div>
                    <div style={{display: "flex", height: "100%", alignItems: "center"}}>
                        <img src={avatar}
                             style={{width: "15%", height: "100%", borderRadius: "100%", margin: "5%"}}/>
                        <h1>
                            {localisation.Info}
                        </h1>
                    </div>
                    <span>{localisation.Name}: </span> {user.name} <br/>
                    <span> {localisation.Id}: </span> {user.id}<br/>
                    <span> {localisation.Premium}: </span> {user.premium.toString()} <br/>
                    <span> {localisation.Ref}: </span>{user.referrals} <br/>
                    <span> {localisation.Withdrawn}: </span>{user.withdraw} <br/>
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
                <LanguageModal show={isLangModalOpen} onClose={closeLang}/>
            </div>
            <ErrorModal show={isErrorVisible} onClose={closeError}/>
        </div>
    );
};

export default Profile;