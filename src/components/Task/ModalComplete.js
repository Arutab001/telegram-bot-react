import React from 'react';
import "./ModalComplete.css";
import {useUser} from "../Casino/Base_Logic/UserContext.js";

const ModalComplete = ({show, close, id, reward}) => {

    if (!show) return null;

    const {user, updateUser} = useUser();

    const getReward = (e) => {
        const url = 'https://geckoshi-stage.up.railway.app/task/get_active_task_page_task_done_post';

        const data = {
            user_id: '123',  // Заменить на реальный user_id
            task_id: '456'   // Заменить на реальный task_id
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Успешный ответ:', result);
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });

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