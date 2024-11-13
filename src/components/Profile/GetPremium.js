import React, {useState} from 'react';
import {useUser} from "../Base_Logic/UserContext.js";
import classes from "./getPremium.module.css";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";

const translations = {
    english: {
        PremiumPrice: "Premium Price",
        BuyPremium: "Buy Premium",
    },
    russian: {
        PremiumPrice: "Цена Премиум",
        BuyPremium: "Купить Премиум",
    },
    german: {
        PremiumPrice: "Premium Preis",
        BuyPremium: "Premium Kaufen",
    },
    turkish: {
        PremiumPrice: "Premium Fiyatı",
        BuyPremium: "Premium Satın Al",
    },
};


const GetPremium = ({show, onClose, handleNot, setIsModalOpen, openError, closeModal}) => {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const { userLanguage } = useLangProfile();
    const {user, updateUser} = useUser();

    const localisation = translations[userLanguage] || translations[user.language] ||  translations.english


    const getPremium = (e) => {
        e.preventDefault();
        if (!user.premium) {
            if (user.referrals > 30000) {
                handleNot(true);
                setNotificationVisible(true);
                user.premium = true;
            } else {
                closeModal(e);
                openError(e);
            }
        }

    };


    if (!show) {
        return null;
    }

    return (
        <div className={classes.modal_overlay}>
            <div className={classes.modal_content}>
                <div>
                    <h2 style={{fontSize: "8vw"}}>{localisation.PremiumPrice}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="10vw" height="10vh" viewBox="0 0 86 86"
                         fill="none" style={{position: "absolute", top: "-10", right: "-10"}}
                         onClick={onClose}>
                        <circle cx="43" cy="43" r="41.5" fill="#D9FFD2" stroke="#6D8069" stroke-width="3"/>
                        <path d="M26.0415 26.0417L58.9582 58.9584M26.0415 58.9584L58.9582 26.0417" stroke="#6D8069"
                              stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={classes.Text}>
                    <p>30 000 $GMEME</p>
                    <div className={classes.buttonGetPremium}>
                        <button onClick={getPremium} style={{backgroundColor: "#6D8069"}}>{localisation.BuyPremium}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetPremium;
