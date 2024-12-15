import './App.css';
import { useEffect, useState } from 'react';
import {createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './components/Base_Logic/Layout.js';
import Home from './components/Main_Page/Home.js';
import Casino from './components/Casino/Casino.js';
import Profile from './components/Profile/Profile.js';
import Task from './components/Task/Task.js';
import TaskPage from "./components/Task/TaskPage.js";
import CheckMainPage from "./components/Checks/Mainpage/CheckMainPage.js";
import CreateCheck from "./components/Checks/CreateCheck/CreateCheck.js";
import Check from "./components/Checks/Check/Check.js";
import ActivateCheck from "./components/Checks/ActivateCheck/ActivateCheck.js";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.js";
import StartRedirect from "./components/Base_Logic/StartRedirect.js";

const tg = window.Telegram.WebApp;

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        tg.ready(); // Telegram WebApp готов к работе
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<StartRedirect />} />
                <Route path="Home" element={<Home />} />
                <Route path="Casino" element={<Casino />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Tasks" element={<Task />} />
                <Route path="TaskPage" element={<TaskPage />} />
                <Route path="CheckMainPage" element={<CheckMainPage />} />
                <Route path="CreateCheck" element={<CreateCheck />} />
                <Route path="Check" element={<Check />} />
                <Route path="ActivateCheck/:checkId" element={<ActivateCheck />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
