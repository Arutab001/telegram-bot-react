import React, {useEffect, useState} from 'react';
import TaskContainer from "./TaskContainer.js";
import Task1 from "../../images/Ellipse 5.jpg"

const Task = () => {

    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        const addTask = (props) => {
            setTasks((PrevTasks) => [
                ...PrevTasks,
                {
                    id: props.id,
                    image: props.image,
                    name: props.name,
                    reward: props.reward
                }
            ]);
        };

        addTask({id: 1, image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({id: 2, image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({id: 3, image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({id: 4, image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({id: 5, image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({id: 6, image: Task1, name: 'CryptoPulse', reward: 2000 });

    }, []);

    return (
        <div>
            {Tasks.map((Task, index) => (
                <TaskContainer key={index} id={Task.id} image={Task.image} name={Task.name} reward={Task.reward} />
            ))}
        </div>
    );
};


export default Task;0