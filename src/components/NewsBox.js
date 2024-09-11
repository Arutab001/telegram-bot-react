import React from 'react';
import News from '../images/forge 1.png'

const NewsBox = () => {
    return (
        <div className="NewsBox">
            <div >
                <img src={News} style={{height: "60vh", width: "100%", borderRadius: "43px 43px 0 0"}}/>
            </div>
            <div style={{height: "8vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "x-large", opacity: "75%"}}>
                Read
            </div>
        </div>
    );
};

export default NewsBox;