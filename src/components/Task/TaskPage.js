import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import "./TaskPage.css";
import TaskImg from "../../images/1channel.webp";
import MyBtn from "../Profile/MyBtn.js";
import ModalComplete from "./ModalComplete.js";
import ErrorModal from "../Profile/ErrorModal.js";
import TaskError from "./TaskError.js";
import { useLangProfile } from "../Base_Logic/UserLanguageProvider.js";
import { useUser } from "../Base_Logic/UserContext.js";
import axios from "axios";

const translations = {
    english: {
        Description: "Description",
        Goto: "Go To",
        Reward: "Reward",
        TimeLeft: "Time Left",
        Days: "days",
        Hours: "hours",
        Minutes: "minutes",
        Months: "months",
    },
    russian: {
        Description: "Описание",
        Goto: "Перейти",
        Reward: "Награда",
        TimeLeft: "Осталось времени",
        Days: "дней",
        Hours: "часов",
        Minutes: "минут",
        Months: "месяцев",
    },
    german: {
        Description: "Beschreibung",
        Goto: "Gehe zu",
        Reward: "Belohnung",
        TimeLeft: "Verbleibende Zeit",
        Days: "Tage",
        Hours: "Stunden",
        Minutes: "Minuten",
        Months: "Monate",
    },
    turkish: {
        Description: "Açıklama",
        Goto: "Git",
        Reward: "Ödül",
        TimeLeft: "Kalan Süre",
        Days: "gün",
        Hours: "saat",
        Minutes: "dakika",
        Months: "ay",
    },
};

const TaskPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isErrorOpen, setErrorOpen] = useState(false);
    const [image, setImage] = useState('');
    const [timeLeft, setTimeLeft] = useState({});

    const location = useLocation();
    const { id, name, reward, links = [], expires } = location.state || {};

    const { userLanguage } = useLangProfile();
    const { user } = useUser();
    const localisation = translations[userLanguage] || translations[user.language] || translations.english;

    const calculateTimeLeft = () => {
        const expirationDate = new Date(expires);
        const now = new Date();
        const difference = expirationDate - now;

        if (difference > 0) {
            const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);

            setTimeLeft({
                months,
                days,
                hours,
                minutes,
            });
        } else {
            setTimeLeft(null); // Если время истекло
        }
    };

    useEffect(() => {
        calculateTimeLeft(); // Рассчёт начального времени
        const timer = setInterval(calculateTimeLeft, 60000); // Обновление каждые 60 секунд

        return () => clearInterval(timer); // Очистка таймера при размонтировании
    }, [expires]);

    const fetchTask = async () => {
        try {
            const response = await axios.get(`/task/photo?id=${id}&type=big_file_id`, {
                responseType: 'blob',
            });

            if (response.status === 200) {
                const imageUrl = URL.createObjectURL(response.data);
                setImage(imageUrl);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchTask();
    }, []);

    const getReward = async (e) => {
        try {
            const response = await axios.post(`/task/done?task_id=${id}`);
            const data = response.data;
            console.log(data);
            if (data.done_successfully === true) {
                setModalOpen(true);
            } else {
                setErrorOpen(true);
            }
        } catch (error) {
            console.error(error);
            setErrorOpen(true);
        }
    };

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="TaskPage">
            <div>
                <img src={image === '' ? TaskImg : image}/>
            </div>
            <div>
                <h2 className="task-header">
                    {name}
                </h2>
                <div style={{ margin: "0 5% 5% 5%", width: "90%" }}>
                    <span>ID:</span> {id}
                    <br/>
                    <span>{localisation.Description}:</span> {localisation.Goto}
                    <br/>
                    <span>{localisation.Reward}:</span> {reward} $GMEME
                    <br/>
                    <span>{localisation.TimeLeft}:</span>
                    {timeLeft ? (
                        <>
                            {timeLeft.months} {localisation.Months}, {timeLeft.days} {localisation.Days}, {timeLeft.hours} {localisation.Hours}, {timeLeft.minutes} {localisation.Minutes}
                        </>
                    ) : (
                        <span>Expired</span>
                    )}
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                {links.map((url, index) => (
                    <MyBtn key={index} text={localisation.Goto} onClick={() => openLink(url)} />
                ))}
                <MyBtn text="Approve" onClick={getReward} />
            </div>
            <ModalComplete show={isModalOpen} reward={reward} close={() => setModalOpen(false)} id={id} openError={setErrorOpen}/>
            <TaskError show={isErrorOpen} close={() => setErrorOpen(false)} />
        </div>
    );
};

export default TaskPage;
