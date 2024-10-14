import React from 'react';
import "./ErrorModal.css"
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../Base_Logic/UserContext.js";

const translations = {
    english: {
        PremiumWarning: "Premium Warning",
        NotEnoughGMEME: `<p>You don't have <br/> enough $GMEME  <br/> to buy 'Premium'</p>`,
    },
    russian: {
        PremiumWarning: "Предупреждение о Премиум",
        NotEnoughGMEME: `<p>У вас недостаточно <br/> $GMEME <br/> для покупки 'Премиум'</p>`,
    },
    german: {
        PremiumWarning: "Premium-Warnung",
        NotEnoughGMEME: `<p>Sie haben nicht genügend <br/> $GMEME <br/> um 'Premium' zu kaufen</p>`,
    },
    turkish: {
        PremiumWarning: "Premium Uyarısı",
        NotEnoughGMEME: `<p>'Premium' satın almak için <br/> yeterli $GMEME'niz yok</p>`,
    },
};


const ErrorModal = ({show, onClose}) => {

    if (!show) return null;


    const { userLanguage } = useLangProfile();
    const {user, updateUser} = useUser();

    const localisation = translations[userLanguage] || translations[user.language] ||  translations.english

    return (
        <div className="error-overlay">
            <div className="error-content">
                <h2>
                    {localisation.PremiumWarning}
                </h2>
                <div style={{display: "flex", flexDirection: "column", height: "80%", alignItems: "center", paddingBottom: "5%"}}>
                    <div style={{height: "50%", textAlign: "center"}}>
                        {localisation.NotEnoughGMEME}
                    </div>
                    <button onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
