import React from 'react';
import "./TaskError.css"

const TaskError = ({show, close}) => {

    if (!show) return null;

    return (
        <div className="task-error-overlay">
            <div className="task-error-content">
                <div>
                    <h2 className="error-header">
                        Task Warning
                    </h2>
                    <div>
                        <p>
                            You did not meet the task requirements
                        </p>
                        <button onClick={close}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskError;