// src/App.js
import './App.css';
import {useEffect, useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './components/Base_Logic/Layout.js'; // Импортируйте ваш новый Layout компонент
import Home from './components/Main_Page/Home.js';
import Casino from './components/Casino/Casino.js';
import Profile from './components/Profile/Profile.js';
import Task from './components/Task/Task.js';
import TaskPage from "./components/Task/TaskPage.js";
import {TelegramAuth} from "./components/Base_Logic/TelegramAuth.js";
import CheckMainPage from "./components/Checks/Mainpage/CheckMainPage.js";
import CreateCheck from "./components/Checks/CreateCheck/CreateCheck.js";
import Check from "./components/Checks/Check/Check.js";
import {useUser} from "./components/Base_Logic/UserContext.js";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.js";

const tg = window.Telegram.WebApp;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}> {/* Используем Layout как обертку для всех страниц */}
            <Route index element={<Home/>}/>
            <Route path="Casino" element={<Casino/>}/>
            <Route path="Profile" element={<Profile/>}/>
            <Route path="Tasks" element={<Task/>}/>
            <Route path="TaskPage" element={<TaskPage/>}/>
            <Route path="CheckMainPage" element={<CheckMainPage />} />
            <Route path="CreateCheck" element={<CreateCheck />} />
            <Route path="Check" element={<Check />} />
        </Route>
    )
);

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    document.addEventListener('wheel', function (event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, {passive: false});

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
            event.preventDefault();
        }
    });

    const [isLoading, setIsLoading] = useState(true);

    const { user } = useUser();

    useEffect(() => {
        if (!user) {
            setIsLoading(false);
        }
    }, [user]);


    const onClose = () => {
        tg.close();
    };

    return (
        <>
            {isLoading ? (
                <LoadingScreen onComplete={() => {setIsLoading(false)}} />
            ) : (<RouterProvider router={router}/>)}
        </>
)
}

export default App;
