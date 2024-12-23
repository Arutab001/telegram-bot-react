import React, {useEffect, useState} from 'react';
import "../../App.css";
import NewsDefault from '../../images/Frame 12.webp';
import axios from "axios";
import {useDataRequestContext} from "../Base_Logic/RequestContext.js";


const NewsBox = () => {
    const [postUrl, setPostUrl] = useState("#");
    const {image} = useDataRequestContext();
    const defaultPostUrl = "https://t.me/geckoshi_coin/605"

    const fetchLatestPost = async () => {
        try {
            const response = await axios.get('https://geckoshi-prod.up.railway.app/post-capturer/channel/link');
            console.log("Post URL:", response);
            setPostUrl(response.data.data.link || defaultPostUrl); // Fallback to default if null
        } catch (error) {
            console.error("Error fetching latest post:", error);
            setPostUrl(defaultPostUrl);
        }


    };

    useEffect(() => {
        fetchLatestPost();

        // Cleanup to release URL object when component unmounts
        return () => {
            if (image) URL.revokeObjectURL(image);
        };
    }, []);

    return (
        <div className="NewsBox" onClick={() => window.open(postUrl, "_blank")}
             style={{cursor: "pointer"}}>
            <div>
                {image ? <img src={image} alt="News"/> : <img src={NewsDefault} alt="Default News"/>}
            </div>
            <div className="Text">
                Read
            </div>
        </div>
    );
};

export default NewsBox;