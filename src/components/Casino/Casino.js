import React, {useEffect, useState} from 'react';
import "./CasinoPage.css";
import MyBtn from "../Profile/MyBtn.js";
import CombinationModal from "./CombinationModal.js";
import CasinoInfo from "./CasinoInfo.js";
import MySelect from "./MySelect/MySelect.js";
import {useUser} from "../Base_Logic/UserContext.js";
import axios from "axios";
import {useLanguage} from "../Base_Logic/LanguageContext.js";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";


const slots = {
    fruits: ["🦎", "🏜️", "🏖️", "🏕️", "✈️", "🚀", "🪲", "🐞", "🐝"]
};

const win_translations = {
    english: "🎉 Congratulations, you won: {amount} $GMEME\n🎰 Your winning combination: {combination}",
    russian: "🎉 Поздравляем, ты выиграл: {amount} $GMEME\n🎰 Твоя выигрышная комбинация: {combination}",
    german: "🎉 Glückwunsch, du hast gewonnen: {amount} $GMEME\n🎰 Deine Gewinnkombination: {combination}",
    turkish: "🎉 Tebrikler, kazandınız: {amount} $GMEME\n🎰 Kazanan kombinasyonunuz: {combination}",
};


const lose_translations = {
    english:
        "🃏 Unfortunately, you lost this time - your bet ({amount} $GMEME) didn't win.\n" +
        "🎰 Your combination: {combination}\n" +
        "Try again, luck will surely be on your side!",

    russian:
        "🃏 К сожалению, в этот раз тебе не повезло - ты проиграл ставку ({amount} $GMEME).\n" +
        "🎰 Твоя комбинация: {combination}\n" +
        "Попробуй ещё раз, тебе обязательно повезёт!",

    german:
        "🃏 Leider hattest du diesmal kein Glück – dein Einsatz ({amount} $GMEME) ging verloren.\n" +
        "🎰 Deine Kombination: {combination}\n" +
        "Versuche es noch einmal, das Glück wird sicher auf deiner Seite sein!",

    turkish:
        "🃏 Maalesef bu sefer şansın yaver gitmedi - bahsini ({amount} $GMEME) kaybettin.\n" +
        "🎰 Kombinasyonun: {combination}\n" +
        "Tekrar dene, şans kesinlikle yanında olacak!",
};



const Casino = () => {

    const {user, updateUser} = useUser();
    const {language} = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const { userLanguage } = useLangProfile();
    const win_localisation = win_translations[userLanguage] || win_translations[user.language] || win_translations.english;
    const lose_localisation = lose_translations[userLanguage] || lose_translations[user.language] || lose_translations.english
    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };
    const OpenModal = () => {
        setIsModalOpen(true);
    }

    const CloseModal = () => {
        setIsModalOpen(false);
    }

    const [localisation, setLocalisation] = useState("BET");

    const [WinAmount, setWinAMount] = useState(-1);

    const [rolling, setRolling] = useState(false);
    const [win, setWin] = useState(false);
    const [spunOnce, setSpunOnce] = useState(false);
    const [results, setResults] = useState({
        Fruit1: "🦎",
        Fruit2: "🦎",
        Fruit3: "🦎",
    });
    const [displayedResults, setDisplayedResults] = useState({
        Fruit1: "🦎",
        Fruit2: "🦎",
        Fruit3: "🦎",
    });

    const getRandomFruit = () => {
        return slots.fruits[Math.floor(Math.random() * slots.fruits.length)];
    };

    const getResultsFromServer = async () => {
        return await axios.post(`/slots/play?id=${user.id}&amount=${selectedValue}`);
    };

    const [upString, setUpString] = useState('');

    useEffect(() => {
        let interval;

        if (rolling) {
            // Запускаем анимацию смены фруктов
            interval = setInterval(() => {
                setDisplayedResults({
                    Fruit1: getRandomFruit(),
                    Fruit2: getRandomFruit(),
                    Fruit3: getRandomFruit(),
                });
            }, 100); // Фрукты меняются каждые 100 мс
        } else {
            setDisplayedResults(results); // Устанавливаем реальные результаты с сервера
            if (spunOnce && results.Fruit1 === results.Fruit2 && results.Fruit2 === results.Fruit3) {
                setWin(true);
            } else {
                setWin(false);
            }
        }

        return () => clearInterval(interval); // Очищаем интервал при завершении анимации
    }, [rolling, results]);

    const spinResult = async () => {
        console.log(user.language);
        if (selectedValue > 0) {
            if (user.balance > selectedValue) {
                setRolling(true);
                setSpunOnce(true);
                const slots = {
                    fruits: ["🦎", "🏜️", "🏖️", "🏕️", "✈️", "🚀", "🪲", "🐞", "🐝"]
                };

                const serverResponse = await getResultsFromServer();
                console.log(serverResponse.data.data);
                const combination = serverResponse.data.data.combination;
                setWinAMount(serverResponse.data.data.win_amount)
                console.log(combination);

                setTimeout(() => {
                    setRolling(false); // Останавливаем "вращение"

                    // Убедимся, что у нас есть 3 эмодзи для отображения
                    setResults({
                        Fruit1: combination[0],
                        Fruit2: combination[1],
                        Fruit3: combination[2]
                    });

                    setDisplayedResults({
                        Fruit1: combination[0],
                        Fruit2: combination[1],
                        Fruit3: combination[2]
                    });

                }, 700);
                if (serverResponse.data.data.win_amount === 0){
                    const message = lose_localisation
                        .replace("{amount}", selectedValue)
                        .replace("{combination}", combination);
                    setUpString(message);
                }
                else {
                    const message = win_localisation
                        .replace("{amount}", serverResponse.data.data.win_amount)
                        .replace("{combination}", combination);
                    setUpString(message);
                }
            } else {
                setUpString(language.slots_not_enough_to_play)
            }
        }
    };


    return (
        <div>
            <CasinoInfo/>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column", marginTop: "5%"}}>
                <div className="CasinoCard" style={{position: "relative"}}>
                    <div>{upString}</div>
                    <svg onClick={OpenModal} style={{position: "absolute", right: "5px", top: "5px"}}
                         xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="30" fill="#6D8069"/>
                        <path
                            d="M33.4131 43.4795C33.4131 44.673 32.939 45.8176 32.0951 46.6615C31.2512 47.5054 30.1066 47.9795 28.9131 47.9795C27.7196 47.9795 26.575 47.5054 25.7311 46.6615C24.8872 45.8176 24.4131 44.673 24.4131 43.4795C24.4131 42.286 24.8872 41.1414 25.7311 40.2975C26.575 39.4536 27.7196 38.9795 28.9131 38.9795C30.1066 38.9795 31.2512 39.4536 32.0951 40.2975C32.939 41.1414 33.4131 42.286 33.4131 43.4795Z"
                            fill="#D9FFD2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M28.8477 17.7213C27.3402 17.7213 26.0465 18.1713 25.1352 18.8148C24.2577 19.4358 23.8235 20.158 23.6975 20.7813C23.5113 21.6144 23.006 22.3413 22.29 22.8062C21.574 23.271 20.7044 23.4367 19.8676 23.2677C19.0309 23.0987 18.2937 22.6084 17.8142 21.9022C17.3347 21.1959 17.1512 20.3298 17.303 19.4898C17.8137 16.9563 19.3842 14.8885 21.3732 13.4823C23.4432 12.0198 26.0667 11.1963 28.8477 11.1963C34.601 11.1963 40.5657 15.0438 40.5657 21.2223C40.5657 24.7998 38.4394 27.6933 35.6854 29.3808C34.9473 29.8325 34.0599 29.9725 33.2185 29.77C32.3771 29.5674 31.6507 29.039 31.199 28.3008C30.7472 27.5626 30.6072 26.6752 30.8098 25.8339C31.0123 24.9925 31.5408 24.266 32.2789 23.8143C33.5614 23.029 34.0407 22.0278 34.0407 21.2223C34.0407 19.9308 32.432 17.7213 28.8477 17.7213Z"
                              fill="#D9FFD2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M28.8475 26.4175C30.6475 26.4175 32.11 27.8755 32.11 29.68V33.0595C32.11 33.9247 31.7662 34.7546 31.1544 35.3664C30.5426 35.9783 29.7127 36.322 28.8475 36.322C27.9822 36.322 27.1524 35.9783 26.5405 35.3664C25.9287 34.7546 25.585 33.9247 25.585 33.0595V29.68C25.585 27.88 27.0452 26.4175 28.8475 26.4175Z"
                              fill="#D9FFD2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M36.7878 24.9236C37.0082 25.2914 37.1539 25.699 37.2166 26.1232C37.2794 26.5473 37.2579 26.9797 37.1534 27.3956C37.0489 27.8114 36.8635 28.2026 36.6077 28.5467C36.3519 28.8908 36.0308 29.1812 35.6628 29.4011L30.5238 32.4769C29.7814 32.9214 28.8929 33.0529 28.0536 32.8423C27.2143 32.6318 26.4931 32.0965 26.0485 31.3541C25.6039 30.6118 25.4725 29.7232 25.683 28.884C25.8936 28.0447 26.4289 27.3234 27.1713 26.8789L32.3125 23.8009C32.6802 23.5808 33.0877 23.4354 33.5116 23.3728C33.9355 23.3103 34.3676 23.3319 34.7832 23.4363C35.1988 23.5408 35.5897 23.7261 35.9336 23.9817C36.2776 24.2373 36.5678 24.5559 36.7878 24.9236Z"
                              fill="#D9FFD2"/>
                    </svg>
                    <div className="slots">
                        <div className="slot">{displayedResults.Fruit1}</div>
                        <div className="slot">{displayedResults.Fruit2}</div>
                        <div className="slot">{displayedResults.Fruit3}</div>
                    </div>
                    <div className="Card_Bottom">
                        <MySelect onValueChange={handleSelectChange}/>
                        <MyBtn text={localisation} onClick={spinResult}/>
                    </div>
                </div>
                <CombinationModal show={isModalOpen} close={CloseModal}/>
            </div>
        </div>
    );
};

export default Casino;