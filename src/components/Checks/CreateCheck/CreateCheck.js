import React, {useEffect, useRef, useState} from 'react';
import CreateCheckStyles from "./CreateCheck.module.css"
import gecko from "../../../images/gecko_coin_rem 1.png";
import LinkToUser from "./LinkToUser/LinkToUser.js"
import {Link, useNavigate} from "react-router-dom";
import {useUser} from "../../Base_Logic/UserContext.js";
import axios from "axios";

const CreateCheck = () => {

    const {user} = useUser();

    const [isChecked, setIsChecked] = useState(false);
    const [svgPosition, setSvgPosition] = useState(0); // Позиция SVG
    const [gradientDirection, setGradientDirection] = useState({
        x1: "132.667",
        y1: "140",
        x2: "186.451",
        y2: "8.00458",
    });


    const [amount, setAmount] = useState(0);
    const textareaRef = useRef(null);
    const [name, setName] = useState('Check 1');

    const [open, setOpen] = useState(false);

    const [connected_to_user, setConnection] = useState("");

    const [activationLimit, setActivationLimit] = useState("");

    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Устанавливаем начальную ширину после монтирования
        const textarea = textareaRef.current;
        if (textarea) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            const computedStyle = getComputedStyle(textarea);

            // Установка шрифта из стилей элемента
            context.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
            const textWidth = context.measureText(name).width;

            // Установка ширины с небольшим отступом
            textarea.style.width = `${textWidth + 10}px`;
        }
    }, [name]);

    const handleInput = (e) => {

        const value = e.target.value;

        setName(value);

        const textarea = textareaRef.current;

        if (textarea) {
            textarea.style.width = "auto"; // Сбрасываем текущую ширину
            textarea.style.width = `${textarea.scrollWidth}px`; // Устанавливаем ширину по содержимому
        }

    };

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleAmountChange = (event) => {
        const value = event.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    };

    const handleConnectionChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setConnection(value);
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleActivationLimit = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setActivationLimit(value);
        }

    }

    const handleButtonClick = (position, checked) => {
        setIsChecked(checked);
        setSvgPosition(position);
        if (position === 0) {
            setGradientDirection({
                x1: "132.667",
                y1: "140",
                x2: "186.451",
                y2: "8.00458",
            }); // Градиент от зелёного к жёлтому
        } else {
            setGradientDirection({
                x1: "186.451",
                y1: "8.00458",
                x2: "132.667",
                y2: "140",
            });
        }
    };

    const createSingleCheck = async () => {
        try {
            const response = await axios.post('/cheque/personal', {
                name: name,
                amount: amount,
                connected_to_user: connected_to_user,
                description: "",
                password: password
            }, {
                headers: {'Content-Type': 'application/json'}
            })

            if (response.status === 200) {
                handleOpen();
            }
        } catch
            (e) {
            console.error(e);
        }
    }

    const createMultiCheck = async () => {
        try {
            const response = await axios.post('/cheque/multi',
                {
                    name: name,
                    amount: amount,
                    activation_limit: activationLimit,
                    require_subscriptions: [],
                    description: "",
                    password: password
                },
                {
                    headers: {'Content-Type': 'application/json'}
                });
            if (response.status === 200) {
                handleOpen();
            } else {

            }
        } catch (e) {
            console.error(e)
        }


    }


    return (
        <div className={CreateCheckStyles.page}>
            <div className={CreateCheckStyles.page_header}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 188 188" fill="none">
                    <circle cx="94" cy="94" r="94" fill="url(#paint0_linear_596_529)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M70.19 41.0313H118.561C123.58 41.0313 127.035 41.0313 129.942 42.0435C132.658 43.0094 135.116 44.5916 137.126 46.6671C139.135 48.7426 140.642 51.2557 141.53 54.0115C142.497 56.9737 142.492 60.4966 142.492 65.7215V135.922C142.492 143.196 133.969 147.523 128.357 142.357C128.177 142.184 127.938 142.088 127.689 142.088C127.439 142.088 127.2 142.184 127.02 142.357L124.631 144.551C120.051 148.768 113.112 148.768 108.532 144.551C107.703 143.772 106.611 143.34 105.477 143.34C104.343 143.34 103.251 143.772 102.422 144.551C97.8425 148.768 90.9034 148.768 86.3235 144.551C85.4945 143.772 84.4027 143.34 83.2686 143.34C82.1344 143.34 81.0426 143.772 80.2136 144.551C75.6337 148.768 68.6947 148.768 64.1147 144.551L61.731 142.357C61.5507 142.183 61.3101 142.085 61.0598 142.085C60.8094 142.085 60.5688 142.183 60.3886 142.357C54.7771 147.518 46.2539 143.196 46.2539 135.922V65.7264C46.2539 60.4966 46.2539 56.9737 47.2163 54.0115C48.1037 51.2557 49.6107 48.7426 51.6203 46.6671C53.63 44.5916 56.0882 43.0094 58.8043 42.0435C61.7162 41.0263 65.1709 41.0313 70.19 41.0313ZM70.9057 48.474C64.8797 48.474 62.8019 48.5237 61.2325 49.0744C59.5934 49.6652 58.1115 50.6273 56.9014 51.886C55.6913 53.1448 54.7855 54.6666 54.254 56.3336C53.7062 58.0107 53.6618 60.2237 53.6618 66.436V135.922C53.6618 136.517 53.953 136.875 54.3231 137.048C54.492 137.129 54.6803 137.16 54.866 137.138C55.0657 137.103 55.2501 137.008 55.3941 136.865C56.9384 135.435 58.9607 134.642 61.0598 134.642C63.1588 134.642 65.1812 135.435 66.7255 136.865L69.1092 139.058C69.9382 139.836 71.03 140.269 72.1642 140.269C73.2983 140.269 74.3902 139.836 75.2191 139.058C77.4126 137.026 80.286 135.898 83.2686 135.898C86.2511 135.898 89.1246 137.026 91.318 139.058C92.147 139.836 93.2388 140.269 94.373 140.269C95.5071 140.269 96.5989 139.836 97.4279 139.058C99.6213 137.026 102.495 135.898 105.477 135.898C108.46 135.898 111.333 137.026 113.527 139.058C114.356 139.836 115.448 140.269 116.582 140.269C117.716 140.269 118.808 139.836 119.637 139.058L122.02 136.865C123.565 135.435 125.587 134.642 127.686 134.642C129.785 134.642 131.808 135.435 133.352 136.865C133.564 137.063 133.747 137.123 133.885 137.138C134.069 137.159 134.255 137.128 134.423 137.048C134.793 136.875 135.089 136.512 135.089 135.922V66.436C135.089 60.2237 135.04 58.0107 134.497 56.3287C133.964 54.6615 133.056 53.14 131.844 51.8821C130.632 50.6241 129.149 49.6635 127.508 49.0744C125.944 48.5286 123.866 48.479 117.84 48.479L70.9057 48.474ZM109.184 71.7452C109.547 72.0707 109.843 72.4651 110.055 72.9058C110.266 73.3464 110.389 73.8247 110.417 74.3132C110.444 74.8018 110.376 75.2909 110.215 75.7528C110.054 76.2146 109.804 76.6401 109.48 77.0048L91.851 96.8522C91.5038 97.2433 91.0783 97.5561 90.6025 97.7704C90.1266 97.9846 89.6111 98.0954 89.0897 98.0954C88.5683 98.0954 88.0528 97.9846 87.577 97.7704C87.1011 97.5561 86.6757 97.2433 86.3284 96.8522L79.2808 88.9132C78.6331 88.1766 78.3017 87.2122 78.3589 86.2306C78.4161 85.2491 78.8574 84.3302 79.5863 83.6747C80.3152 83.0192 81.2726 82.6804 82.2492 82.7322C83.2258 82.784 84.1423 83.2223 84.7985 83.9514L89.0922 88.7842L103.957 72.0479C104.281 71.6829 104.672 71.3856 105.11 71.1729C105.548 70.9602 106.023 70.8362 106.508 70.8081C106.993 70.78 107.48 70.8483 107.939 71.0091C108.398 71.1699 108.821 71.42 109.184 71.7452ZM68.4676 111.738C68.4676 110.751 68.8576 109.804 69.5518 109.106C70.2459 108.408 71.1874 108.016 72.1691 108.016H116.587C117.568 108.016 118.51 108.408 119.204 109.106C119.898 109.804 120.288 110.751 120.288 111.738C120.288 112.725 119.898 113.671 119.204 114.369C118.51 115.067 117.568 115.459 116.587 115.459H72.1691C71.1874 115.459 70.2459 115.067 69.5518 114.369C68.8576 113.671 68.4676 112.725 68.4676 111.738Z"
                          fill="#212121"/>
                    <defs>
                        <linearGradient id="paint0_linear_596_529" x1="188" y1="0" x2="0" y2="188"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#FFEB3B"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h1 style={{display: "flex"}}>
                    <textarea maxLength={19} className={CreateCheckStyles.name_textarea} rows={1} value={name}
                              onChange={(e) => {
                                  handleInput(e)
                              }}
                              ref={textareaRef}></textarea>

                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M20.0773 6.50944e-07L20.0792 0C21.2503 0.00115803 22.3948 0.370112 23.3682 1.06028C24.3417 1.75046 25.1004 2.73091 25.5487 3.87786C25.9969 5.02481 26.1146 6.28684 25.8868 7.50464C25.6598 8.71826 25.0999 9.83372 24.2774 10.7112L11.9758 24.1876C11.8112 24.3679 11.608 24.5035 11.3835 24.5828L1.93694 27.9199C1.40811 28.1068 0.825099 27.9608 0.43098 27.5429C0.0368605 27.125 -0.100718 26.5069 0.0756039 25.9463L3.22494 15.9333C3.29461 15.7118 3.41028 15.5097 3.56342 15.3419L12.7282 5.30075C12.744 5.28231 12.7603 5.26417 12.777 5.24635C12.7829 5.24007 12.7889 5.23386 12.7948 5.22772L15.8709 1.85756L15.8886 1.83849C17 0.661781 18.5065 0.000586687 20.0773 6.50944e-07ZM13.8379 8.57216L6.68527 16.4088L7.74553 17.5328L14.8527 9.6454L13.8379 8.57216ZM17.9105 8.47197L15.8848 6.3295L17.9764 4.03787C18.5353 3.4507 19.2903 3.12085 20.0774 3.12029C20.6665 3.12107 21.2422 3.30677 21.732 3.65399C22.222 4.00139 22.6039 4.4949 22.8295 5.07222C23.0551 5.64954 23.1144 6.28479 22.9997 6.89777C22.8851 7.51075 22.6017 8.07398 22.1854 8.51636L22.1696 8.53336L20.106 10.794L17.992 8.55814C17.9717 8.53497 17.9507 8.5123 17.9288 8.49017C17.9228 8.48404 17.9167 8.47797 17.9105 8.47197ZM16.9368 11.8497L9.82731 19.7397L10.901 20.878L18.059 13.0365L16.9368 11.8497ZM8.19369 22.4207L6.76822 20.9095C6.76291 20.9042 6.75762 20.899 6.75236 20.8936C6.73045 20.8715 6.70932 20.8487 6.68898 20.8255L5.26399 19.3148L3.7988 23.9732L8.19369 22.4207Z"
                              fill="#FFEB3B"/>
                    </svg>

                </h1>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <button
                        onClick={() => handleButtonClick(0, true)}
                        className={CreateCheckStyles.CheckButtons}
                    >
                        Solo Cheque
                    </button>
                    <p className={CreateCheckStyles.CheckButtons}>
                        |
                    </p>
                    <button
                        onClick={() => handleButtonClick(1, false)}
                        className={CreateCheckStyles.CheckButtons}
                    >
                        Multi
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            style={{display: "none"}}
                        />
                    </label>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="6"
                        viewBox="0 0 140 4"
                        fill="none"
                        style={{
                            position: "absolute",
                            top: "60px", // Расстояние до кнопок
                            left: `${svgPosition === 0 ? "35%" : "80%"}`, // Положение под кнопкой
                            transform: "translateX(-50%)",
                            transition: "left 0.3s ease",

                        }}
                    >
                        <rect x="140" width="4.00001" height="140" rx="2" transform="rotate(90 140 0)" fill="#D9D9D9"/>
                        <rect
                            x="140"
                            width="4.00001"
                            height="140"
                            rx="2"
                            transform="rotate(90 140 0)"
                            fill={`url(#paint0_linear_732_361)`}
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_732_361"
                                x1={gradientDirection.x1}
                                y1={gradientDirection.y1}
                                x2={gradientDirection.x2}
                                y2={gradientDirection.y2}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4CAF50"/>
                                <stop offset="1" stopColor="#FFEB3B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

            </div>
            <div className={CreateCheckStyles.box_create}>
                <div className={CreateCheckStyles.CheckBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 804 732"
                         preserveAspectRatio="xMidYMid slice"
                         width="100%" height="auto"

                    >
                        <path
                            d="M0 0C0 0 28.5028 24 50.25 24C71.9972 24 78.7528 0 100.5 0C122.247 0 129.003 24 150.75 24C172.497 24 179.253 0 201 0C222.747 0 229.503 24 251.25 24C272.997 24 279.753 0 301.5 0C323.247 0 330.003 24 351.75 24C373.497 24 380.253 0 402 0C423.747 0 430.503 24 452.25 24C473.997 24 480.753 0 502.5 0C524.247 0 531.003 24 552.75 24C574.497 24 581.253 0 603 0C624.747 0 631.503 24 653.25 24C674.997 24 681.753 0 703.5 0C725.247 0 732.003 24 753.75 24C775.497 24 804 0 804 0V227.5C804 227.5 789 227.5 789 242C789 256.5 804 256.5 804 256.5V732C804 732 775.668 707 753.75 707C731.832 707 725.418 732 703.5 732C681.582 732 675.168 707 653.25 707C631.332 707 624.918 732 603 732C581.082 732 574.668 707 552.75 707C530.832 707 524.418 732 502.5 732C480.582 732 474.168 707 452.25 707C430.332 707 423.918 732 402 732C380.082 732 373.668 707 351.75 707C329.832 707 323.418 732 301.5 732C279.582 732 273.168 707 251.25 707C229.332 707 222.918 732 201 732C179.082 732 172.668 707 150.75 707C128.832 707 122.418 732 100.5 732C78.5817 732 72.1683 707 50.25 707C28.3317 707 0 732 0 732V256.5C0 256.5 15 256.5 15 242C15 227.5 0 227.5 0 227.5L0 0Z"
                            fill="#DADADA"/>
                    </svg>
                </div>


                <div>
                    <div className={CreateCheckStyles.box_header}>
                        <div>
                            <img src={gecko} style={{
                                width: "10vw",
                                height: "5vh",
                                border: "1px solid black",
                                borderRadius: "100%"
                            }}/>
                        </div>
                        <div>
                            <div>
                                <textarea rows={1}
                                          className={CreateCheckStyles.amount_textarea}
                                          placeholder="enter the amount"
                                          value={amount}
                                          onChange={handleAmountChange}></textarea>
                            </div>
                            <div>balance: {user.balance}</div>
                        </div>
                    </div>
                    <div>
                        ---- Share and get rewarded ----
                    </div>
                </div>
                <div style={{textAlign: "left", width: "60vw"}}>
                    Total: <br/>
                    00.00 GMEME
                </div>
                <div style={{marginLeft: "10%"}}>
                    {!isChecked ? <textarea rows={1}
                                            className={CreateCheckStyles.amount_textarea}
                                            value={connected_to_user}
                                            onChange={handleConnectionChange}
                                            placeholder="enter user gecko id"></textarea> : <textarea rows={1}
                                                                                                      className={CreateCheckStyles.amount_textarea}
                                                                                                      value={activationLimit}
                                                                                                      onChange={handleActivationLimit}
                                                                                                      placeholder={"ActivationLimit"}></textarea>
                    }


                    <input type={"password"}
                           className={CreateCheckStyles.amount_textarea}
                           value={password}
                           placeholder={"Password"}
                           onChange={handlePasswordChange}
                    />

                </div>
                <div style={{width: "80vw", display: "flex", justifyContent: "center", margin: "5% 0"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="4" viewBox="0 0 724 4" fill="none">
                        <rect width="724" height="4" fill="#212121"/>
                    </svg>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {!isChecked ? <button className={CreateCheckStyles.Button_LinkUser} onClick={createSingleCheck}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 23 24"
                             fill="none">
                            <path
                                d="M5.47509 9.06655L1.85991 12.8387C1.27328 13.4427 0.806944 14.1618 0.487747 14.9545C0.168549 15.7473 0.00279808 16.5982 3.62396e-05 17.4581C-0.00272369 18.318 0.15756 19.1699 0.471661 19.9649C0.785761 20.7599 1.24747 21.4823 1.83021 22.0903C2.41295 22.6984 3.10521 23.1801 3.86712 23.5079C4.62903 23.8356 5.44555 24.0028 6.26966 24C7.09378 23.9971 7.9092 23.8241 8.66899 23.4911C9.42879 23.158 10.1179 22.6714 10.6968 22.0593L11.9011 20.8027C12.0639 20.6388 12.1938 20.4426 12.2832 20.2257C12.3726 20.0088 12.4198 19.7755 12.4218 19.5394C12.4239 19.3033 12.3809 19.0691 12.2953 18.8505C12.2097 18.632 12.0833 18.4333 11.9233 18.2663C11.7634 18.0993 11.5732 17.9671 11.3638 17.8776C11.1544 17.7881 10.93 17.743 10.7037 17.745C10.4774 17.7469 10.2538 17.7958 10.0458 17.8889C9.83785 17.982 9.64974 18.1174 9.49245 18.2871L8.28588 19.5449C7.75234 20.0966 7.03109 20.4053 6.27994 20.4035C5.5288 20.4017 4.80893 20.0895 4.27786 19.5352C3.74679 18.9809 3.44777 18.2297 3.44623 17.4459C3.4447 16.6621 3.74076 15.9097 4.26965 15.3531L7.88483 11.5809C8.27557 11.173 8.77189 10.893 9.31293 10.7751C9.85398 10.6571 10.4162 10.7065 10.9308 10.9171C11.1141 10.9929 11.286 11.0704 11.4466 11.1494L11.9738 11.4067C12.6782 11.7386 13.2201 11.8809 13.9097 11.1625C14.9004 10.1287 14.6437 9.17443 13.436 8.30548C12.2329 7.4417 10.7779 7.04486 9.32363 7.18389C7.86936 7.32292 6.50768 7.98904 5.47509 9.06655ZM12.3032 1.94187L11.0989 3.19847C10.7884 3.53369 10.6164 3.98279 10.62 4.44903C10.6237 4.91527 10.8027 5.36136 11.1186 5.69121C11.4344 6.02106 11.8617 6.20828 12.3086 6.21255C12.7554 6.21682 13.186 6.0378 13.5075 5.71404L14.713 4.45744C14.9749 4.1743 15.2883 3.94843 15.6348 3.79301C15.9813 3.63758 16.3539 3.55572 16.7311 3.55219C17.1082 3.54865 17.4822 3.62353 17.8313 3.77244C18.1805 3.92136 18.4976 4.14133 18.7644 4.41951C19.0312 4.6977 19.2422 5.02854 19.3851 5.39272C19.528 5.75691 19.6 6.14714 19.5968 6.54065C19.5936 6.93417 19.5154 7.32309 19.3666 7.68471C19.2178 8.04634 19.0016 8.37343 18.7303 8.6469L15.1152 12.4191C14.7244 12.827 14.2281 13.107 13.6871 13.225C13.146 13.3429 12.5838 13.2935 12.0692 13.0829C11.8859 13.0071 11.714 12.9296 11.5534 12.8506L11.0262 12.5933C10.3218 12.2614 9.77876 12.1191 9.09026 12.8375C8.09956 13.8713 8.35632 14.8256 9.56403 15.6945C10.7671 16.5583 12.2221 16.9551 13.6764 16.8161C15.1306 16.6771 16.4923 16.011 17.5249 14.9334L21.1401 11.1613C21.7267 10.5573 22.1931 9.83825 22.5123 9.04546C22.8315 8.25268 22.9972 7.40184 23 6.54193C23.0027 5.68203 22.8424 4.83005 22.5283 4.03505C22.2142 3.24005 21.7525 2.51774 21.1698 1.90969C20.5871 1.30164 19.8948 0.819882 19.1329 0.492141C18.371 0.164401 17.5545 -0.00284419 16.7303 3.65917e-05C15.9062 0.00291738 15.0908 0.175867 14.331 0.508927C13.5712 0.841987 12.8821 1.32976 12.3032 1.94187Z"
                                fill="#212121"/>
                        </svg>
                        Create Single Check
                    </button> : <button className={CreateCheckStyles.Button_LinkUser} onClick={createMultiCheck}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 23 24"
                             fill="none">
                            <path
                                d="M5.47509 9.06655L1.85991 12.8387C1.27328 13.4427 0.806944 14.1618 0.487747 14.9545C0.168549 15.7473 0.00279808 16.5982 3.62396e-05 17.4581C-0.00272369 18.318 0.15756 19.1699 0.471661 19.9649C0.785761 20.7599 1.24747 21.4823 1.83021 22.0903C2.41295 22.6984 3.10521 23.1801 3.86712 23.5079C4.62903 23.8356 5.44555 24.0028 6.26966 24C7.09378 23.9971 7.9092 23.8241 8.66899 23.4911C9.42879 23.158 10.1179 22.6714 10.6968 22.0593L11.9011 20.8027C12.0639 20.6388 12.1938 20.4426 12.2832 20.2257C12.3726 20.0088 12.4198 19.7755 12.4218 19.5394C12.4239 19.3033 12.3809 19.0691 12.2953 18.8505C12.2097 18.632 12.0833 18.4333 11.9233 18.2663C11.7634 18.0993 11.5732 17.9671 11.3638 17.8776C11.1544 17.7881 10.93 17.743 10.7037 17.745C10.4774 17.7469 10.2538 17.7958 10.0458 17.8889C9.83785 17.982 9.64974 18.1174 9.49245 18.2871L8.28588 19.5449C7.75234 20.0966 7.03109 20.4053 6.27994 20.4035C5.5288 20.4017 4.80893 20.0895 4.27786 19.5352C3.74679 18.9809 3.44777 18.2297 3.44623 17.4459C3.4447 16.6621 3.74076 15.9097 4.26965 15.3531L7.88483 11.5809C8.27557 11.173 8.77189 10.893 9.31293 10.7751C9.85398 10.6571 10.4162 10.7065 10.9308 10.9171C11.1141 10.9929 11.286 11.0704 11.4466 11.1494L11.9738 11.4067C12.6782 11.7386 13.2201 11.8809 13.9097 11.1625C14.9004 10.1287 14.6437 9.17443 13.436 8.30548C12.2329 7.4417 10.7779 7.04486 9.32363 7.18389C7.86936 7.32292 6.50768 7.98904 5.47509 9.06655ZM12.3032 1.94187L11.0989 3.19847C10.7884 3.53369 10.6164 3.98279 10.62 4.44903C10.6237 4.91527 10.8027 5.36136 11.1186 5.69121C11.4344 6.02106 11.8617 6.20828 12.3086 6.21255C12.7554 6.21682 13.186 6.0378 13.5075 5.71404L14.713 4.45744C14.9749 4.1743 15.2883 3.94843 15.6348 3.79301C15.9813 3.63758 16.3539 3.55572 16.7311 3.55219C17.1082 3.54865 17.4822 3.62353 17.8313 3.77244C18.1805 3.92136 18.4976 4.14133 18.7644 4.41951C19.0312 4.6977 19.2422 5.02854 19.3851 5.39272C19.528 5.75691 19.6 6.14714 19.5968 6.54065C19.5936 6.93417 19.5154 7.32309 19.3666 7.68471C19.2178 8.04634 19.0016 8.37343 18.7303 8.6469L15.1152 12.4191C14.7244 12.827 14.2281 13.107 13.6871 13.225C13.146 13.3429 12.5838 13.2935 12.0692 13.0829C11.8859 13.0071 11.714 12.9296 11.5534 12.8506L11.0262 12.5933C10.3218 12.2614 9.77876 12.1191 9.09026 12.8375C8.09956 13.8713 8.35632 14.8256 9.56403 15.6945C10.7671 16.5583 12.2221 16.9551 13.6764 16.8161C15.1306 16.6771 16.4923 16.011 17.5249 14.9334L21.1401 11.1613C21.7267 10.5573 22.1931 9.83825 22.5123 9.04546C22.8315 8.25268 22.9972 7.40184 23 6.54193C23.0027 5.68203 22.8424 4.83005 22.5283 4.03505C22.2142 3.24005 21.7525 2.51774 21.1698 1.90969C20.5871 1.30164 19.8948 0.819882 19.1329 0.492141C18.371 0.164401 17.5545 -0.00284419 16.7303 3.65917e-05C15.9062 0.00291738 15.0908 0.175867 14.331 0.508927C13.5712 0.841987 12.8821 1.32976 12.3032 1.94187Z"
                                fill="#212121"/>
                        </svg>
                        Create Multi Check
                    </button>}
                    <Link to={"/CheckMainPage"}>
                        <button className={CreateCheckStyles.Button_Cancel}>
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
            <LinkToUser isOpen={open} close={handleClose}
                        name={name} amount={amount}
                        changePass={setPassword}
                        changeLink={setConnection}
                        isChecked={isChecked}
            />
        </div>
    )
        ;
};

export default CreateCheck;