import React from 'react';
import "./TaskContainer.css";
import {Link} from "react-router-dom";
import Profile from "../Profile/Profile.js";


const TaskContainer = (props) => {
    return (
        <div className="TaskContainer">
            <div>
                <img src={props.image}/>
            </div>
            <div>
                <h2>
                    {props.name}
                </h2>
                <p>
                    + {props.reward} $GMEME
                </p>
            </div>
            <div>
                <Link
                    to="/TaskPage"
                        state={{id: props.id, name: props.name, reward: props.reward}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 125 125" fill="none">
                        <rect width="125" height="125" rx="62.5" fill="#6D8069"/>
                        <path d="M53.3848 86.9233L77.6119 62.6962" stroke="#D9FFD2" stroke-width="10"
                              stroke-linecap="round"/>
                        <path d="M53.3848 37.9941L77.6155 62.2249" stroke="#D9FFD2" stroke-width="10"
                              stroke-linecap="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default TaskContainer;