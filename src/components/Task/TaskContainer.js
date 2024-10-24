import React, {useEffect, useState} from 'react';
import "./TaskContainer.css";
import {Link} from "react-router-dom";
import Profile from "../Profile/Profile.js";
import axios from "axios";
import TaskImage from "src/images/Ellipse 5.jpg"

const TaskContainer = (props) => {
    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, ''); // Убирает все HTML-теги
    };

    const [image, setImage] = useState('');

    const fetchTaskImg = async () => {
        try {
            const response = await axios.get(`https://geckoshi-prod.up.railway.app/task/photo?id=98&type=small_file_id`, {
                responseType: 'blob', // Указываем, что ответ будет в бинарном формате (blob)
            });

            const imageUrl = URL.createObjectURL(response.data);

            setImage(imageUrl);
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTaskImg();
    }, []);

    return (
        <div className="TaskContainer">
            <div
            style={{marginRight: "2%"}}
            >
                <img src={image || TaskImage}/>
            </div>
            <div style={{height: "100%",
                display: "flex",
                alignItems: "center"}}>
                <div>
                    <h2 style={{margin: "0"}}>
                        {stripHtmlTags(props.title)}
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
                            <rect width="125" height="125" rx="62.5" fill="#6D8069"/>
                            <path d="M53.3848 86.9233L77.6119 62.6962" stroke="#D9FFD2" stroke-width="10"
                                  stroke-linecap="round"/>
                            <path d="M53.3848 37.9941L77.6155 62.2249" stroke="#D9FFD2" stroke-width="10"
                                  stroke-linecap="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaskContainer;