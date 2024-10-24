import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import "./TaskPage.css";
import TaskImg from "../../images/1channel.png"
import MyBtn from "../Profile/MyBtn.js";
import ModalComplete from "./ModalComplete.js";
import ErrorModal from "../Profile/ErrorModal.js";
import TaskError from "./TaskError.js";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../Base_Logic/UserContext.js";
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
    },
    russian: {
        Description: "Описание",
        Goto: "Перейти",
        Reward: "Награда",
        TimeLeft: "Осталось времени",
        Days: "дней",
        Hours: "часов",
        Minutes: "минут",
    },
    german: {
        Description: "Beschreibung",
        Goto: "Gehe zu",
        Reward: "Belohnung",
        TimeLeft: "Verbleibende Zeit",
        Days: "Tage",
        Hours: "Stunden",
        Minutes: "Minuten",
    },
    turkish: {
        Description: "Açıklama",
        Goto: "Git",
        Reward: "Ödül",
        TimeLeft: "Kalan Süre",
        Days: "gün",
        Hours: "saat",
        Minutes: "dakika",
    },
};

const TaskPage = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const [isErrorOpen, setErrorOpen] = useState(false);

    const [image, setImage] = useState('');

    const CloseModal = (e) => {
        e.preventDefault();
        setModalOpen(false);
    }

    const OpenModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    }

    const CloseError = (e) => {
        e.preventDefault();
        setErrorOpen(false);
    }

    const OpenError = (e) => {
        e.preventDefault();
        setErrorOpen(true);
    }

    const location = useLocation();
    const {id, name, reward, link} = location.state || {};

    const {userLanguage} = useLangProfile();
    const {user} = useUser();
    const localisation = translations[userLanguage] || translations[user.language] || translations.english;

    const fetchTask = async () => {
        try{
            const response = await axios.get(`https://geckoshi-prod.up.railway.app/task/photo?id=${id}&type=big_file_id`, {
                responseType: 'blob', // Указываем, что ответ будет в бинарном формате (blob)
            });

            if (response.status === 200){
                const imageUrl = URL.createObjectURL(response.data);

                setImage(imageUrl);
            }

        }catch (e) {
            console.error(e)
        }
        try {
            const response = await axios.get()
        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchTask();
    }, [])

    const getReward = async (e) => {
        try{
            const response = await axios.post(`/task/done?task_id=${id}`);
            const data = response.data;
            console.log(data);
            if (data.done_successfully === true){
                OpenModal(e);
            }
            else {
                OpenError(e);
            }

        }
        catch (error) {
            console.error(error);
            OpenError(e)
        }
    }

    const openLink = () => {
        window.open(link, "_blank", "noopener,noreferrer")
    }

    return (
        <div className="TaskPage">
            <div>
                <img src={image === '' ? TaskImg : image}/>
            </div>
            <div>
                <h2 className="task-header">
                    {name}
                </h2>
                <div style={{margin: "0 5% 5% 5%", width: "90%"}}>
                    <span>
                        ID:
                    </span>
                    {id}
                    <br/>
                    <span>
                        {localisation.Description}:
                    </span>
                    {localisation.Goto}
                    <br/>
                    <span>
                        {localisation.Reward}:
                    </span>
                    {reward} $GMEME
                    <br/>
                    <span>
                        {localisation.TimeLeft}:
                    </span>
                    2 {localisation.Days}, 19 {localisation.Hours}, 18 {localisation.Minutes}
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <MyBtn text="Go To" onClick={openLink}></MyBtn>
                <MyBtn text="Approve" onClick={getReward} />
            </div>
            <ModalComplete show={isModalOpen} reward={reward} close={CloseModal} id={id} openError={setErrorOpen}/>
            <TaskError show={isErrorOpen} close={CloseError} />
        </div>
    );
};

export default TaskPage;