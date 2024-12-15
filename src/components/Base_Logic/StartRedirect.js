import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from '../Main_Page/Home.js'; // Импорт компонента Home

const StartRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startParam = queryParams.get("startapp");

        if (startParam) {
            navigate(`/ActivateCheck/${startParam}`);
        }
    }, [location, navigate]);

    return <Home />;
};

export default StartRedirect;
