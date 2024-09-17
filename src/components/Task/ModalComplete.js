import React from 'react';
import "./ModalComplete.css";

const ModalComplete = ({show, close, id}) => {

    if (!show) return null;

    return (
        <div className="modal-complete-overlay">
            <div className="modal-complete-content">
                <h2>
                    Task Info
                </h2>
                <p>
                    You have successfully completed task № {id}
                </p>
                <button onClick={close}>
                    Get Reward
                </button>
            </div>

        </div>
    );
};

export default ModalComplete;