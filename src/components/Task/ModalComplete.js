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
                <h2>
                    Task Info
                </h2>
                <p>
                    You have successfully completed task № {id}
                </p>
                <button onClick={getReward}>
                    Get Reward
                </button>
            </div>

        </div>
    );
};

export default ModalComplete;