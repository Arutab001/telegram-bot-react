// Check.js
import React, {useEffect, useState} from 'react';
import ChecksStyle from './Check.module.css';
import gecko from '../../../images/gecko_coin_rem 1.png'
import CreateCheckStyles from "../CreateCheck/CreateCheck.module.css";
import {useLocation} from "react-router-dom";
import {useLangProfile} from "../../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../../Base_Logic/UserContext.js";

const translations = {
    english: {
        userId: "User Id:",
        link: "Link:",
        amount: "Amount:",
        status: "Status:",
        password: "Password:",
        activationLimit: "Activation Limit:",
        requiredSubscriptions: "Required Subscriptions:",
        connectedToUser: "Connected to User:",
        copySuccess: "Copied successfully!",
        copyError: "Failed to copy!",
    },
    russian: {
        userId: "ID пользователя:",
        link: "Ссылка:",
        amount: "Сумма:",
        status: "Статус:",
        password: "Пароль:",
        activationLimit: "Лимит активации:",
        requiredSubscriptions: "Необходимые подписки:",
        connectedToUser: "Подключено к пользователю:",
        copySuccess: "Успешно скопировано!",
        copyError: "Ошибка копирования!",
    },
    german: {
        userId: "Benutzer-ID:",
        link: "Link:",
        amount: "Betrag:",
        status: "Status:",
        password: "Passwort:",
        activationLimit: "Aktivierungsgrenze:",
        requiredSubscriptions: "Erforderliche Abonnements:",
        connectedToUser: "Verbunden mit Benutzer:",
        copySuccess: "Erfolgreich kopiert!",
        copyError: "Kopieren fehlgeschlagen!",
    },
    turkish: {
        userId: "Kullanıcı ID:",
        link: "Bağlantı:",
        amount: "Miktar:",
        status: "Durum:",
        password: "Şifre:",
        activationLimit: "Aktivasyon Limiti:",
        requiredSubscriptions: "Gerekli Abonelikler:",
        connectedToUser: "Kullanıcıya Bağlandı:",
        copySuccess: "Başarıyla kopyalandı!",
        copyError: "Kopyalama hatası!",
    }
}



const Check = () => {
    const {user} = useUser();
    const location = useLocation();
    const {userLanguage} = useLangProfile();
    const localisation = translations[userLanguage] || translations[user.language] || translations.english;
    const {
        currency,
        amount,
        total,
        name,
        link,
        status,
        connected_to_user,
        password,
        type,
        require_subscriptions,
        activation_limit
    } = location.state || {};

    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyLink = async (link) => {
        if (!navigator.clipboard) {
            console.error("Clipboard API не поддерживается этим браузером");
            setCopySuccess(localisation.copyError);
            return;
        }
        try {
            await navigator.clipboard.writeText("https://t.me/arutabustestbot/GeckoshiTest?startapp=" + link.toString());
            setCopySuccess(localisation.copySuccess);
        } catch (e) {
            console.error(e);
            setCopySuccess(localisation.copyError);
        }
    };



    return (
        <div className={ChecksStyle.checkCard}>
            <div className={ChecksStyle.checkHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 188 188" fill="none">
                    <circle cx="94" cy="94" r="94" fill="url(#paint0_linear_596_529)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M70.19 41.0313H118.561C123.58 41.0313 127.035 41.0313 129.942 42.0435C132.658 43.0094 135.116 44.5916 137.126 46.6671C139.135 48.7426 140.642 51.2557 141.53 54.0115C142.497 56.9737 142.492 60.4966 142.492 65.7215V135.922C142.492 143.196 133.969 147.523 128.357 142.357C128.177 142.184 127.938 142.088 127.689 142.088C127.439 142.088 127.2 142.184 127.02 142.357L124.631 144.551C120.051 148.768 113.112 148.768 108.532 144.551C107.703 143.772 106.611 143.34 105.477 143.34C104.343 143.34 103.251 143.772 102.422 144.551C97.8425 148.768 90.9034 148.768 86.3235 144.551C85.4945 143.772 84.4027 143.34 83.2686 143.34C82.1344 143.34 81.0426 143.772 80.2136 144.551C75.6337 148.768 68.6947 148.768 64.1147 144.551L61.731 142.357C61.5507 142.183 61.3101 142.085 61.0598 142.085C60.8094 142.085 60.5688 142.183 60.3886 142.357C54.7771 147.518 46.2539 143.196 46.2539 135.922V65.7264C46.2539 60.4966 46.2539 56.9737 47.2163 54.0115C48.1037 51.2557 49.6107 48.7426 51.6203 46.6671C53.63 44.5916 56.0882 43.0094 58.8043 42.0435C61.7162 41.0263 65.1709 41.0313 70.19 41.0313ZM70.9057 48.474C64.8797 48.474 62.8019 48.5237 61.2325 49.0744C59.5934 49.6652 58.1115 50.6273 56.9014 51.886C55.6913 53.1448 54.7855 54.6666 54.254 56.3336C53.7062 58.0107 53.6618 60.2237 53.6618 66.436V135.922C53.6618 136.517 53.953 136.875 54.3231 137.048C54.492 137.129 54.6803 137.16 54.866 137.138C55.0657 137.103 55.2501 137.008 55.3941 136.865C56.9384 135.435 58.9607 134.642 61.0598 134.642C63.1588 134.642 65.1812 135.435 66.7255 136.865L69.1092 139.058C69.9382 139.836 71.03 140.269 72.1642 140.269C73.2983 140.269 74.3902 139.836 75.2191 139.058C77.4126 137.026 80.286 135.898 83.2686 135.898C86.2511 135.898 89.1246 137.026 91.318 139.058C92.147 139.836 93.2388 140.269 94.373 140.269C95.5071 140.269 96.5989 139.836 97.4279 139.058C99.6213 137.026 102.495 135.898 105.477 135.898C108.46 135.898 111.333 137.026 113.527 139.058C114.356 139.836 115.448 140.269 116.582 140.269C117.716 140.269 118.808 139.836 119.637 139.058L122.02 136.865C123.565 135.435 125.587 134.642 127.686 134.642C129.785 134.642 131.808 135.435 133.352 136.865C133.564 137.063 133.747 137.123 133.885 137.138C134.069 137.159 134.255 137.128 134.423 137.048C134.793 136.875 135.089 136.512 135.089 135.922V66.436C135.089 60.2237 135.04 58.0107 134.497 56.3287C133.964 54.6615 133.056 53.14 131.844 51.8821C130.632 50.6241 129.149 49.6635 127.508 49.0744C125.944 48.5286 123.866 48.479 117.84 48.479L70.9057 48.474ZM109.184 71.7452C109.547 72.0707 109.843 72.4651 110.055 72.9058C110.266 73.3464 110.389 73.8247 110.417 74.3132C110.444 74.8018 110.376 75.2909 110.215 75.7528C110.054 76.2146 109.804 76.6401 109.48 77.0048L91.851 96.8522C91.5038 97.2433 91.0783 97.5561 90.6025 97.7704C90.1266 97.9846 89.6111 98.0954 89.0897 98.0954C88.5683 98.0954 88.0528 97.9846 87.577 97.7704C87.1011 97.5561 86.6757 97.2433 86.3284 96.8522L79.2808 88.9132C78.6331 88.1766 78.3017 87.2122 78.3589 86.2306C78.4161 85.2491 78.8574 84.3302 79.5863 83.6747C80.3152 83.0192 81.2726 82.6804 82.2492 82.7322C83.2258 82.784 84.1423 83.2223 84.7985 83.9514L89.0922 88.7842L103.957 72.0479C104.281 71.6829 104.672 71.3856 105.11 71.1729C105.548 70.9602 106.023 70.8362 106.508 70.8081C106.993 70.78 107.48 70.8483 107.939 71.0091C108.398 71.1699 108.821 71.42 109.184 71.7452ZM68.4676 111.738C68.4676 110.751 68.8576 109.804 69.5518 109.106C70.2459 108.408 71.1874 108.016 72.1691 108.016H116.587C117.568 108.016 118.51 108.408 119.204 109.106C119.898 109.804 120.288 110.751 120.288 111.738C120.288 112.725 119.898 113.671 119.204 114.369C118.51 115.067 117.568 115.459 116.587 115.459H72.1691C71.1874 115.459 70.2459 115.067 69.5518 114.369C68.8576 113.671 68.4676 112.725 68.4676 111.738Z"
                          fill="#212121"/>
                    <defs>
                        <linearGradient id="paint0_linear_596_529" x1="188" y1="0" x2="0" y2="188"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#FFEB3B"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h1>{name}</h1>
            </div>
            <div className={ChecksStyle.CheckBody}>
                <div className={ChecksStyle.CheckBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 804 732"
                         preserveAspectRatio="xMidYMid slice"
                         width="100%" height="auto">
                        <path
                            d="M0 0C0 0 28.5028 24 50.25 24C71.9972 24 78.7528 0 100.5 0C122.247 0 129.003 24 150.75 24C172.497 24 179.253 0 201 0C222.747 0 229.503 24 251.25 24C272.997 24 279.753 0 301.5 0C323.247 0 330.003 24 351.75 24C373.497 24 380.253 0 402 0C423.747 0 430.503 24 452.25 24C473.997 24 480.753 0 502.5 0C524.247 0 531.003 24 552.75 24C574.497 24 581.253 0 603 0C624.747 0 631.503 24 653.25 24C674.997 24 681.753 0 703.5 0C725.247 0 732.003 24 753.75 24C775.497 24 804 0 804 0V227.5C804 227.5 789 227.5 789 242C789 256.5 804 256.5 804 256.5V732C804 732 775.668 707 753.75 707C731.832 707 725.418 732 703.5 732C681.582 732 675.168 707 653.25 707C631.332 707 624.918 732 603 732C581.082 732 574.668 707 552.75 707C530.832 707 524.418 732 502.5 732C480.582 732 474.168 707 452.25 707C430.332 707 423.918 732 402 732C380.082 732 373.668 707 351.75 707C329.832 707 323.418 732 301.5 732C279.582 732 273.168 707 251.25 707C229.332 707 222.918 732 201 732C179.082 732 172.668 707 150.75 707C128.832 707 122.418 732 100.5 732C78.5817 732 72.1683 707 50.25 707C28.3317 707 0 732 0 732V256.5C0 256.5 15 256.5 15 242C15 227.5 0 227.5 0 227.5L0 0Z"
                            fill="#DADADA"/>
                    </svg>
                </div>
                <div className={ChecksStyle.CheckText}>
                    <div className={ChecksStyle.BoxHeader}>
                        <h2>
                            <img src={gecko} className={ChecksStyle.coinImage}/>

                        </h2>
                        <h2 style={{marginLeft: "5%"}}>{Math.floor(amount)}$ GMEME</h2>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "xx-large",
                        fontFamily: "Nunito"
                    }}>
                        <div>
                            ----
                        </div>
                        <div>
                            ----
                        </div>
                    </div>

                    <span
                        onClick={() => handleCopyLink(link)}
                        className={ChecksStyle.Text}>{localisation.link} https://t.me/arutabustestbot/GeckoshiTest?startapp={link}</span>
                    <br/>
                    {copySuccess && <div>{copySuccess}</div>}
                    <span className={ChecksStyle.Text}>{localisation.status} {status}</span> <br/>
                    <span className={ChecksStyle.Text}>{localisation.password} {password}</span> <br/>
                    {type === 'single' ? (
                        <>
                            <span className={ChecksStyle.Text}>{localisation.userId} {connected_to_user}</span> <br/>

                        </>
                    ) : (
                        <>

                            <span className={ChecksStyle.Text}>{localisation.activationLimit} {activation_limit}</span>
                            <span className={ChecksStyle.Text}>{localisation.requiredSubscriptions} {require_subscriptions}</span>
                        </>
                    )}


                </div>
            </div>
        </div>
    )
        ;
};

export default Check;
