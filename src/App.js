import './App.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from 'react-router-dom';
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

const tg = window.Telegram.WebApp;

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [startParam, setStartParam] = useState(null);

    useEffect(() => {
        tg.ready();

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
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

    // Если есть startParam, перенаправляем на ActivateCheck
    if (startParam) {
        return (
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <Route path="/" element={<Layout />}>
                            <Route path="ActivateCheck/:checkId" element={<ActivateCheck />} />
                        </Route>
                    )
                )}
                initialEntries={[`/ActivateCheck/${startParam}`]}
            />
        );
    }

    return <RouterProvider router={router} />;
}

export default App;
