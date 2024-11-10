// Rename Notification to CustomNotification
import React, { useEffect, useState } from 'react';
import './Notification.css';
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../Base_Logic/UserContext.js";

const translations = {
    english: {
        ActivatedPremium: "You activated 'Premium'.",
    },
    russian: {
        ActivatedPremium: "Вы активировали 'Премиум'.",
    },
    german: {
        ActivatedPremium: "Sie haben 'Premium' aktiviert.",
    },
    turkish: {
        ActivatedPremium: "'Premium' aktiv edildi.",
    },
};


const PremiumNotification = ({ message, onClose, isVisible }) => {

    const { userLanguage } = useLangProfile();
    const {user, updateUser} = useUser();

    const localisation = translations[userLanguage] || translations[user.language] ||  translations.english


    return (
        <div className={`notification ${isVisible ? 'show' : 'hide'}`}>
            {localisation.ActivatedPremium}
        </div>
    );
};

export default PremiumNotification;
