import React, {useState} from 'react';
import "./getPremium.css";

const GetPremium = ({show, onClose, handleNot }) => {
    const [notificationVisible, setNotificationVisible] = useState(false);


    const getPremium = (e) => {
        e.preventDefault();
        onClose;
        handleNot(true);
        setNotificationVisible(true);
    };


    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div>
                    <h2 style={{}}>Premium Price</h2>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="43" height="43" viewBox="0 0 86 86"
                         fill="none" style={{position: "absolute", top: "-10", right: "-10"}}
                        onClick={onClose}>
                        <circle cx="43" cy="43" r="41.5" fill="#D9FFD2" stroke="#6D8069" stroke-width="3"/>
                        <path d="M26.0415 26.0417L58.9582 58.9584M26.0415 58.9584L58.9582 26.0417" stroke="#6D8069"
                              stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p>30 000 $GMEME</p>
                <button onClick={getPremium} style={{backgroundColor: "#6D8069"}}>Buy Premium</button>

            </div>
        </div>
    );
};

export default GetPremium;
