import React from 'react';

const MyBtn = (props) => {
    return (
        <button className="Button" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default MyBtn;