import React, {useState} from 'react';
import classes from "./LinkToUser.module.css";
import {useToken} from "../../../Base_Logic/TelegramAuth.js";
import axios from "axios";

const LinkToUser = ({isOpen, close, name, amount}) => {

    const {token} = useToken();

    const [userTag, setUserTag] = useState("");

    const handleInputChange = (e) => {
        setUserTag(e.target.value); // Обновляем состояние при изменении текста
    };

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            close();  // Закрываем модалку, если клик пришелся на overlay
        }
    };

    const searchUser = async () => {
        const response = await axios.post(`/cheque/personal?name=${name}&amount=${amount}&connected_to_user=${userTag}`);
        if(response.status === 200) {
            close()
        }
        else {

        }
    }

    return (
        <div className={classes.modal_overlay_link} onClick={handleOverlayClick}>
            <div className={classes.modal_content_link}>
                <div className={classes.modal_header}>
                    Link to User
                </div>
                <div className={classes.modal_body}>
                    <textarea className={classes.input}
                              placeholder={"enter the user tag@"}
                              value={userTag}
                              onChange={handleInputChange}
                    ></textarea>
                    <button className={classes.search_button} onClick={searchUser}>Search user</button>
                </div>
            </div>
        </div>
    );
};

export default LinkToUser;