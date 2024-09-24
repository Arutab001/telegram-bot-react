import React, {useState} from 'react';

const CombinationModal = ({show, close}) => {

    if (!show) return null;

    const [localisation, setLocalisation] = useState("Winning Combinations")

    return (
        <div className="combination-overlay">
            <div className="combination-content">
                <svg onClick={close} style={{position: "absolute", right: "-17", top: "-10"}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 86 86" fill="none">
                    <circle cx="43" cy="43" r="41.5" fill="#D9FFD2" stroke="#6D8069" stroke-width="3"/>
                    <path d="M26.042 26.0415L58.9587 58.9582M26.042 58.9582L58.9587 26.0415" stroke="#6D8069"
                          stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="CombinationsHeader">
                    <h2>
                        {localisation}
                    </h2>
                </div>
                <div className="Combinations">
                    🦎🦎🦎 - x10 <br/>
                    🏜️🏜️🏜️ - x5 <br/>
                    🏖️🏖️🏖️ - x3 <br/>
                    🏕️🏕️🏕️ - x2 <br/>
                    ✈️✈️✈️ - x1.8 <br/>
                    🚀🚀🚀 - x1.7 <br/>
                    🪲🪲🪲 - x1.5 <br/>
                    🐞🐞🐞 - x1.2 <br/>
                    🐝🐝🐝 - x1.05 <br/>
                </div>

            </div>
        </div>
    );
};

export default CombinationModal;