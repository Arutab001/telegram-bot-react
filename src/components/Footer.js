import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import Home from "./Main_Page/Home.js";

const Footer = () => {

    const [LinkColor, setLinkColor] = useState({
        Home: "#FF9800",
        Task: "#FFEB3B",
        Casino: "#FFEB3B",
        Checks: "#FFEB3B",
        Profile: "#FFEB3B"
    });


    const setHomeColor = () => {
        setLinkColor({
            Home: "#FF9800",
            Task: "#FFEB3B",
            Casino: "#FFEB3B",
            Checks: "#FFEB3B",
            Profile: "#FFEB3B",
        });
    };


    const setTaskColor = () => {
        setLinkColor({
            Home: "#FFEB3B",
            Task: "#FF9800",
            Casino: "#FFEB3B",
            Checks: "#FFEB3B",
            Profile: "#FFEB3B",
        });
    };


    const setCasinoColor = () => {
        setLinkColor({
            Home: "#FFEB3B",
            Task: "#FFEB3B",
            Casino: "#FF9800",
            Checks: "#FFEB3B",
            Profile: "#FFEB3B",
        });
    };

    const setChecksColor = () => {
        setLinkColor({
            Home: "#FFEB3B",
            Task: "#FFEB3B",
            Casino: "#FFEB3B",
            Checks: "#FF9800",
            Profile: "#FFEB3B",
        })
    }

    const setProfileColor = () => {
        setLinkColor({
            Home: "#FFEB3B",
            Task: "#FFEB3B",
            Casino: "#FFEB3B",
            Checks: "#FFEB3B",
            Profile: "#FF9800",
        });
    };



    return (
        <div className="Footer">
            <p>
                <Link to={"/"} onClick={setHomeColor}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 78 77" fill={LinkColor.Home}>
                        <g clip-path="url(#clip0_446_572)">
                            <g filter="url(#filter0_d_446_572)">
                                <path
                                    d="M68.702 30.3841C68.5068 29.5222 68.2161 28.6813 67.8378 27.8842C67.4596 27.0874 66.9925 26.3322 66.45 25.64C65.9006 24.9389 65.2719 24.3005 64.5816 23.7418L45.4974 8.29931C44.5681 7.54746 43.5282 6.96725 42.4064 6.57509C41.3151 6.19352 40.1759 6 39.0203 6C37.8647 6 36.7289 6.19299 35.6389 6.57351C34.5186 6.9646 33.4795 7.54323 32.5509 8.29296L13.4267 23.7379C12.7351 24.2964 12.1053 24.9354 11.5549 25.6366C11.0111 26.3292 10.5434 27.0848 10.1643 27.8823C9.78525 28.6798 9.49387 29.5217 9.29834 30.3845C9.10037 31.2581 9 32.1556 9 33.0521V58.6014C9 59.4383 9.0835 60.2768 9.24824 61.0932C9.4095 61.8924 9.65025 62.6784 9.96338 63.4296C10.2704 64.1657 10.6502 64.8751 11.0918 65.5382C11.5283 66.1934 12.0293 66.8091 12.5809 67.3686C13.1327 67.9282 13.7398 68.4361 14.3859 68.8787C15.0398 69.3266 15.7393 69.7117 16.4652 70.023C17.2059 70.3408 17.9809 70.5847 18.7691 70.7483C19.5742 70.9153 20.401 71 21.2265 71H56.7737C57.599 71 58.4258 70.9153 59.2309 70.7483C60.0189 70.5847 60.7941 70.3408 61.5348 70.023C62.2607 69.7117 62.9602 69.3266 63.6141 68.8787C64.2602 68.4361 64.8673 67.928 65.4191 67.3686C65.9709 66.8091 66.4717 66.1934 66.9082 65.5382C67.3498 64.8751 67.7296 64.1657 68.0366 63.4296C68.3499 62.6784 68.5905 61.8925 68.7518 61.0932C68.9165 60.2768 69 59.4383 69 58.6014V33.049C69 32.1533 68.8998 31.2566 68.7022 30.3841H68.702ZM46.7172 64.5067H31.3392C31.3197 64.5067 31.3012 64.5029 31.2845 64.4958C31.2318 64.4739 31.1946 64.4214 31.1946 64.36V37.8187C31.1946 37.7376 31.2593 37.6719 31.3392 37.6719H46.7172C46.7971 37.6719 46.8618 37.7376 46.8618 37.8187V64.36C46.8618 64.4214 46.8245 64.4739 46.7718 64.4958C46.755 64.5029 46.7365 64.5067 46.7172 64.5067ZM62.586 58.6014C62.586 61.8567 59.9836 64.4958 56.7735 64.4958H53.2744C53.2754 64.4506 53.2758 64.4055 53.2758 64.36V37.8187C53.2758 36.9236 53.1015 36.0518 52.7575 35.2276C52.4269 34.4348 51.9551 33.7244 51.3549 33.1156C50.7548 32.507 50.0541 32.0284 49.2723 31.6933C48.4597 31.3447 47.5999 31.1677 46.7174 31.1677H31.3393C30.4568 31.1677 29.5971 31.3447 28.7844 31.6931C28.0026 32.0286 27.3019 32.5072 26.7016 33.116C26.1015 33.7246 25.6293 34.4352 25.2988 35.2281C24.9552 36.0521 24.7809 36.9238 24.7809 37.8187V64.36C24.7809 64.4053 24.7815 64.4505 24.7823 64.4958H21.2263C18.0161 64.4958 15.4137 61.8567 15.4137 58.6014V33.0521C15.4137 31.4066 16.153 29.8508 17.4223 28.8257L36.5468 13.3811C37.2706 12.7963 38.1456 12.5042 39.0204 12.5042C39.8953 12.5042 40.7729 12.7974 41.4973 13.3834L60.5813 28.8259C61.8484 29.8512 62.5862 31.4055 62.5862 33.0491V58.6016L62.586 58.6014Z"
                                    fill={LinkColor.Home}/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_446_572" x="2" y="-1" width="74" height="79"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.596078 0 0 0 0 0 0 0 0 0.4 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_572"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_572"
                                         result="shape"/>
                            </filter>
                            <clipPath id="clip0_446_572">
                                <rect width="78" height="77" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p style={{color: LinkColor.Home, fontSize: "medium"}}>
                        Home
                    </p>
                </Link>
            </p>
            <p onClick={setTaskColor}>
                <Link to={"/Tasks"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 78 77" fill={LinkColor.Task}>
                        <g clip-path="url(#clip0_446_566)">
                            <g filter="url(#filter0_d_446_566)">
                                <path
                                    d="M66.065 17.2305C65.9287 16.5519 65.7252 15.8845 65.4603 15.2467C65.2008 14.6218 64.8799 14.0198 64.5066 13.4571C64.138 12.9015 63.7148 12.379 63.2489 11.9046C62.783 11.4303 62.27 10.9993 61.7244 10.6239C61.1718 10.2438 60.5806 9.91697 59.9669 9.6528C59.3406 9.38304 58.6851 9.17578 58.0188 9.03695C57.3384 8.89517 56.6403 8.82328 55.9436 8.82328H47.6777C47.6527 8.80634 47.6275 8.78956 47.6023 8.77279C46.4121 7.98225 45.0788 7.31509 43.7463 6.8435C42.1645 6.28374 40.6138 6 39.1374 6C37.661 6 36.145 6.27322 34.5616 6.81208C33.2177 7.26936 31.8692 7.91563 30.6618 8.68084C30.5875 8.72804 30.5137 8.77542 30.4406 8.82328H22.3313C21.6346 8.82328 20.9364 8.89517 20.2561 9.03695C19.5897 9.17578 18.9342 9.38304 18.308 9.6528C17.6943 9.91697 17.1031 10.2438 16.5505 10.6239C16.0049 10.9993 15.4918 11.4303 15.026 11.9046C14.5601 12.379 14.1369 12.9015 13.7683 13.4571C13.395 14.0198 13.074 14.6218 12.8146 15.2467C12.5497 15.8845 12.3462 16.5519 12.2098 17.2305C12.0706 17.9233 12 18.6342 12 19.3436V60.4796C12 61.1891 12.0706 61.9 12.2098 62.5928C12.3462 63.2713 12.5497 63.9388 12.8146 64.5765C13.074 65.2014 13.395 65.8035 13.7683 66.3662C14.1369 66.9218 14.5601 67.4442 15.026 67.9186C15.4918 68.393 16.0049 68.824 16.5505 69.1993C17.1031 69.5795 17.6943 69.9063 18.308 70.1705C18.9342 70.4402 19.5897 70.6475 20.2561 70.7863C20.9364 70.9281 21.6346 71 22.3313 71H55.9435C56.6401 71 57.3383 70.9281 58.0187 70.7863C58.685 70.6475 59.3405 70.4402 59.9667 70.1705C60.5804 69.9063 61.1716 69.5795 61.7242 69.1993C62.2699 68.824 62.7829 68.393 63.2487 67.9186C63.7146 67.4442 64.1378 66.9218 64.5064 66.3662C64.8797 65.8035 65.2007 65.2014 65.4601 64.5765C65.725 63.9388 65.9286 63.2713 66.0649 62.5928C66.2041 61.9 66.2747 61.1891 66.2747 60.4796V19.3436C66.2747 18.6342 66.2041 17.9233 66.0649 17.2305H66.065ZM46.6775 17.6979C46.6775 20.3405 43.578 20.5574 40.7477 20.5574C40.1918 20.5574 39.647 20.549 39.1375 20.549C38.628 20.549 38.0761 20.5574 37.5091 20.5574C34.6201 20.5574 31.3428 20.3406 31.3428 17.6979C31.3428 16.9451 31.8347 16.143 32.6052 15.4028C34.2142 13.8568 37.0382 12.5795 39.1375 12.5795C41.2368 12.5795 43.9218 13.866 45.4586 15.4028C46.2042 16.1483 46.6775 16.9528 46.6775 17.6979ZM59.8134 60.4796C59.8134 62.656 58.0807 64.4205 55.9435 64.4205H22.3314C20.1942 64.4205 18.4614 62.656 18.4614 60.4796V19.3436C18.4614 17.1673 20.1942 15.4028 22.3314 15.4028H25.1944C24.9864 16.1567 24.8815 16.9245 24.8815 17.6979C24.8815 18.81 25.0691 19.8835 25.439 20.8884C25.8228 21.9312 26.3931 22.878 27.1344 23.7026C28.2327 24.9241 29.659 25.8268 31.374 26.3854C32.3821 26.7137 33.4965 26.9272 34.7808 27.0383C35.7938 27.1258 36.7711 27.137 37.5091 27.137C37.8246 27.137 38.1249 27.1347 38.4155 27.1324C38.6718 27.1304 38.914 27.1286 39.1375 27.1286C39.3611 27.1286 39.6032 27.1304 39.8584 27.1325C40.144 27.1347 40.4391 27.137 40.7477 27.137C42.7164 27.137 44.8152 27.0425 46.8242 26.3581C47.5616 26.1069 48.2528 25.7852 48.8784 25.4018C49.696 24.9009 50.4179 24.2872 51.024 23.5778C51.7284 22.753 52.268 21.8123 52.6275 20.7818C52.9667 19.8088 53.1388 18.7714 53.1388 17.6979C53.1388 16.9262 53.0344 16.1582 52.8275 15.4028H55.9436C58.0808 15.4028 59.8136 17.1673 59.8136 19.3436V60.4796H59.8134Z"
                                    fill={LinkColor.Task}/>
                                <path
                                    d="M46.7295 32.3594H31.5455C30.1003 32.3594 28.9287 33.5524 28.9287 35.0241C28.9287 36.4958 30.1003 37.6888 31.5455 37.6888H46.7295C48.1748 37.6888 49.3463 36.4958 49.3463 35.0241C49.3463 33.5524 48.1748 32.3594 46.7295 32.3594Z"
                                    fill={LinkColor.Task}/>
                                <path
                                    d="M39.301 43.0176H31.5455C30.1003 43.0176 28.9287 44.2106 28.9287 45.6823C28.9287 47.154 30.1003 48.347 31.5455 48.347H39.301C40.7462 48.347 41.9178 47.154 41.9178 45.6823C41.9178 44.2106 40.7462 43.0176 39.301 43.0176Z"
                                    fill={LinkColor.Task}/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_446_566" x="5" y="-1" width="68.2744" height="79"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 1 0 0 0 0 0.921569 0 0 0 0 0.231373 0 0 0 0.4 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_566"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_566"
                                         result="shape"/>
                            </filter>
                            <clipPath id="clip0_446_566">
                                <rect width="78" height="77" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p style={{color: LinkColor.Task, fontSize: "medium"}}>Task</p>
                </Link>
            </p>
            <p onClick={setCasinoColor}>
                <Link to={"/Casino"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 78 77" fill="none">
                        <g clip-path="url(#clip0_446_570)">
                            <g filter="url(#filter0_d_446_570)">
                                <path
                                    d="M18.8182 38.5L24.7273 25.5V22.25H15.8636V25.5H21.7727L15.8636 38.5M30.6364 38.5L36.5455 25.5V22.25H27.6818V25.5H33.5909L27.6818 38.5M42.4545 38.5L48.3636 25.5V22.25H39.5V25.5H45.4091L39.5 38.5M66.0909 6C62.8409 6 60.1818 8.925 60.1818 12.5C60.1818 14.775 61.3636 17.05 63.1364 18.025V54.75H54.2727V48.25C56.0455 48.25 57.2273 46.95 57.2273 45V15.75C57.2273 13.8 56.0455 12.5 54.2727 12.5H43.0455C40.6818 8.6 36.5455 6 32.1136 6C27.6818 6 23.5455 8.6 21.1818 12.5H9.95455C8.18182 12.5 7 13.8 7 15.75V45C7 46.95 8.18182 48.25 9.95455 48.25V71H54.2727V61.25H63.1364C66.3864 61.25 69.0455 58.325 69.0455 54.75V18.025C70.8182 17.05 72 14.775 72 12.5C72 8.925 69.3409 6 66.0909 6ZM12.9091 19H51.3182V41.75H12.9091V19ZM48.3636 64.5H15.8636V48.25H48.3636V64.5ZM42.4545 61.25H21.7727V54.75H42.4545V61.25Z"
                                    fill={LinkColor.Casino}/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_446_570" x="0" y="-1" width="79" height="79"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 1 0 0 0 0 0.921569 0 0 0 0 0.231373 0 0 0 0.4 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_570"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_570"
                                         result="shape"/>
                            </filter>
                            <clipPath id="clip0_446_570">
                                <rect width="78" height="77" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p style={{color: LinkColor.Casino, fontSize: "medium"}}>Casino</p>
                </Link>
            </p>
            <p onClick={setProfileColor}>
                <Link to={"/Profile"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 77 77" fill="none">
                        <g clip-path="url(#clip0_446_576)">
                            <g filter="url(#filter0_d_446_576)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M38.5 12.5C33.9525 12.4992 29.4843 13.6911 25.5413 15.9568C21.5984 18.2225 18.3187 21.4827 16.0296 25.4121C13.7404 29.3415 12.5219 33.8025 12.4957 38.35C12.4695 42.8974 13.6364 47.3722 15.88 51.3277C17.3965 49.3569 19.3459 47.7611 21.5775 46.6639C23.8092 45.5667 26.2632 44.9974 28.75 45H48.25C50.7368 44.9974 53.1908 45.5667 55.4225 46.6639C57.6541 47.7611 59.6035 49.3569 61.12 51.3277C63.3636 47.3722 64.5306 42.8974 64.5043 38.35C64.4781 33.8025 63.2596 29.3415 60.9704 25.4121C58.6813 21.4827 55.4016 18.2225 51.4587 15.9568C47.5157 13.6911 43.0475 12.4992 38.5 12.5ZM64.3147 58.247C64.7221 57.7162 65.1121 57.1723 65.4847 56.6155C69.0878 51.2617 71.0084 44.9533 71 38.5C71 20.5502 56.4497 6 38.5 6C20.5503 6 6.00003 20.5502 6.00003 38.5C5.98979 45.6395 8.34016 52.582 12.6853 58.247L12.669 58.3055L13.8228 59.6477C16.8709 63.2114 20.6555 66.0717 24.9158 68.0316C29.176 69.9914 33.8106 71.0041 38.5 71C39.202 71 39.8997 70.9783 40.593 70.935C46.4573 70.5652 52.11 68.6046 56.9437 65.2637C59.2555 63.6689 61.3508 61.7812 63.1772 59.6477L64.331 58.3055L64.3147 58.247ZM38.5 19C35.9141 19 33.4342 20.0272 31.6057 21.8557C29.7772 23.6842 28.75 26.1641 28.75 28.75C28.75 31.3359 29.7772 33.8158 31.6057 35.6443C33.4342 37.4728 35.9141 38.5 38.5 38.5C41.0859 38.5 43.5658 37.4728 45.3943 35.6443C47.2228 33.8158 48.25 31.3359 48.25 28.75C48.25 26.1641 47.2228 23.6842 45.3943 21.8557C43.5658 20.0272 41.0859 19 38.5 19Z"
                                      fill={LinkColor.Profile}/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_446_576" x="-1" y="-1" width="79" height="79"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix"
                                               values="0 0 0 0 1 0 0 0 0 0.921569 0 0 0 0 0.231373 0 0 0 0.4 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_446_576"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_446_576"
                                         result="shape"/>
                            </filter>
                            <clipPath id="clip0_446_576">
                                <rect width="77" height="77" fill="white"/>
                            </clipPath>
                        </defs>
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