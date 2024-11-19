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

const HelloWeen = {
    fruits: ["🎃", "👻", "💀", "🧟", "🔪", "🕯️", "⚰️", "🕷️", "🏚️"]
}

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

    const [balance, handleBalance] = useState(user.balance);

    const setBalance = (new_balance) => {
        handleBalance(new_balance);
    }

    const {language} = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const { userLanguage } = useLangProfile();
    const win_localisation = win_translations[userLanguage] || win_translations[user.language] ||  win_translations.english;
    const lose_localisation = lose_translations[userLanguage] || lose_translations[user.language] || lose_translations.english
    const handleSelectChange = (value) => {
        setSelectedValue(value);
    };

    const OpenModal = () => {
        setIsModalOpen(true);
    }

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

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
        return slots.fruits[Math.floor(Math.random() * HelloWeen.fruits.length)];
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
        if (selectedValue > 0) {
            if (user.balance > selectedValue) {
                setRolling(true);
                setSpunOnce(true);
                const slots = {
                    fruits: ["🦎", "🏜️", "🏖️", "🏕️", "✈️", "🚀", "🪲", "🐞", "🐝"]
                };

                const HelloWeen = {
                    fruits: ["🎃", "👻", "💀", "🧟", "🔪", "🕯️", "⚰️", "🕷️", "🏚️"]
                };

                const serverResponse = await getResultsFromServer();
                console.log(serverResponse.data.data);
                const combination = serverResponse.data.data.combination;
                setWinAMount(serverResponse.data.data.win_amount);
                console.log(combination);

                // Преобразование emoji на основе индексов
                const transformedCombination = combination.map(emoji => {
                    const index = slots.fruits.indexOf(emoji);
                    return index !== -1 ? slots.fruits[index] : emoji;
                });

                setTimeout(() => {
                    setRolling(false);

                    // Убедимся, что у нас есть 3 эмодзи для отображения
                    setResults({
                        Fruit1: transformedCombination[0],
                        Fruit2: transformedCombination[1],
                        Fruit3: transformedCombination[2]
                    });

                    setDisplayedResults({
                        Fruit1: transformedCombination[0],
                        Fruit2: transformedCombination[1],
                        Fruit3: transformedCombination[2]
                    });

                }, 700);

                setTimeout(() => {
                    const message = serverResponse.data.data.win_amount === 0
                        ? lose_localisation.replace("{amount}", selectedValue).replace("{combination}", transformedCombination)
                        : win_localisation.replace("{amount}", serverResponse.data.data.win_amount).replace("{combination}", transformedCombination);
                    setUpString(message);
                }, 700);

            } else {
                setUpString(language.slots_not_enough_to_play);
            }

            try {
                const response = await axios.get('/user/info');
                if (response.status === 200) {
                    const data = await response.data;
                    // Обновляем локальный баланс, если используете его
                    setBalance(data.data.balance);  // Обновление состояния баланса

                    // Если хотите обновить глобальное состояние пользователя
                    updateUser(prevState => ({
                        ...prevState,
                        balance: data.data.balance
                    }));
                    console.log(data);
                } else {
                    console.error(`Ошибка получения данных пользователя: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
        }
    };




    return (
        <div>
            <CasinoInfo/>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column", marginTop: "5%"}}>
                <div className="CasinoCard" style={{position: "relative"}}>
                    <div className="upString">{upString}</div>
                    <svg onClick={OpenModal} style={{position: "absolute", left: "90%", top: "2%"}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="30" fill="#616161"/>
                        <g clip-path="url(#clip0_500_957)">
                            <path
                                d="M34.4121 44.4785C34.4121 45.672 33.938 46.8166 33.0941 47.6605C32.2502 48.5044 31.1056 48.9785 29.9121 48.9785C28.7186 48.9785 27.574 48.5044 26.7301 47.6605C25.8862 46.8166 25.4121 45.672 25.4121 44.4785C25.4121 43.285 25.8862 42.1404 26.7301 41.2965C27.574 40.4526 28.7186 39.9785 29.9121 39.9785C31.1056 39.9785 32.2502 40.4526 33.0941 41.2965C33.938 42.1404 34.4121 43.285 34.4121 44.4785Z"
                                fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M29.8467 18.7203C28.3392 18.7203 27.0455 19.1703 26.1342 19.8138C25.2567 20.4348 24.8225 21.1571 24.6965 21.7803C24.5103 22.6134 24.005 23.3403 23.289 23.8052C22.573 24.27 21.7034 24.4357 20.8666 24.2667C20.0299 24.0977 19.2927 23.6075 18.8132 22.9012C18.3338 22.1949 18.1502 21.3289 18.302 20.4888C18.8127 17.9553 20.3832 15.8876 22.3722 14.4813C24.4422 13.0188 27.0657 12.1953 29.8467 12.1953C35.6 12.1953 41.5647 16.0428 41.5647 22.2213C41.5647 25.7988 39.4385 28.6923 36.6845 30.3798C35.9463 30.8315 35.0589 30.9715 34.2175 30.769C33.3762 30.5665 32.6497 30.038 32.198 29.2998C31.7462 28.5617 31.6063 27.6743 31.8088 26.8329C32.0113 25.9915 32.5398 25.265 33.278 24.8133C34.5605 24.0281 35.0397 23.0268 35.0397 22.2213C35.0397 20.9298 33.431 18.7203 29.8467 18.7203Z"
                                  fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M29.8465 27.416C31.6465 27.416 33.109 28.874 33.109 30.6785V34.058C33.109 34.9233 32.7653 35.7531 32.1534 36.365C31.5416 36.9768 30.7118 37.3205 29.8465 37.3205C28.9812 37.3205 28.1514 36.9768 27.5395 36.365C26.9277 35.7531 26.584 34.9233 26.584 34.058V30.6785C26.584 28.8785 28.0442 27.416 29.8465 27.416Z"
                                  fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M37.7868 25.9217C38.0072 26.2895 38.1529 26.6971 38.2156 27.1212C38.2784 27.5454 38.2569 27.9778 38.1524 28.3936C38.0479 28.8094 37.8625 29.2006 37.6067 29.5447C37.351 29.8889 37.0299 30.1792 36.6618 30.3992L31.5228 33.4749C30.7804 33.9195 29.8919 34.0509 29.0526 33.8404C28.2134 33.6298 27.4921 33.0945 27.0475 32.3522C26.603 31.6098 26.4715 30.7213 26.6821 29.882C26.8926 29.0427 27.428 28.3215 28.1703 27.8769L33.3115 24.7989C33.6792 24.5789 34.0867 24.4334 34.5106 24.3709C34.9345 24.3083 35.3666 24.3299 35.7822 24.4344C36.1978 24.5388 36.5887 24.7242 36.9327 24.9797C37.2766 25.2353 37.5669 25.5539 37.7868 25.9217Z"
                                  fill="#222222"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_500_957">
                                <rect width="24" height="37" fill="white" transform="translate(18 12)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="slots">
                        <div className="slot">{displayedResults.Fruit1}</div>
                        <div className="slot">{displayedResults.Fruit2}</div>
                        <div className="slot">{displayedResults.Fruit3}</div>
                    </div>
                    <div className="user_balance">
                        Your balance: {formatNumber(balance)}
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