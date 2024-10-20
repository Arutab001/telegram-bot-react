import React, { useEffect, useState } from 'react';
import "../../App.css";
import NewsDefalut from '../../images/Frame 12.png';
import axios from "axios";

const NewsBox = () => {
    const [postUrl, setPostUrl] = useState("#");
    const [image, setImage] = useState(null);


    const fetchLatestPost = async () => {
        try {
           const response = await axios.get('channel/link?r=3');
           console.log(response.data);

        } catch (error) {
            console.error("Error fetching latest post:", error);
        }
        try {
            const response = await axios.get('channel/photo');
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchLatestPost();
    }, []);

    return (
        <div className="NewsBox" onClick={() => window.open(postUrl, "_blank")} style={{ cursor: "pointer" }}>
            <div>
                {image ? <img src={image} /> : <img src={NewsDefalut}/>}
            </div>
            <div className="Text">Read</div>
        </div>
    );
};

export default NewsBox;
