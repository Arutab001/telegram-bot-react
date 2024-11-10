import React, {useEffect, useState} from 'react';
import "./TaskContainer.css";
import {Link} from "react-router-dom";
import Profile from "../Profile/Profile.js";
import axios from "axios";
import TaskImage from "../../images/Ellipse 5.webp"
import TaskImage2 from "../../images/Ellipse 6.webp"
import TaskImage3 from "../../images/Ellipse 7.webp"
import TaskImage4 from "../../images/ellipse-8.webp"
import TaskImage5 from "../../images/ellipse-9.webp"
import TaskImage6 from "../../images/ellipse-11.webp"


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
        <div className="TaskContainer" >
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125"
                             fill="none">
                            <rect width="125" height="125" rx="62.5" fill="url(#paint0_linear_501_1387)"/>
                            <g filter="url(#filter0_d_501_1387)">
                                <path d="M53.3848 85.9238L77.6119 61.6967" stroke="#212121" stroke-width="10"
                                      stroke-linecap="round"/>
                                <path d="M53.3848 36.9941L77.6155 61.2249" stroke="#212121" stroke-width="10"
                                      stroke-linecap="round"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_501_1387" x="38.3848" y="21.9941" width="54.2305" height="78.9297"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.4 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_501_1387"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_501_1387"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_501_1387" x1="125" y1="0" x2="0" y2="125"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4CAF50"/>
                                    <stop offset="1" stop-color="#FFEB3B"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;