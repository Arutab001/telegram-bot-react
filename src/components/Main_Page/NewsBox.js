import React, { useEffect, useState } from 'react';
import "../../App.css";
import NewsDefalut from '../../images/Frame 12.png';
import axios from "axios";
import {useToken} from "../Base_Logic/TelegramAuth.js";


const NewsBox = () => {
    const [postUrl, setPostUrl] = useState("#");
    const [image, setImage] = useState(null);
    const {token} = useToken();

    const fetchLatestPost = async () => {
        try {
           const response = await axios.get('https://geckoshi-prod.up.railway.app/channel/link', {
               headers: { 'Authorization': `Bearer ${token}` }
           });
           console.log(response.data);

        } catch (error) {
            console.error("Error fetching latest post:", error);
        }
        try {
            const response = await axios.get('https://geckoshi-prod.up.railway.app/channel/photo?r=3', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchLatestPost();
    }, [token]);

    if(!token){
        return;
    }

    return (
        <div className="NewsBox" onClick={() => window.open(postUrl, "_blank")} style={{ cursor: "pointer" }}>
            <div>
                {image ? <img src={image} /> : <img src={NewsDefalut}/>}
            </div>
            <div className="Text">
                Read</div>
        </div>
    );
};

export default NewsBox;
