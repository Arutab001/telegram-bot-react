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
                    image: props.image,
                    name: props.name,
                    reward: props.reward
                }
            ]);
        };

        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });
        addTask({ image: Task1, name: 'CryptoPulse', reward: 2000 });

    }, []);

    return (
        <div>
            {Tasks.map((Task, index) => (
                <TaskContainer key={index} image={Task.image} name={Task.name} reward={Task.reward} />
            ))}
        </div>
    );
};


export default Task;