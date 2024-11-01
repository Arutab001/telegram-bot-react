import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../hooks/useUser';
import { useLanguage } from '../hooks/useLanguage';
import { useLangProfile } from '../hooks/useLangProfile';
import { useToken } from '../hooks/useToken';
import MyBtn from './MyBtn';
import PremiumNotification from './PremiumNotification';
import LanguageModal from './LanguageModal';
import ErrorModal from './ErrorModal';
import defaultAvatar from '../assets/default-avatar.png';
import translations from '../translations'; // убедитесь, что у вас есть файл с переводами

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

    // Функция для обрезки реферальной ссылки
    const getShortRefLink = (refLink, maxLength = 20) => {
        return refLink.length > maxLength
            ? refLink.slice(0, 15) + "..." + refLink.slice(-5)
            : refLink;
    };

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
                const fullRefLink = 'https://t.me/Geckoshi_bot/webapp?startapp=' + user.ref_link.toString();
                await navigator.clipboard.writeText(fullRefLink);
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

        getBalance();
        getEventBalance();
    }, []);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
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

    // Функция для обрезки реферальной ссылки
    const getShortRefLink = (refLink, maxLength = 20) => {
        return refLink.length > maxLength
            ? refLink.slice(0, 15) + "..." + refLink.slice(-5)
            : refLink;
    };

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
                const fullRefLink = 'https://t.me/Geckoshi_bot/webapp?startapp=' + user.ref_link.toString();
                await navigator.clipboard.writeText(fullRefLink);
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

        getBalance();
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
                        <span>{localisation.ref_link}: </span>
                        <span onClick={() => handleCopyId('ref_link')}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            {getShortRefLink(user.ref_link)}
                        </span>
                        {refCopySuccess && <span>{refCopySuccess}</span>} <br />
                        <span>{localisation.Ref}: </span> {user.referrals} <br />
                        <span>{localisation.Withdrawn}: </span> {user.withdraw} <br />
                    </div>
                    <div className="Block">
                        <span>{localisation.Balance}: </span> {formatNumber(user.balance)} <br />
                        <span>$BMEME:</span> 0 <br />
                        <span>🎃🎃🎃: </span> {eventBalance} <br />
                    </div>
                    <div className="Block">
                        <MyBtn text={localisation.WI} onClick={() => setIsVisible(true)} />
                        <span>{localisation.Text1}</span><br />
                        <span>{localisation.Text2}</span><br />
                    </div>
                    <div className="Block">
                        <MyBtn text={localisation.Change} onClick={openLang} />
                    </div>
                </div>
            </div>
            {isLangModalOpen && (
                <LanguageModal isOpen={isLangModalOpen} closeModal={closeLang} />
            )}
            {isErrorVisible && (
                <ErrorModal onClose={() => setErrorVisible(false)} />
            )}
        </div>
    );
};

export default Profile;
