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
                <div style={{display: "flex", flexDirection: "column", height: "80%", alignItems: "center"}}>
                    <div style={{height: "50%", marginTop: "5%", textAlign: "center"}}>
                        You don't have <br/> enough $GMEME  to buy "Premium"
                    </div>
                    <button onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;