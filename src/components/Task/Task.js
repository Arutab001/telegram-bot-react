import React, { useEffect, useState } from 'react';
import TaskContainer from './TaskContainer.js';
import Task1 from '../../images/Ellipse 5.webp'; // Задаем изображение по умолчанию
import { useUser } from "../Base_Logic/UserContext.js";
import axios from "axios";
import {useToken} from "../Base_Logic/TelegramAuth.js";

const Task = () => {
    const {token} = useToken()
    const { user, updateUser } = useUser();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`/task?page=1&limit=100`);

                if (response.request.status === 200) {
                    const data = await response.data;
                    console.log("TASKS:")
                    console.log(data);
                    setTasks(data.items);
                } else {
                    console.error('Ошибка при получении задач:', response.statusText);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div style={{zIndex: "-1"}}>
            {tasks.map((task) => (
                <TaskContainer
                    key={task.id}
                    id={task.id}
                    image={Task1}
                    title={task.title}
                    text={task.text}
                    reward={task.done_reward}
                    link={task.markup?.inline_keyboard[0]?.[0]?.url}
                />
            ))}
        </div>
    );
};

export default Task;
