import React from 'react';
import "./ModalComplete.css";
import {useUser} from "../Casino/Base_Logic/UserContext.js";
import axios from "axios";
import {useToken} from "../Casino/Base_Logic/TelegramAuth.js";

const ModalComplete = ({show, close, id, reward}) => {

    const {token} = useToken();

    if (!show) return null;

    const {user, updateUser} = useUser();

    const getReward = async (e) => {
        try{
            axios.defaults.baseURL = 'https://geckoshi-stage.up.railway.app';
            axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
            const response = await axios.post(`/task/done?id=${id}`);
            const data = response.data;
            console.log(data);
        }
        catch (e) {
            console.error(e);
        }

        close(e);
    }

    return (
        <div className="modal-complete-overlay">
            <div className="modal-complete-content">
                <h2 className="reward_header">
                    Task Info
                </h2>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p>
                        You have successfully completed task № {id}
                    </p>
                    <button onClick={getReward}>
                        Get Reward
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ModalComplete;