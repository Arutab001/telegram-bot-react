import React from 'react';
import News from '../../images/forge 1.png'
import "../../App.css";

const NewsBox = () => {
    return (
        <div className="NewsBox">
            <div >
                <img src={News} />
            </div>
            <div className="Text">
                Read
            </div>
        </div>
    );
};

export default NewsBox;