// src/App.js
import './App.css';
import {useEffect} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

import Layout from './components/Layout.js'; // Импортируйте ваш новый Layout компонент
import Home from './components/Main_Page/Home.js';
import Casino from './components/Casino/Casino.js';
import Profile from './components/Profile/Profile.js';
import Task from './components/Task/Task.js';
import {UserProvider} from "./UserContext.js";
import TaskPage from "./components/Task/TaskPage.js";
import {TelegramAuth} from "./components/TelegramAuth.js";

const tg = window.Telegram.WebApp;

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}> {/* Используем Layout как обертку для всех страниц */}
            <Route index element={<Home/>}/>
            <Route path="Casino" element={<Casino/>}/>
            <Route path="Profile" element={<Profile/>}/>
            <Route path="Tasks" element={<Task/>}/>
            <Route path="TaskPage" element={<TaskPage/>}/>
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


    const onClose = () => {
        tg.close();
    };

    return (<TelegramAuth> <RouterProvider router={router}/></TelegramAuth>);
}

export default App;
