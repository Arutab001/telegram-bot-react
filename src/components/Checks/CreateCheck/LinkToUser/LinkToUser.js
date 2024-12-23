import React, {useState} from 'react';
import classes from "./LinkToUser.module.css";
import {useToken} from "../../../Base_Logic/TelegramAuth.js";
import axios from "axios";

const LinkToUser = ({isOpen, close}) => {



    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            close();  // Закрываем модалку, если клик пришелся на overlay
        }
    };



    return (
        <div className={classes.modal_overlay_link} onClick={handleOverlayClick}>
            <div className={classes.modal_content_link}>
                <div className={classes.modal_header}>
                    Congratulations!
                </div>
                <div className={classes.modal_body}>
                    <p>
                        Your check has been created successfully
                    </p>
                    <button className={classes.search_button} onClick={close}><p
                        className={classes.search_button_text}>Ok</p></button>
                </div>
            </div>
        </div>
    );
};

export default LinkToUser;