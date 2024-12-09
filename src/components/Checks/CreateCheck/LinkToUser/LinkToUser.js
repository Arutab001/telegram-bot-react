import React, {useState} from 'react';
import classes from "./LinkToUser.module.css";
import {useToken} from "../../../Base_Logic/TelegramAuth.js";
import axios from "axios";

const LinkToUser = ({isOpen, close, name, amount}) => {

    const {token} = useToken();

    const [userTag, setUserTag] = useState("");

    const [password, setPassword] = useState(null);

    const handleInputChange = (e) => {
        setUserTag(e.target.value); // Обновляем состояние при изменении текста
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            close();  // Закрываем модалку, если клик пришелся на overlay
        }
    };

    const searchUser = async () => {
        try {
            const response = await axios.post('/cheque/personal', {
                name: String(name),
                amount: amount,
                connected_to_user: userTag,
                description: "Your description here",
                password: password
            });
            if(response.status === 200) {
                close()
            }
        }
        catch (e) {
            console.error(e);
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
                    ></textarea><textarea className={classes.input}
                                          placeholder={"enter the password (not required)"}
                                          value={password}
                                          onChange={handlePasswordChange}
                ></textarea>
                    <button className={classes.search_button} onClick={searchUser}><p
                        className={classes.search_button_text}>Search user</p></button>
                </div>
            </div>
        </div>
    );
};

export default LinkToUser;