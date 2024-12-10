import React, {useState} from 'react';
import classes from "./LinkToUser.module.css";
import {useToken} from "../../../Base_Logic/TelegramAuth.js";
import axios from "axios";

const LinkToUser = ({isOpen, close, name, amount, changePass, changeLink}) => {

    const {token} = useToken();

    const [userTag, setUserTag] = useState("");

    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        setUserTag(e.target.value);
        changeLink(userTag); // Обновляем состояние при изменении текста
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        changePass(password);
    }

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            close();  // Закрываем модалку, если клик пришелся на overlay
        }
    };

    const r = async () => {
        try {
            const response = await axios.get("/user/info");
            console.log(response);
        } catch (e) {
            console.log(e);
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
                              placeholder={"enter the user id"}
                              value={userTag}
                              onChange={handleInputChange}
                    >
                    </textarea><textarea className={classes.input}
                                          placeholder={"password (not required)"}
                                          value={password}
                                          onChange={handlePasswordChange}
                ></textarea>
                    <button className={classes.search_button} onClick={r}><p
                        className={classes.search_button_text}>Search user</p></button>
                </div>
            </div>
        </div>
    );
};

export default LinkToUser;