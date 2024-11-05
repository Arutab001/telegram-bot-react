import React from 'react';
import ChecksStyle from './Check.module.css';

const Check = ({ currency, amount, total, onDelete }) => {
    return (
        <div className={ChecksStyle.checkCard}>
            <div className={ChecksStyle.checkHeader}>
                <span role="img" aria-label="Check icon">✔️</span>
                <button className={ChecksStyle.deleteButton} onClick={onDelete} disabled={true}>Delete check</button>
            </div>
            <div className={ChecksStyle.checkInfo}>
                <p>{amount} {currency}</p>
                <p>Total: {total} {currency}</p>
            </div>
            <div className={ChecksStyle.checkActions}>
                <button className={ChecksStyle.actionButton} disabled={true}>Save check</button>
                <button className={ChecksStyle.actionButton} disabled={true}>Send check</button>
            </div>
        </div>
    );
};

export default Check;
