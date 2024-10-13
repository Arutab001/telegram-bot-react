import React from 'react';
import "./ModalComplete.css";
import {useUser} from "../Casino/Base_Logic/UserContext.js";
import axios from "axios";
import {useToken} from "../Casino/Base_Logic/TelegramAuth.js";
import {useLangProfile} from "../Casino/Base_Logic/UserLanguageProvider.js";

const translations = {
    english: {
        TaskInfo: "Task Info",
        SuccessMessage: "You have successfully completed task №",
        GetReward: "Get Reward",
    },
    russian: {
        TaskInfo: "Информация о задании",
        SuccessMessage: "Вы успешно выполнили задание №",
        GetReward: "Получить награду",
    },
    german: {
        TaskInfo: "Aufgabeninfo",
        SuccessMessage: "Sie haben Aufgabe Nr. erfolgreich abgeschlossen",
        GetReward: "Belohnung erhalten",
    },
    turkish: {
        TaskInfo: "Görev Bilgisi",
        SuccessMessage: "Görev № başarıyla tamamlandı",
        GetReward: "Ödül Al",
    },
};


const ModalComplete = ({show, close, id, reward, setErrorOpen}) => {

    const {token} = useToken();

    const { userLanguage } = useLangProfile();
    const {user} = useUser();

    const localisation = translations[userLanguage] || translations.english;

    if (!show) return null;


    const getReward = async (e) => {
        try{
            axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
            const response = await axios.post(`/task/done?id=${id}`);
            const data = response.data;
            console.log(data);
            close(e);
            if (response.status !== 200) {
                setErrorOpen(true);
            }
        }
        catch (e) {
            console.error(e);
        }


    }

    return (
        <div className="modal-complete-overlay">
            <div className="modal-complete-content">
                <h2 className="reward_header">
                    {localisation.TaskInfo}
                </h2>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p>
                        {localisation.SuccessMessage} {id}
                    </p>
                    <button onClick={getReward}>
                        {localisation.GetReward}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ModalComplete;