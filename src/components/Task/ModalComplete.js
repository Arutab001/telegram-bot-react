import React from 'react';
import "./ModalComplete.css";
import {useUser} from "../../UserContext.js";

const ModalComplete = ({show, close, id, reward}) => {

    if (!show) return null;

    const {user, updateUser} = useUser();

    const getReward = (e) => {
        user.referrals += reward;
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