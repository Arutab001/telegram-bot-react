import React from 'react';
import classes from "./TaskError.module.css";

const TaskError = ({show, close}) => {

    if (!show) return null;

    return (
        <div className={classes.task_error_overlay}>
            <div className={classes.task_error_content}>
                <div>
                    <h2 className={classes.error_header}>
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