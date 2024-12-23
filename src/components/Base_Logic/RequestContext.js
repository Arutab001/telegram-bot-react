import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";

const RequestContext = createContext();

export const RequestContextProvider = ({children}) => {
    const [image, setImage] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://geckoshi-prod.up.railway.app/post-capturer/channel/photo?r=2', {
                    responseType: 'blob' // Important to specify blob type here
                });
                console.log("Image Blob:", response);

                if (response.status === 200) {
                    // Convert blob to a local URL for the img element to display
                    const imageUrl = URL.createObjectURL(response.data);
                    setImage(imageUrl);
                }

            } catch (e) {
                console.error("Error fetching image:", e);
            }


            try {
                const response = await axios.get(`/task?page=1&limit=100`);

                if (response.status === 200) {
                    const data = await response.data;
                    console.log("TASKS:");
                    console.log(data);
                    setTasks(data.items);
                } else {
                    console.error('Ошибка при получении задач:', response.statusText);
                }
            } catch (error) {
                console.error('Ошибка сети:', error);
            }
        }


        fetchData();
    }, []);



    const contextValue = {image, tasks}

    return (
        <RequestContext.Provider value={contextValue}>
            {children}
        </RequestContext.Provider>
    )
}

export const useDataRequestContext = () => {
    return useContext(RequestContext);
}