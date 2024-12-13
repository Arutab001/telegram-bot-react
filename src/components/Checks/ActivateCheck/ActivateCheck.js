import React from 'react';
import {useParams} from "react-router-dom";

const ActivateCheck = () => {
    const {checkId} = useParams();


    return (
        <div>
            <h1>Activate Check</h1>
            <p>Check Id: {checkId}</p>
        </div>
    );
};

export default ActivateCheck;