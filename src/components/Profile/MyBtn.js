import React from 'react';

const MyBtn = (props) => {
    return (
        <button className="Button" onClick={props.onClick} disabled={props.disabled}>
            {props.text}
        </button>
    );
};

export default MyBtn;