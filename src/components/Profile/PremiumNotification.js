// Rename Notification to CustomNotification
import React, { useEffect, useState } from 'react';
import './Notification.css';

const PremiumNotification = ({ message, onClose, isVisible }) => {


    return (
        <div className={`notification ${isVisible ? 'show' : 'hide'}`}>
            You activated "Premium"
        </div>
    );
};

export default PremiumNotification;
