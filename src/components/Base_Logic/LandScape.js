import React, {useEffect, useState} from 'react';
import classes from "./LandScape.module.css";

const LandScape = () => {

    return (
        <div className={classes.page}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" viewBox="0 0 331 308" fill="none">
                <path
                    d="M61.4419 117.363C57.3733 128.842 44.754 134.822 33.3069 130.766C21.8598 126.711 15.7915 114.132 19.86 102.721C27.3075 81.6187 39.4442 61.8908 56.27 45.1187C116.402 -14.821 213.702 -15.0273 274.04 44.4313L302.727 15.8362C307.485 11.0933 314.588 9.71849 320.794 12.2618C327 14.8051 331 20.8541 331 27.5217V115.507C331 124.649 323.621 132.004 314.45 132.004H226.183C219.494 132.004 213.426 128.017 210.875 121.831C208.323 115.644 209.702 108.564 214.46 103.821L242.802 75.5697C199.634 33.2957 130.331 33.5019 87.4392 76.2571C86.7945 76.8997 82.0772 79.6861 61.4419 117.363ZM0 192.493C0 183.351 7.37854 175.996 16.55 175.996H104.817C111.506 175.996 117.574 179.983 120.125 186.169C122.677 192.356 121.298 199.436 116.54 204.179L88.1977 232.43C131.366 274.704 200.669 274.498 243.561 231.743C255.629 219.714 264.317 205.622 269.627 190.637C273.696 179.158 286.315 173.178 297.762 177.234C309.209 181.289 315.277 193.868 311.209 205.279C303.761 226.313 291.625 246.04 274.73 262.881C214.598 322.821 117.298 323.027 56.9596 263.569L28.2729 292.164C23.5148 296.907 16.4121 298.282 10.2058 295.738C3.99958 293.195 0 287.146 0 280.478V192.562V192.493Z"
                    fill="#212121"/>
            </svg>
            <div className={classes.Body}>
                <span className={classes.Text}>The application does not support landscape mode. please turn your phone over</span>
            </div>
            <svg style={{position: "absolute", right: "0", zIndex: "-2"}} xmlns="http://www.w3.org/2000/svg" width="273"
                 height="680"
                 viewBox="0 0 473 1080" fill="none">
                <g filter="url(#filter0_d_607_4)">
                    <ellipse cx="657.586" cy="612.049" rx="713.5" ry="573" transform="rotate(-50.6216 657.586 612.049)"
                             fill="url(#paint0_linear_607_4)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_4" x="0.173439" y="-72.6742" width="1388.82" height="1443.45"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_4"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_4" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_4" x1="576.826" y1="880.042" x2="706.127" y2="36.4265"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Крайний правый*/}
            <svg style={{position: "absolute", top: "-30%", right: "0", zIndex: "0"}} xmlns="http://www.w3.org/2000/svg"
                 width="304" height="300" viewBox="0 0 324 341" fill="none">
                <g filter="url(#filter0_d_607_14)">
                    <ellipse cx="187.333" cy="75.7318" rx="181.734" ry="145.725"
                             transform="rotate(-48.8271 187.333 75.7318)" fill="url(#paint0_linear_607_14)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_14" x="0.915627" y="-115.465" width="446.833" height="456.395"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_14" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_14" x1="185.149" y1="80.6373" x2="-0.0648676" y2="180.377"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Средний левый*/}
            <svg style={{position: "absolute", top: "-30%", left: "17%", zIndex: "1"}}
                 xmlns="http://www.w3.org/2000/svg" width="253"
                 height="290" viewBox="0 0 413 290" fill="none">
                <g filter="url(#filter0_d_607_20)">
                    <ellipse cx="169.506" cy="108.053" rx="146.681" ry="81.5358"
                             transform="rotate(-9.15821 169.506 108.053)" fill="url(#paint0_linear_607_20)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_20" x="0.00547028" y="0.116798" width="413.001" height="289.872"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_20"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_20" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_20" x1="166.11" y1="78.9472" x2="174.201" y2="25.2562"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#80CF3C"/>
                        <stop offset="1" stop-color="#C6F25A"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Крайний левый*/}
            <svg style={{position: "absolute", top: "-40%", left: "13%"}} xmlns="http://www.w3.org/2000/svg" width="75%"
                 height="317" viewBox="0 0 366 317" fill="none">
                <g filter="url(#filter0_d_607_21)">
                    <ellipse cx="145.635" cy="83.9199" rx="146.883" ry="105.631"
                             transform="rotate(-54.1582 145.635 83.9199)" fill="url(#paint0_linear_607_21)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_21" x="0.171486" y="-74.3832" width="364.929" height="390.606"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_21"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_21" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_21" x1="142.236" y1="46.2131" x2="155.596" y2="-22.319"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#80CF3C"/>
                        <stop offset="1" stop-color="#C6F25A"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Маленький темно-зеленый*/}
            <svg style={{position: "absolute", top: "0%", right: "25%"}} xmlns="http://www.w3.org/2000/svg" width="25%"
                 height="25%" viewBox="0 0 218 217" fill="none">
                <g filter="url(#filter0_d_607_18)">
                    <circle cx="47.2463" cy="47.2463" r="47.2463"
                            transform="matrix(0.604517 0.796592 0.796592 -0.604517 35 84.5195)"
                            fill="url(#paint0_linear_607_18)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_18" x="0.84922" y="0.245705" width="216.696" height="216.698"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_18"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_18" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_18" x1="17.39" y1="90.2237" x2="80.3007" y2="9.80687"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#212121"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Большой левый*/}
            <svg style={{position: "absolute", left: "-20%"}} xmlns="http://www.w3.org/2000/svg" width="71%" height="122%"
                 viewBox="0 0 451 1062" fill="none">
                <g filter="url(#filter0_d_607_3)">
                    <ellipse cx="-48.6399" cy="528.105" rx="520.391" ry="417.497"
                             transform="rotate(115.01 -48.6399 528.105)" fill="url(#paint0_linear_607_3)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_3" x="-547.479" y="0.32383" width="997.679" height="1129.56"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_3"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_3" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_3" x1="-129.98" y1="725.35" x2="-2.29673" y2="110.608"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Правый средний*/}
            <svg style={{position: "absolute", right: "0", top: "-15%", zIndex: "-1"}}
                 xmlns="http://www.w3.org/2000/svg" width="175" height="297" viewBox="0 0 175 327" fill="none">
                <g filter="url(#filter0_d_607_13)">
                    <ellipse cx="123.903" cy="126.359" rx="110.855" ry="88.8899"
                             transform="rotate(-48.8271 123.903 126.359)" fill="url(#paint0_linear_607_13)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_13" x="0.79258" y="0.333595" width="320.22" height="326.052"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_13"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_13" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_13" x1="119.093" y1="101.103" x2="-1.60579" y2="191.796"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Большой зеленый*/}
            <svg style={{position: "absolute", right: "15%", top: "-5%"}} xmlns="http://www.w3.org/2000/svg"
                 width="30%" height="30%" viewBox="0 0 303 288" fill="none">
                <g filter="url(#filter0_d_607_17)">
                    <ellipse cx="91.3564" cy="80.877" rx="91.3564" ry="80.877"
                             transform="matrix(0.921823 0.387611 0.387611 -0.921823 27.7051 168.109)"
                             fill="url(#paint0_linear_607_17)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_17" x="0.284767" y="0.310158" width="301.968" height="287.311"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_17"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_17" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_17" x1="33.6257" y1="154.446" x2="137.492" y2="4.47419"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#212121"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Темно-зеленый листик срава*/}
            <svg style={{position: "absolute", right: "0"}} xmlns="http://www.w3.org/2000/svg" width="126" height="400"
                 viewBox="0 0 126 400" fill="none">
                <g filter="url(#filter0_d_607_9)">
                    <path
                        d="M138.185 65.2016C132.324 59.763 125.73 55.9797 125.73 55.9797C114.061 49.2847 103.488 47.9595 100.523 47.6497C93.0182 46.8658 85.1437 46.0428 76.5035 50.0295C63.6507 55.9594 58.5492 68.1713 56.9318 72.0437C55.079 76.4794 51.4638 87.1141 54.5596 100.008C57.4761 112.156 64.7065 119.46 67.3111 122.022C76.2757 130.845 87.0932 134.298 94.2971 136.6C102.123 139.099 103.001 138.132 108.532 140.765C117.283 144.932 122.459 150.868 126.62 155.64C131.098 160.773 133.344 163.424 133.737 167.54C134.152 171.888 132.514 176.632 129.289 179.738C125.533 183.354 120.823 183.596 112.386 183.903C102.123 184.275 100.448 182.39 91.9234 183.011C86.4444 183.41 80.9561 183.811 75.6129 186.879C66.8042 191.937 61.7136 202.337 61.082 211.572C60.0167 227.176 71.7513 238.53 77.0961 243.701C92.9745 259.064 105.146 255.373 118.019 265.715C127.21 273.1 137.486 288.224 137.294 323.132C184.809 299.047 200.558 265.802 205.203 254.411C205.203 254.411 240.686 160.323 138.185 65.2032V65.2016Z"
                        fill="url(#paint0_linear_607_9)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_9" x="0.251564" y="0.900002" width="279.989" height="398.333"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_9"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_9" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_9" x1="53.3516" y1="63.0478" x2="46.1976" y2="291.12"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#212121"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Зеленый листик снизу*/}
            <div style={{position: "absolute", bottom: "-25%", right: "40%"}}>
                <svg style={{position: "absolute", bottom: "0"}} xmlns="http://www.w3.org/2000/svg" width="358"
                     height="238" viewBox="0 0 398 288" fill="none">
                    <g filter="url(#filter0_d_607_10)">
                        <path
                            d="M162.131 187.114C162.284 184.74 162.241 181.023 160.943 176.757C160.61 175.66 158.812 169.982 153.818 164.804C152.22 163.149 147.206 158.341 134.815 155.243C126.221 153.094 123.732 154.181 107.5 153.251C93.4754 152.448 86.3548 151.998 80.9753 149.665C69.1608 144.54 62.8319 135.108 60.7863 131.738C54.804 121.886 54.27 112.556 54.0561 107.834C53.2175 89.2675 62.0136 75.819 65.1414 71.1816C68.3769 66.384 74.2561 57.8808 85.3305 52.0586C98.0179 45.3878 109.918 46.2348 118.98 46.8791C136.934 48.1567 149.474 55.1465 153.026 57.2365C160.175 61.4449 169.158 66.7344 175.195 77.1563C182.297 89.4168 177.33 94.9907 185.092 115.8C188.367 124.58 190.456 130.18 195.781 136.117C202.339 143.431 204.958 141.389 218.742 152.85C224.496 157.635 226.707 160.208 231.014 160.42C236.368 160.684 242.631 157.184 244.474 152.053C245.78 148.419 243.119 142.807 237.744 131.734C230.305 116.408 230.436 116.837 229.43 114.604C223.852 102.223 221.064 96.031 220.722 87.5137C220.483 81.5658 220.042 70.6442 227.847 63.6104C235.57 56.6504 246.265 58.0945 248.433 58.4308C306.89 69.0538 365.349 79.6785 423.807 90.303C425.654 128.018 427.501 165.733 429.349 203.446C348.853 206.102 268.358 208.758 187.862 211.413C179.285 203.313 170.707 195.212 162.13 187.111L162.131 187.114Z"
                            fill="url(#paint0_linear_607_10)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_607_10" x="0.900002" y="0.351173" width="497.55" height="287.163"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_10"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_10" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_607_10" x1="-52.8088" y1="153.649" x2="-9.17758" y2="328.777"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="0.684818" stop-color="#212121"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*Светло-зеленый листик справа*/}
            <svg style={{position: "absolute", bottom: "-20%", right: "-25%"}} xmlns="http://www.w3.org/2000/svg"
                 width="75%" height="75%" viewBox="0 0 170 477" fill="none">
                <g filter="url(#filter0_d_607_11)">
                    <path
                        d="M242.978 104.381C242.13 105.161 240.945 106.348 239.723 107.947C239.723 107.947 235.689 113.227 234.102 121.316C232.605 128.942 235.063 144.776 244.161 162.909C243.437 165.914 242.714 168.917 241.992 171.922C239.186 172.09 235.267 172.129 230.651 171.525C226.682 171.004 218.175 169.811 209.941 164.79C200.029 158.746 195.404 150.141 191.994 143.796C185.839 132.343 184.154 121.524 183.612 116.264C182.129 101.881 185.927 97.4418 182.133 87.1478C179.68 80.4961 175.893 76.3788 171.778 71.9959C157.614 56.9081 140.393 51.8346 133.91 50.0111C125.466 47.6345 110.22 43.5484 92.1958 48.5251C86.1821 50.1861 76.8015 52.7752 68.5287 61.0035C57.5252 71.9475 55.6908 85.6915 54.6234 93.6839C51.4058 117.794 61.5348 136.263 64.6825 141.815C69.5478 150.394 75.8571 161.523 88.3495 167.365C91.9297 169.039 99.02 171.056 113.201 175.09C122.581 177.759 125.545 178.354 130.064 181.033C133.955 183.339 140.852 187.428 144.56 195.888C145.5 198.033 149.992 209.035 144.265 219.358C139.773 227.454 131.701 230.262 128.881 231.243C123.641 233.065 121.666 232.123 114.976 233.026C110.279 233.66 99.7155 235.087 91.3089 241.642C79.6286 250.75 77.7895 265.334 77.4036 268.381C76.9338 272.108 75.7435 282.743 81.8411 293.635C89.0404 306.495 101.421 310.821 105.804 312.353C120.025 317.322 133.043 314.142 137.163 312.946C143.841 311.01 145.425 308.992 154.322 307.004C163.158 305.031 170.068 305.129 172.665 305.221C180.172 305.488 186.025 305.698 192.486 309.084C194.659 310.223 203.587 314.901 207.573 325.425C212.334 337.992 206.416 349.313 204.616 352.758C202.993 355.863 198.642 364.183 189.823 367.316C186.859 368.37 184.67 368.382 180.653 368.505C169.593 368.845 160.967 369.109 155.21 369.991C151.503 370.56 135.278 373.046 125.922 386.036C122.161 391.256 120.669 396.565 120.005 400C167.734 399.703 215.463 399.406 263.191 399.109C259.345 300.274 255.499 201.439 251.654 102.604C248.762 103.198 245.869 103.793 242.977 104.387L242.978 104.381Z"
                        fill="url(#paint0_linear_607_11)"/>
                    <path
                        d="M242.978 104.381C242.13 105.161 240.945 106.348 239.723 107.947C239.723 107.947 235.689 113.227 234.102 121.316C232.605 128.942 235.063 144.776 244.161 162.909C243.437 165.914 242.714 168.917 241.992 171.922C239.186 172.09 235.267 172.129 230.651 171.525C226.682 171.004 218.175 169.811 209.941 164.79C200.029 158.746 195.404 150.141 191.994 143.796C185.839 132.343 184.154 121.524 183.612 116.264C182.129 101.881 185.927 97.4418 182.133 87.1478C179.68 80.4961 175.893 76.3788 171.778 71.9959C157.614 56.9081 140.393 51.8346 133.91 50.0111C125.466 47.6345 110.22 43.5484 92.1958 48.5251C86.1821 50.1861 76.8015 52.7752 68.5287 61.0035C57.5252 71.9475 55.6908 85.6915 54.6234 93.6839C51.4058 117.794 61.5348 136.263 64.6825 141.815C69.5478 150.394 75.8571 161.523 88.3495 167.365C91.9297 169.039 99.02 171.056 113.201 175.09C122.581 177.759 125.545 178.354 130.064 181.033C133.955 183.339 140.852 187.428 144.56 195.888C145.5 198.033 149.992 209.035 144.265 219.358C139.773 227.454 131.701 230.262 128.881 231.243C123.641 233.065 121.666 232.123 114.976 233.026C110.279 233.66 99.7155 235.087 91.3089 241.642C79.6286 250.75 77.7895 265.334 77.4036 268.381C76.9338 272.108 75.7435 282.743 81.8411 293.635C89.0404 306.495 101.421 310.821 105.804 312.353C120.025 317.322 133.043 314.142 137.163 312.946C143.841 311.01 145.425 308.992 154.322 307.004C163.158 305.031 170.068 305.129 172.665 305.221C180.172 305.488 186.025 305.698 192.486 309.084C194.659 310.223 203.587 314.901 207.573 325.425C212.334 337.992 206.416 349.313 204.616 352.758C202.993 355.863 198.642 364.183 189.823 367.316C186.859 368.37 184.67 368.382 180.653 368.505C169.593 368.845 160.967 369.109 155.21 369.991C151.503 370.56 135.278 373.046 125.922 386.036C122.161 391.256 120.669 396.565 120.005 400C167.734 399.703 215.463 399.406 263.191 399.109C259.345 300.274 255.499 201.439 251.654 102.604C248.762 103.198 245.869 103.793 242.977 104.387L242.978 104.381Z"
                        fill="url(#paint1_linear_607_11)" fill-opacity="0.2"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_11" x="0.900002" y="0.0679703" width="331.391" height="476.032"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_11"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_11" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_11" x1="263.191" y1="361.852" x2="169.602" y2="-24.0489"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#FFEB3B"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_607_11" x1="207.315" y1="198.482" x2="88.8457" y2="291.423"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0"/>
                        <stop offset="0.25" stop-opacity="0.75"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Темный листик слева сверху*/}
            <svg style={{position: "absolute", top: "-25%", left: "-10%"}} xmlns="http://www.w3.org/2000/svg" width="50%"
                 height="80%" viewBox="0 0 373 464" fill="none">
                <g filter="url(#filter0_d_607_15)">
                    <path
                        d="M221.381 62.0114C222.824 62.8996 227.921 66.0055 234.919 69.5397C242.375 73.3048 247.102 75.6911 253.579 77.4138C261.635 79.557 262.56 78.0546 268.559 79.6405C280.28 82.7385 287.568 91.3283 290.599 94.9013C293.564 98.3966 302.522 108.956 303.023 124.616C303.705 145.945 288.16 159.862 284.674 162.985C274.573 172.027 263.695 174.977 258.51 176.015C241.798 179.359 228.641 173.956 223.513 171.766C207.902 165.103 199.285 153.958 195.891 149.455C188.873 140.147 183.743 128.484 181.053 122.367C177.001 113.156 176.987 111.013 173.572 106.576C167.262 98.3752 159.054 94.961 151.616 91.8662C145.446 89.2997 136.493 85.5746 124.237 85.8886C118.115 86.0447 106.233 86.349 95.1987 94.8418C91.2839 97.8549 83.6994 104.805 80.457 116.288C77.7254 125.963 79.4531 133.973 80.4427 138.307C81.5618 143.208 83.4055 151.283 90.2484 158.26C97.0108 165.154 104.978 167.23 109.245 168.341C116.895 170.333 118.32 168.686 132.648 170.41C141.511 171.476 146.015 172.05 149.532 174.039C158.848 179.308 162.159 189.305 163.105 192.852C163.915 195.887 166.203 205.032 161.356 214.571C160.178 216.889 155.583 225.128 146.535 228.127C139.402 230.49 136.761 227.19 117.63 226.898C110.708 226.792 107.881 227.176 104.975 228.832C97.6487 233.006 95.9809 241.761 95.8244 242.649C94.3344 251.156 98.8213 258.099 102.414 263.659C106.858 270.536 109.7 271.512 117.456 279.801C121.446 284.065 128.08 291.153 132.877 299.648C135.412 304.138 142.271 316.658 141.461 333.713C141.207 339.057 139.682 355.767 126.767 370.206C122.753 374.693 114.481 383.94 100.375 386.658C83.3448 389.939 70.0268 381.351 66.5506 379.031C53.884 370.578 49.1612 358.63 46.1125 350.917C42.9923 343.023 38.7481 332.288 41.3919 320.025C42.5253 314.767 44.7258 310.158 46.484 299.301C47.2181 294.769 47.5367 291.236 47.2536 287.141C46.9132 282.22 46.5773 277.37 44.0734 273.702C38.4409 265.453 23.8101 266.08 16.1439 267.809C2.11453 270.973 -5.64492 281.679 -7.87811 285.028C-8.97952 271.271 -10.0797 257.515 -11.1811 243.758C-9.9086 242.843 -8.03779 241.508 -5.76111 239.919C9.88032 229.011 12.256 228.83 14.8731 225.099C19.3414 218.729 20.6195 207.56 14.9453 201.002C8.20639 193.215 -4.59675 196.25 -7.08816 196.842C-20.1986 199.952 -26.5649 211.24 -27.8084 213.557C-30.8074 197.205 -33.8065 180.853 -36.8057 164.501C-31.7383 162.324 -25.9478 159.805 -19.5615 156.973C-6.20637 151.051 -4.05389 149.883 -1.92048 147.127C3.01617 140.749 3.45826 131.54 1.00059 124.477C-2.01738 115.805 -8.96437 111.636 -13.3787 108.987C-22.8426 103.308 -32.2316 102.984 -36.793 103.156C15.4606 88.8994 67.7142 74.6425 119.968 60.3845C146.671 55.8024 173.375 51.2201 200.078 46.638C208.117 53.3754 215.5 58.392 221.385 62.0109L221.381 62.0114Z"
                        fill="url(#paint0_linear_607_15)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_15" x="-89.9047" y="0.538673" width="462.05" height="462.958"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_15"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_15" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_15" x1="-38.4293" y1="153.372" x2="240.406" y2="277.806"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#212121"/>
                        <stop offset="1" stop-color="#4CAF50"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Светлый длинный листик снизу слева*/}
            <svg style={{position: "absolute", bottom: "-15%", left: "-27%"}} xmlns="http://www.w3.org/2000/svg"
                 width="75%" height="75%" viewBox="0 0 302 528" fill="none">
                <g filter="url(#filter0_d_607_16)">
                    <path
                        d="M-4.66749 430.775C-4.3193 423.136 -3.5711 416.728 -2.84319 411.824C-2.03819 406.411 -1.26642 402.899 1.67679 400.839C1.97312 400.632 4.6116 398.843 7.87484 399.36C11.0846 399.869 13.1067 402.325 14.0346 403.425C18.191 408.348 23.556 412.152 27.7887 417.011C31.4506 421.215 36.9916 425.69 48.0711 434.64C57.7845 442.486 62.7373 446.447 67.3742 448.263C71.2925 449.798 80.0121 453.077 90.8067 450.556C93.4742 449.933 104.008 447.15 111.451 437.129C113.525 434.335 118.344 427.849 118.109 418.627C117.888 409.954 113.328 403.937 111.547 401.654C104.181 392.213 93.4553 389.431 82.553 386.762C72.2441 384.239 66.452 384.388 56.8431 383.497C46.8131 382.567 32.4389 380.486 14.937 375.288C16.1139 371.866 17.8204 367.043 20.018 361.315C23.9001 351.193 27.1654 343.831 31.0271 335.164C34.5086 327.347 36.9965 321.788 40.8702 314.255C42.99 310.135 44.8482 306.736 46.1934 304.331C47.842 306.181 50.3252 308.979 53.3324 312.401C61.1244 321.271 62.2623 322.766 65.2451 326.097C69.4651 330.811 75.4614 337.509 84.0986 344.551C90.3329 349.635 94.7474 353.235 101.819 356.422C107.238 358.865 114.233 361.922 123.564 361.402C127.129 361.204 134.527 360.694 141.7 355.515C143.736 354.045 148.52 350.497 151.357 343.853C151.803 342.808 155.897 332.78 151.185 322.435C148.626 316.816 144.664 313.727 140.098 310.167C137.916 308.465 133.464 305.286 127.085 302.818C125.212 302.093 120.34 300.334 105.406 298.942C93.5968 297.841 95.0639 298.794 87.5873 297.79C73.4923 295.898 66.069 292.215 63.8907 291.08C60.1783 289.147 57.3274 287.136 55.4328 285.674C57.279 280.709 60.3851 273.141 65.2539 264.397C67.6337 260.123 69.8403 256.637 79.4744 242.488C83.1082 237.15 87.9603 230.059 93.7608 221.683C95.6295 223.597 98.3438 226.372 101.637 229.709C108.436 236.602 111.892 240.101 114.611 242.602C116.058 243.934 120.947 248.388 127.844 253.634C135.343 259.339 139.093 262.192 144.024 264.489C153.79 269.04 162.425 269.484 164.295 269.558C169.169 269.75 179.141 270.142 189.108 264.011C192.791 261.744 199.859 257.396 202.966 248.404C203.456 246.986 207.047 235.99 200.495 225.644C193.698 214.911 180.437 213.862 175.731 213.456C174.92 213.386 172.347 213.454 167.235 213.594C148.892 214.096 148.208 214.273 142.504 214.334C122.597 214.548 117.576 212.544 115.342 211.525C110.671 209.397 107.343 206.647 105.322 204.735C108.675 198.361 111.786 193.297 114.043 189.805C123.361 175.382 131.982 162.363 146.74 155.337C147.926 154.772 150.543 153.795 155.776 151.841C170.287 146.422 175.21 144.921 180.241 142.803C189.709 138.82 197.957 132.997 208.192 121.32C211.933 117.052 220.499 105.288 227.44 88.8108C232.538 76.7073 232.338 71.3553 231.734 67.8643C231.42 66.0461 229.637 56.865 221.857 51.0899C210.905 42.9611 196.258 47.6563 189.971 49.6722C174.406 54.6627 165.21 65.654 157.807 74.5028C149.743 84.141 144.844 93.408 142.266 99.0769C138.467 107.433 136.214 115.334 134.073 122.842C130.456 135.528 131.065 137.228 128.305 143.877C125.843 149.806 122.978 154.192 115.102 164.247C109.1 171.911 101.041 181.777 90.9392 193.033C89.2807 190.472 87.0208 186.585 85.0762 181.56C82.2423 174.238 81.6518 168.048 80.588 155.967C78.4798 132.039 78.2968 129.502 76.8518 124.416C74.387 115.741 72.7521 109.983 67.2108 105.412C60.6982 100.041 50.3146 97.5639 41.4568 101.41C31.3505 105.798 28.0962 116.301 26.7137 120.764C21.5436 137.455 28.5758 152.879 33.2984 162.859C45.3054 188.23 65.4043 202.857 77.5382 210.089C74.7571 214.406 71.1788 220.013 67.0623 226.603C63.8233 231.789 59.3798 238.914 53.9255 248.078C49.8825 254.873 44.8461 263.521 39.1881 273.713C37.5877 272.031 35.3424 269.436 33.1768 265.945C28.0012 257.598 27.5552 251.029 25.2834 239.076C22.3689 223.744 20.911 216.079 16.3667 207.467C13.6598 202.336 10.5451 196.435 3.95342 191.583C2.95485 190.848 -12.4408 179.827 -25.2484 185.57C-38.7922 191.643 -41.9742 213.109 -38.2799 227.359C-34.8524 240.582 -25.0841 249.209 -10.6986 261.917C-4.68881 267.226 -2.27533 268.449 9.51782 278.442C17.7156 285.388 24.2666 291.334 28.6505 295.401C25.8597 299.145 22.6408 306.304 18.8372 314.464C13.7524 325.373 12.4082 330.229 7.42967 342.483C3.93782 351.081 1.80588 353.906 -3.15057 363.436C-7.907 372.581 -14.3457 386.136 -20.6915 404.016C-15.3513 412.933 -10.011 421.85 -4.6706 430.768L-4.66749 430.775Z"
                        fill="url(#paint0_linear_607_16)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_16" x="-92.807" y="0.384377" width="393.946" height="527.194"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_16"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_16" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_16" x1="5.0471" y1="399.234" x2="183.187" y2="33.5971"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Листик снизу*/}
            <svg style={{position: "absolute", bottom: "-20%", left: "10%"}} xmlns="http://www.w3.org/2000/svg" width="103%" height="35%" viewBox="0 0 703 300" fill="none">
                <g filter="url(#filter0_d_607_22)">
                    <path
                        d="M70.7755 137.392C67.7641 140.37 65.1911 143.924 63.1537 148.153C54.8906 165.311 78.5371 218.834 139.242 238.292C155.635 243.546 140.6 293.418 166.516 308.77C201.421 329.448 245.81 262.379 270.06 271.426C282.39 276.027 253.235 358.104 296.101 363.988C350.129 371.406 355.939 327.64 403.785 296.386C422.684 284.039 431.957 360.682 472.997 355.106C516.845 349.146 552.048 283.177 563.632 240.287C548.429 237.376 533.225 234.482 518.021 231.605C473.9 318.857 467.651 319.972 501.098 228.43C337.865 197.825 252.575 164.219 507.213 212.117C503.513 190.52 496.831 164.096 489.562 146.549C505.959 162.154 515.359 192.947 523.665 215.197L523.623 215.217C538.15 217.972 552.649 220.744 567.106 223.514C567.558 220.043 567.778 216.887 567.694 214.207C566.346 171.586 534.272 131.393 495.845 114.891C469.726 103.674 443.817 151.682 428.241 144.605C408.541 135.654 407.328 54.9751 371.449 47.7116C346.235 42.6066 323.813 95.6209 304.109 88.1797C272.609 76.2823 268.861 14.0813 218.745 26.4389C192.159 32.9949 192.247 59.1851 192.606 114.487C192.789 142.489 106.713 105.049 72.0937 136.151C71.6445 136.554 71.205 136.968 70.7755 137.392ZM584.983 228.675L583.968 245.912L640.631 257.558L641.645 240.323L584.984 228.675L584.983 228.675Z"
                        fill="url(#paint0_linear_607_22)"/>
                </g>
                <defs>
                    <filter id="filter0_d_607_22" x="0.460548" y="0.722267" width="702.284" height="462.198"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_607_22"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_607_22" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_607_22" x1="419.624" y1="-6.6092" x2="121.58" y2="246.437"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default LandScape;