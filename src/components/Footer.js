import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import Home from "./Main_Page/Home.js";

const Footer = () => {

    const [LinkColor, setLinkColor] = useState({
        Home: "#392D20",
        Task: "#725B40",
        Casino: "#725B40",
        Profile: "#725B40"
    });


    const setHomeColor = () => {
        setLinkColor({
            Home: "#392D20",
            Task: "#725B40",
            Casino: "#725B40",
            Profile: "#725B40",
        });
    };


    const setTaskColor = () => {
        setLinkColor({
            Home: "#725B40",
            Task: "#392D20",
            Casino: "#725B40",
            Profile: "#725B40",
        });
    };


    const setCasinoColor = () => {
        setLinkColor({
            Home: "#725B40",
            Task: "#725B40",
            Casino: "#392D20",
            Profile: "#725B40",
        });
    };

    const setProfileColor = () => {
        setLinkColor({
            Home: "#725B40",
            Task: "#725B40",
            Casino: "#725B40",
            Profile: "#392D20",
        });
    };


    return (
        <div className="Footer">
            <p>
                <Link to={"/"} onClick={setHomeColor}>
                    <svg fill={LinkColor.Home} xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                         viewBox="0 0 65 61">
                        <path fill={LinkColor.Home} fill-rule="evenodd" clip-rule="evenodd"
                              d="M34.6775 0.510277L62.3025 15.8074C63.1134 16.2086 63.7955 16.8258 64.272 17.5898C64.7485 18.3538 65.0006 19.2344 65 20.1325V24.7699C65 26.992 63.18 28.7955 60.9375 28.7955H58.5V54.5591H61.75C62.612 54.5591 63.4386 54.8984 64.0481 55.5023C64.6576 56.1063 65 56.9254 65 57.7795C65 58.6337 64.6576 59.4528 64.0481 60.0568C63.4386 60.6607 62.612 61 61.75 61H3.25C2.38805 61 1.5614 60.6607 0.951903 60.0568C0.34241 59.4528 0 58.6337 0 57.7795C0 56.9254 0.34241 56.1063 0.951903 55.5023C1.5614 54.8984 2.38805 54.5591 3.25 54.5591H6.5V28.7955H4.0625C1.82 28.7955 0 26.992 0 24.7699V20.1325C0 18.4514 0.8775 16.9056 2.2945 16.0296L30.3193 0.510277C30.9963 0.174707 31.743 0 32.5 0C33.257 0 34.0004 0.174707 34.6775 0.510277ZM48.75 28.7955H16.25V54.5591H22.75V35.2364H29.25V54.5591H35.75V35.2364H42.25V54.5591H48.75V28.7955ZM32.5 12.6932C31.638 12.6932 30.8114 13.0325 30.2019 13.6365C29.5924 14.2404 29.25 15.0596 29.25 15.9137C29.25 16.7678 29.5924 17.5869 30.2019 18.1909C30.8114 18.7948 31.638 19.1341 32.5 19.1341C33.362 19.1341 34.1886 18.7948 34.7981 18.1909C35.4076 17.5869 35.75 16.7678 35.75 15.9137C35.75 15.0596 35.4076 14.2404 34.7981 13.6365C34.1886 13.0325 33.362 12.6932 32.5 12.6932Z"
                        />
                    </svg>
                    <p style={{color: LinkColor.Home, fontSize: "medium"}}>
                        Home
                    </p>
                </Link>
            </p>
            <p onClick={setTaskColor}>
                <Link to={"/Tasks"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 65"
                         fill={LinkColor.Task}>
                        <path
                            d="M1.83147 26.619C3.02731 28.4762 4.5221 30.0238 6.61481 30.9524H18.5731C19.47 30.6429 20.0679 30.0238 20.6658 29.4048C23.6554 26.3095 24.8513 21.6667 23.3565 17.6429L23.0575 17.0238C22.7586 16.0952 22.1606 15.4762 21.5627 14.8571C21.2638 14.2381 20.6658 13.9286 20.3669 13.3095C19.1711 12.381 17.9752 11.4524 16.7794 10.2143C14.0888 7.42857 13.7898 3.09524 15.2846 0C13.7898 0.309524 12.295 1.2381 11.0992 2.47619C6.61481 6.19048 4.82106 12.6905 6.91377 18.5714V19.1905C6.91377 19.5 6.61481 19.8095 6.31585 20.119C6.01689 20.4286 5.41897 20.119 5.12001 19.8095L4.82106 19.5C3.02731 17.0238 2.72835 13.3095 3.92418 10.2143C1.23356 12.6905 -0.261235 16.7143 0.0377232 20.7381C0.0377232 21.6667 0.336681 22.5952 0.635639 23.5238C0.635639 24.4524 1.23356 25.6905 1.83147 26.619ZM12.8929 21.9762C13.1919 20.4286 12.594 19.1905 12.295 17.9524C11.9961 16.7143 11.9961 15.4762 12.594 14.2381L13.4908 16.0952C14.6867 17.9524 16.7794 18.5714 17.3773 21.0476V21.9762C17.3773 23.5238 16.7794 25.0714 15.8825 26C15.2846 26.3095 14.6867 26.9286 14.0888 26.9286C12.295 27.5476 10.2023 26.619 9.00647 25.381C11.3981 25.381 12.594 23.5238 12.8929 21.9762ZM20.9648 34.0476V40.2381H17.9752L14.9856 65H9.00647L6.01689 40.2381H3.02731V34.0476H20.9648Z"
                            fill={LinkColor.Task}/>
                    </svg>
                    <p style={{color: LinkColor.Task, fontSize: "medium"}}>Task</p>
                </Link>
            </p>
            <p onClick={setCasinoColor}>
                <Link to={"/Casino"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 59 65"
                         fill={LinkColor.Casino}>
                        <path
                            d="M22.9444 0H36.0556C46.905 0 52.4444 8.7425 52.4444 19.5V54.145C45.4956 50.7975 39.5628 48.75 29.5 48.75C19.4372 48.75 13.5044 50.7975 6.55556 54.145V19.5C6.55556 8.7425 12.095 0 22.9444 0ZM16.3889 19.5V24.375H42.6111V19.5H16.3889ZM19.6667 32.5V37.375H39.3333V32.5H19.6667ZM0 65V62.7575C8.71889 57.265 33.5317 44.98 59 62.5625V65H0Z"
                            fill={LinkColor.Casino}/>
                    </svg>
                    <p style={{color: LinkColor.Casino, fontSize: "medium"}}>Casino</p>
                </Link>
            </p>
            <p onClick={setProfileColor}>
                <Link to={"/Profile"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 55 61" fill="none">
                        <path
                            d="M29.2101 0C43.5665 0.928569 54.9886 13.3325 54.3701 27.8425C54.3135 29.1744 53.7703 31.1214 53.7928 32.2506C53.8057 32.9007 54.2844 34.052 54.3501 34.8869C54.7751 40.2981 51.1295 45.1894 45.8057 46.2216C45.0861 46.361 44.3606 46.3473 43.6485 46.5079C43.1981 51.0334 45.2988 56.1266 40.1402 58.4387C33.5878 61.3759 25.8121 61.7201 18.9313 59.8138C15.8147 58.9506 11.8803 57.8414 11.4586 54.053C11.1952 51.6827 11.6397 48.9195 11.4328 46.5079C10.7219 46.3485 9.99274 46.3589 9.27561 46.2216C3.94435 45.2019 0.306655 40.296 0.731608 34.8865C0.796953 34.052 1.27601 32.8999 1.28892 32.2502C1.31139 31.0973 0.769067 29.1835 0.711629 27.8421C0.0906411 13.4249 11.5352 0.84491 25.8721 0H29.2101ZM36.4826 55.9139C37.9613 55.2908 39.8872 55.3362 40.0641 53.3555C40.3146 50.5473 39.8064 47.3337 40.0545 44.5234C40.1839 43.0563 41.0859 42.7654 42.3894 42.7953C43.2065 42.8141 43.8816 42.9252 44.7564 42.7878C48.8224 42.1498 51.4375 38.3506 50.6396 34.3059C50.5276 33.7373 50.2242 33.2499 50.1884 32.611C50.1135 31.2692 50.7266 29.2189 50.7936 27.7239C51.4021 14.1778 39.8813 2.91432 26.4027 3.57151C13.7694 4.18668 3.67839 15.1418 4.2948 27.8363C4.36597 29.3063 4.9341 31.1385 4.89622 32.4903C4.87625 33.2116 4.56658 33.6778 4.44297 34.3054C3.51523 39.0095 7.05179 42.9302 11.745 42.9298C12.6453 42.9298 13.424 42.4927 14.2997 43.1058C14.7417 43.4155 14.964 43.8733 15.0239 44.4086C15.356 47.3728 14.7292 50.8703 15.0793 53.8907C15.416 55.1697 17.5066 55.5531 18.6 55.9135V51.681C18.6 51.629 19.0408 50.8703 19.1336 50.7841C20.2907 49.7078 22.0017 50.4815 22.1769 52.0386C22.2589 52.7669 22.0487 56.6236 22.1927 56.8508C23.3552 57.1372 24.5518 57.317 25.753 57.344V51.681C25.753 51.6003 26.2221 50.8407 26.3536 50.7317C27.0391 50.1623 28.14 50.1689 28.7959 50.7841C28.9275 50.9073 29.3295 51.679 29.3295 51.8001V57.3436L32.8548 56.875C33.0704 56.5761 32.787 52.6167 32.9135 51.8072C33.1366 50.3816 35.0271 49.7902 36.0085 50.8436C36.1055 50.9477 36.4826 51.7152 36.4826 51.8001V55.9131V55.9139Z"
                            fill={LinkColor.Profile}/>
                        <path
                            d="M15.9533 21.4955C23.831 20.78 28.8172 30.017 23.6682 36.1254C20.0355 40.4348 13.4948 40.399 9.90036 36.0608C5.35865 30.5789 8.93225 22.1336 15.9529 21.4959L15.9533 21.4955ZM16.0703 25.0695C9.33639 25.8815 10.277 36.4875 17.4529 35.7512C24.3088 35.0478 23.3831 24.1876 16.0703 25.0695Z"
                            fill={LinkColor.Profile}/>
                        <path
                            d="M37.4123 21.4955C45.29 20.78 50.2762 30.017 45.1272 36.1254C41.4945 40.4348 34.9538 40.399 31.3593 36.0608C26.8176 30.5789 30.3912 22.1336 37.4119 21.4959L37.4123 21.4955ZM37.5293 25.0695C30.7954 25.8815 31.736 36.4875 38.9119 35.7512C45.7678 35.0478 44.8421 24.1876 37.5293 25.0695Z"
                            fill={LinkColor.Profile}/>
                        <path
                            d="M27.1507 39.3694C27.7405 39.2482 28.2487 39.4326 28.7261 39.7668C29.3828 40.2263 31.7852 42.6662 32.3071 43.3388C33.3381 44.6673 32.9377 46.3051 31.1776 46.4957C29.4886 46.6785 25.7347 46.6535 24.0191 46.5003C22.5969 46.3734 21.7341 45.1493 22.4146 43.8133C22.6602 43.3305 25.6844 40.2946 26.2267 39.8759C26.4452 39.7073 26.8935 39.4222 27.1503 39.3698L27.1507 39.3694Z"
                            fill={LinkColor.Profile}/>
                    </svg>
                    <p style={{color: LinkColor.Profile, fontSize: "medium"}}>
                        Profile
                    </p>
                </Link>

            </p>
        </div>
    )
        ;
};

export default Footer;