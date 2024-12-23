import React, { useEffect, useState } from 'react';
import TaskContainer from './TaskContainer.js';
import Task1 from '../../images/Ellipse 5.webp'; // Задаем изображение по умолчанию
import { useUser } from "../Base_Logic/UserContext.js";
import axios from "axios";
import { useToken } from "../Base_Logic/TelegramAuth.js";
import {useDataRequestContext} from "../Base_Logic/RequestContext.js";

const Task = () => {
    const { token } = useToken();
    const {tasks} = useDataRequestContext();
    const { user, updateUser } = useUser();

    const [isLoading, setIsLoading] = useState(true); // Новое состояние для отслеживания загрузки


    return (
        <div style={{ zIndex: "-1" }}>
            {tasks.map((task) => (
                <TaskContainer
                    key={task.id}
                    id={task.id}
                    image={Task1}
                    title={task.title}
                    text={task.text}
                    reward={task.done_reward}
                    exprires_at={task.expires_at}
                    link={task.markup?.inline_keyboard?.flat().map(button => button.url)}
                />
            ))}
            {!isLoading && tasks.length === 0 && (
                <div className="Rectangle-12">
                    <span className="There-are-currently-no-active-tasks">
                        There are currently no active tasks.
                    </span>
                </div>
            )}
        </div>
    );
};

export default Task;