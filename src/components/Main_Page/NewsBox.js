import React, { useEffect, useState } from 'react';
import "../../App.css";
import NewsDefalut from '../../images/Frame 12.png';

const NewsBox = () => {
    const [postUrl, setPostUrl] = useState("#");
    const [image, setImage] = useState(null);

    const CHANNEL_NAME = "geckoshi_coin"; // Например, "mychannel"
    const BASE_URL = `https://t.me/${CHANNEL_NAME}`;

    const fetchLatestPost = async () => {
        try {
            const response = await fetch(`https://t.me/s/${CHANNEL_NAME}`);
            const text = await response.text();

            // Регулярка для поиска всех post_id на странице
            const postIds = [...text.matchAll(/href="\/[a-zA-Z0-9_]+\/(\d+)"/g)].map(match => parseInt(match[1]));

            if (postIds.length > 0) {
                const latestId = Math.max(...postIds); // Находим максимальный ID
                setPostUrl(`${BASE_URL}/${latestId}`);
            }

            // Ищем изображение последнего поста
            const imageMatch = text.match(/<img class="tgme_widget_message_photo" src="([^"]+)"/);
            if (imageMatch && imageMatch[1]) {
                setImage(imageMatch[1]);
            }
        } catch (error) {
            console.error("Error fetching latest post:", error);
        }
    };

    useEffect(() => {
        fetchLatestPost();
    }, []);

    return (
        <div className="NewsBox" onClick={() => window.open(postUrl, "_blank")} style={{ cursor: "pointer" }}>
            <div>
                {image ? <img src={image} alt={image} /> : <img src={NewsDefalut} alt={NewsDefalut}/>}
            </div>/>}
            </div>
            <div className="Text">Read</div>
        </div>
    );
};

export default NewsBox;
