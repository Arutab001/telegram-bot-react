import React from 'react';
import "./LanguageModal.css";
import MyBtn from "./MyBtn.js";

const LanguageModal = ({show, onClose}) => {

    if(!show) return null;

    return (
        <div className="language-overlay">
            <div className="language-content">
                <h2>
                    Choose your language
                </h2>
                <MyBtn text="Russian" onClick={onClose}/>
                <MyBtn text="English" onClick={onClose}/>
                <MyBtn text="Turkish" onClick={onClose}/>
                <MyBtn text="German" onClick={onClose}/>
            </div>
        </div>
    );
};

export default LanguageModal;