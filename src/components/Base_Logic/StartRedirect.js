import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const startParam = queryParams.get("start");

        if (startParam) {
            // Перенаправление на ActivateCheck с параметром checkId
            navigate(`/ActivateCheck/${startParam}`);
        }
    }, [location, navigate]);

    return null; // Этот компонент ничего не отображает
};

export default StartRedirect;
