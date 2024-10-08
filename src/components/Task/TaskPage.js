import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import "./TaskPage.css";
import TaskImg from "../../images/forge 1.png"
import MyBtn from "../Profile/MyBtn.js";
import ModalComplete from "./ModalComplete.js";
import ErrorModal from "../Profile/ErrorModal.js";
import TaskError from "./TaskError.js";

const TaskPage = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const [isErrorOpen, setErrorOpen] = useState(false);

    const CloseModal = (e) => {
        e.preventDefault();
        setModalOpen(false);
    }

    const OpenModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    }

    const CloseError = (e) => {
        e.preventDefault();
        setErrorOpen(false);
    }

    const OpenError = (e) => {
        e.preventDefault();
        setErrorOpen(true);
    }

    const location = useLocation();
    const {id, name, reward} = location.state || {};

    const [localisation, setLocalisation] = useState(
        {
            Description: "Description",
            Goto: "Go To",
            Reward: "Reward",
            TimeLeft: "Time Left",
            Days: "days",
            Hours: "hours",
            Minutes: "minutes"
        }
    )

    return (
        <div className="TaskPage">
            <div>
                <img src={TaskImg}/>
            </div>
            <div>
                <h2 className="task-header">
                    {name}
                </h2>
                <div style={{margin: "0 5% 5% 5%", width: "90%"}}>
                    <span>
                        ID:
                    </span>
                    {id}
                    <br/>
                    <span>
                        {localisation.Description}:
                    </span>
                    {localisation.Goto}
                    <br/>
                    <span>
                        {localisation.Reward}:
                    </span>
                    {reward} $GMEME
                    <br/>
                    <span>
                        {localisation.TimeLeft}:
                    </span>
                    2 {localisation.Days}, 19 {localisation.Hours}, 18 {localisation.Minutes}
                </div>
            </div>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <MyBtn text="Go to"/>
                <MyBtn text="Approve" onClick={OpenModal} />
            </div>
            <ModalComplete show={isModalOpen} reward={reward} close={CloseModal} id={id}/>
            <TaskError show={isErrorOpen} close={CloseError} />
        </div>
    );
};

export default TaskPage;