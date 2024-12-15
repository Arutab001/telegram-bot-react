import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const startApp = params.get('startapp');

        if (startApp) {
            navigate(`/ActivateCheck/${startApp}`);
        } else {
            navigate('/Home');
        }
    }, [navigate]);

    return null; // Этот компонент не рендерит ничего на экран
};

export default StartRedirect;
