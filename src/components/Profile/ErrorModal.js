import React from 'react';
import "./ErrorModal.css"

const ErrorModal = ({show, onClose}) => {

    if (!show) return null;

    return (
        <div className="error-overlay">
            <div className="error-content">
                <h2>
                    Premium Warning
                </h2>
                <div style={{display: "flex", flexDirection: "column", height: "80%", alignItems: "center", paddingBottom: "5%"}}>
                    <div style={{height: "50%", textAlign: "center"}}>
                        <p>You don't have <br/> enough $GMEME  <br/> to buy "Premium"</p>
                    </div>
                    <button onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;