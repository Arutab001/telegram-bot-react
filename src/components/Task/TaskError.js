import React, {useState} from 'react';
import classes from "./TaskError.module.css";
import {useLangProfile} from "../Base_Logic/UserLanguageProvider.js";
import {useUser} from "../Base_Logic/UserContext.js";

const translations = {
    english: {
        Warning: "Task Warning",
        Text: "You did not meet the task requirements",
    },
    russian: {
        Warning: "Предупреждение о задании",
        Text: "Вы не выполнили требования задания",
    },
    german: {
        Warning: "Aufgabenwarnung",
        Text: "Sie haben die Aufgabenanforderungen nicht erfüllt",
    },
    turkish: {
        Warning: "Görev Uyarısı",
        Text: "Görev gereksinimlerini karşılamadınız",
    },
};


const TaskError = ({show, close}) => {

    const {user} = useUser();
    if (!show) return null;

    const { userLanguage } = useLangProfile(); // Получаем текущий язык пользователя
    const [localisation, setLocalisation] = useState(
        translations[userLanguage] || translations[user.language] || translations.english
    );

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