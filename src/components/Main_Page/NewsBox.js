import React, {useState} from 'react';
import News from '../../images/forge 1.png'
import "../../App.css";

const NewsBox = () => {

    const [read, stateRead] = useState("Read");

    return (
        <div className="NewsBox">
            <div >
                <img src={News} />
            </div>
            <div className="Text">
                {read}
            </div>
        </div>
    );
};

export default NewsBox;