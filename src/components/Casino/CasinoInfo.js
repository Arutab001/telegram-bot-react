import React, {useState} from 'react';
import './CasinoInfo.css'

const CasinoInfo = () => {

    const [isVisible, setIsVisible] = useState(true);

    const setClose = (e) => {
        e.preventDefault();
        setIsVisible(false);
    }

    const [localisation, setLocalisation] = useState("Welcome to the slots section. \n" +
        "            Here you can win a lot of money.\n" +
        "            Here are the winning.");

    return (
        <div className={`CasinoInfo ${isVisible ? 'show' : 'hide'}`}>
            {localisation}
            <svg onClick={setClose} xmlns="http://www.w3.org/2000/svg" width="36" height="21" viewBox="0 0 36 21" fill="none">
                <path d="M33 18L18.0023 3.00227" stroke="#364035" stroke-width="5" stroke-linecap="round"/>
                <path d="M2.71045 18L17.7104 3" stroke="#364035" stroke-width="5" stroke-linecap="round"/>
            </svg>
        </div>
    );
};

export default CasinoInfo;