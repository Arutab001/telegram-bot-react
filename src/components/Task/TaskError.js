import React, {useState} from 'react';
import classes from "./TaskError.module.css";

const TaskError = ({show, close}) => {

    if (!show) return null;

    const [localisation, setLocalisation] = useState({
        Warning: "Task Warning",
        Text: "You did not meet the task requirements"
    })

    return (
        <div className={classes.task_error_overlay}>
            <div className={classes.task_error_content}>
                <div>
                    <h2 className={classes.error_header}>
                        {localisation.Warning}
                    </h2>
                    <div>
                        <p>
                            {localisation.Text}
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