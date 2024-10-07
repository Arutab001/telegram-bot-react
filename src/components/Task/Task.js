import React, { useEffect, useState } from 'react';
import TaskContainer from './TaskContainer.js';
import Task1 from '../../images/Ellipse 5.jpg'; // Задаем изображение по умолчанию
import { useUser } from '../../UserContext.js';
import axios from "axios";

const Task = () => {
    const { user } = useUser();
    const [tasks, setTasks] = useState([]);

    // Формируем URL с id пользователя
    const apiUrl = `https://geckoshi-stage.up.railway.app/task/get_active_task_page_task__get?c_id=${user.user_id}`;

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(apiUrl);

                if (response.request.status === 200) {
                    const data = await response.data.data;
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
    }, [apiUrl]);

    return (
        <div>
            {tasks.map((task) => (
                <TaskContainer
                    key={task.id}
                    id={task.id}
                    image={Task1}
                    title={task.title}
                    text={task.text}
                    reward={task.done_reward}
                    link={task.markup?.inline_keyboard[0]?.[0]?.url || null}
                />
            ))}
        </div>
    );
};

export default Task;
