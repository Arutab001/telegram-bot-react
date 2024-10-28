import React, {useEffect, useState} from 'react';
import "./TaskContainer.css";
import {Link} from "react-router-dom";
import Profile from "../Profile/Profile.js";
import axios from "axios";
import TaskImage from "../../images/Ellipse 5.webp"
import TaskImage2 from "../../images/Ellipse 6.webp"
import TaskImage3 from "../../images/Ellipse 7.webp"
import TaskImage4 from "../../images/Ellipse 8.webp"
import TaskImage5 from "../../images/Ellipse 9.webp"
import TaskImage6 from "../../images/Ellipse 11.webp"


const TaskContainer = (props) => {
    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, ''); // Убирает все HTML-теги
    };

    const trimString = (str, maxLength = 12) => {
        const cleanString = stripHtmlTags(str);
        if (cleanString.length > maxLength) {
            return cleanString.slice(0, maxLength - 3) + '...'; // Обрезаем строку и добавляем "..."
        }
        return cleanString; // Если строка меньше или равна maxLength, возвращаем её как есть
    };

    const [image, setImage] = useState('');

    const fetchTaskImg = async () => {
        try {
            const response = await axios.get(`https://geckoshi-prod.up.railway.app/task/photo?id=${props.id}&type=small_file_id`, {
                responseType: 'blob', // Указываем, что ответ будет в бинарном формате (blob)
            });

            if (response.status === 200 ) {

                const imageUrl = URL.createObjectURL(response.data);

                setImage(imageUrl);
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTaskImg();
    }, []);

    const taskImages = [
        TaskImage,
        TaskImage2,
        TaskImage3,
        TaskImage4,
        TaskImage5,
        TaskImage6,
    ];

    const randomImage = taskImages[Math.floor(Math.random() * taskImages.length)];

    return (
        <div className="TaskContainer">
            <div
            style={{marginRight: "2%"}}
            >
                <img src={image || randomImage}/>
            </div>
            <div style={{height: "100%",
                display: "flex",
                alignItems: "center"}}>
                <div>
                    <h2 style={{margin: "0"}}>
                        {trimString(props.title)}
                    </h2>
                    <p>
                        + {props.reward} $GMEME
                    </p>
                </div>
                <div
                    className="TaskSvg"
                >
                    <Link
                        to="/TaskPage"
                        state={{id: props.id, name: props.name, reward: props.reward, link: props.link}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 125"
                             fill="none">
                            <rect width="125" height="125" rx="62.5" fill="#725B40"/>
                            <path d="M53.3848 86.9233L77.6119 62.6962" stroke="#E4B57F" stroke-width="10"
                                  stroke-linecap="round"/>
                            <path d="M53.3848 37.9941L77.6155 62.2249" stroke="#E4B57F" stroke-width="10"
                                  stroke-linecap="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;