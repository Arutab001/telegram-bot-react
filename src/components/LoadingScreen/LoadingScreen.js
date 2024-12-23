import React, {useEffect, useState} from 'react';
import classes from "./LoadingScreen.style.css";
import Gecko from "../../images/sticker 1.png";
import ProgressBarLoading from "./ProgressBarLoading/ProgressBarLoading.js";

const LoadingScreen = ( {onComplete} ) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return prev;
                }
                return prev + 10;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div style={classes.LoadingScreen}>
            {/*Левый верхний листик*/}
            <svg style={{position: "absolute", top: "-15%", left: "0"}} xmlns="http://www.w3.org/2000/svg" width="50%"
                 height="50%" viewBox="0 0 484 591" fill="none">
                <g filter="url(#filter0_d_633_99)">
                    <path
                        d="M302.423 67.8532C304.405 69.0733 311.406 73.3399 321.02 78.1948C331.262 83.367 337.755 86.6451 346.652 89.0115C357.72 91.9556 358.99 89.8918 367.231 92.0704C383.333 96.326 393.343 108.126 397.508 113.034C401.58 117.836 413.886 132.341 414.575 153.853C415.511 183.153 394.157 202.272 389.367 206.56C375.492 218.983 360.549 223.035 353.427 224.461C330.47 229.055 312.395 221.632 305.351 218.624C283.906 209.47 272.069 194.161 267.406 187.975C257.766 175.188 250.719 159.167 247.024 150.764C241.458 138.11 241.438 135.167 236.746 129.071C228.079 117.806 216.804 113.116 206.585 108.865C198.11 105.339 185.811 100.222 168.976 100.653C160.566 100.868 144.243 101.286 129.085 112.952C123.707 117.092 113.289 126.639 108.835 142.414C105.082 155.703 107.455 166.707 108.815 172.66C110.352 179.393 112.885 190.486 122.285 200.071C131.574 209.541 142.519 212.392 148.381 213.918C158.89 216.655 160.847 214.393 180.53 216.761C192.705 218.225 198.891 219.014 203.724 221.746C216.521 228.985 221.069 242.717 222.369 247.589C223.481 251.759 226.624 264.321 219.966 277.425C218.348 280.61 212.035 291.927 199.606 296.046C189.807 299.293 186.18 294.759 159.899 294.359C150.391 294.213 146.507 294.741 142.515 297.015C132.451 302.75 130.16 314.775 129.945 315.996C127.898 327.682 134.062 337.219 138.996 344.857C145.101 354.304 149.006 355.645 159.661 367.032C165.142 372.889 174.254 382.626 180.844 394.296C184.327 400.463 193.749 417.662 192.636 441.09C192.287 448.431 190.192 471.386 172.45 491.221C166.936 497.384 155.574 510.088 136.196 513.821C112.802 518.329 94.5065 506.531 89.7313 503.344C72.3311 491.732 65.8433 475.319 61.6553 464.724C57.3691 453.88 51.5389 439.132 55.1707 422.288C56.7276 415.064 59.7505 408.733 62.1657 393.819C63.1741 387.593 63.6117 382.74 63.2229 377.115C62.7554 370.354 62.2938 363.692 58.8542 358.653C51.1168 347.322 31.0185 348.182 20.4875 350.557C1.21522 354.905 -9.44396 369.611 -12.5117 374.212C-14.0247 355.314 -15.536 336.417 -17.0491 317.52C-15.301 316.262 -12.7311 314.428 -9.60358 312.246C11.8831 297.261 15.1466 297.013 18.7417 291.887C24.8798 283.137 26.6355 267.794 18.8408 258.784C9.58362 248.088 -8.00409 252.258 -11.4266 253.07C-29.4363 257.342 -38.1818 272.849 -39.89 276.031C-44.0098 253.569 -48.1296 231.107 -52.2496 208.643C-45.2885 205.652 -37.3341 202.193 -28.5612 198.303C-10.2152 190.168 -7.25836 188.562 -4.3277 184.777C2.45381 176.015 3.0611 163.364 -0.315007 153.663C-4.4608 141.749 -14.0039 136.022 -20.0679 132.383C-33.0685 124.582 -45.9662 124.137 -52.2321 124.374C19.5488 104.789 91.3298 85.2045 163.11 65.6183C199.793 59.3239 236.476 53.0292 273.158 46.7348C284.202 55.9899 294.344 62.8813 302.427 67.8526L302.423 67.8532Z"
                        fill="url(#paint0_linear_633_99)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_99" x="-105.35" y="0.634377" width="589.054" height="590.3"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_99"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_99" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_99" x1="-54.48" y1="193.356" x2="328.557" y2="364.29"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#212121"/>
                        <stop offset="1" stop-color="#4CAF50"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Правый левый*/}
            <svg style={{position: "absolute", top: "-15%", right: "0"}} xmlns="http://www.w3.org/2000/svg" width="45%"
                 height="45%" viewBox="0 0 382 513" fill="none">
                <g filter="url(#filter0_d_633_98)">
                    <ellipse cx="259.374" cy="199.156" rx="248.745" ry="199.459"
                             transform="rotate(-33.2305 259.374 199.156)" fill="url(#paint0_linear_633_98)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_98" x="0.193947" y="-40.3988" width="592.36" height="553.11"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_98"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_98" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_98" x1="256.386" y1="205.871" x2="2.87651" y2="342.388"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Правый правый*/}
            <svg style={{position: "absolute", top: "0%", right: "0", zIndex: "-1"}} xmlns="http://www.w3.org/2000/svg"
                 width="40%" height="40%" viewBox="0 0 226 386" fill="none">
                <g filter="url(#filter0_d_633_97)">
                    <ellipse cx="168.481" cy="155.541" rx="151.731" ry="121.667"
                             transform="rotate(-33.2305 168.481 155.541)" fill="url(#paint0_linear_633_97)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_97" x="0.985939" y="0.017189" width="408.989" height="385.048"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_97"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_97" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_97" x1="161.897" y1="120.973" x2="-3.30737" y2="245.107"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Правый средний*/}
            <svg style={{position: "absolute", right: "0"}} xmlns="http://www.w3.org/2000/svg" width="15%" height="100%"
                 viewBox="0 0 189 1062" fill="none">
                <g filter="url(#filter0_d_633_145)">
                    <path
                        d="M280.717 952.842C286.183 956.82 292.444 959.959 299.63 962.08C328.787 970.682 407.022 919.655 422.053 819.013C426.111 791.836 508.548 802.687 526.064 757.909C549.656 697.598 432.573 644.928 440.585 604.397C444.66 583.789 581.466 608.597 579.705 539.552C577.485 452.527 507.042 454.638 445.491 387.306C421.177 360.709 539.533 326.376 520.185 263.158C499.512 195.613 386.526 157.133 315.976 149.922C315.302 174.622 314.656 199.318 314.037 224.012C462.848 271.063 466.212 280.621 313.39 251.488C307.184 516.521 276.192 659.534 286.117 246.054C253.045 257.441 213.138 274.768 187.365 290.734C207.728 260.888 253.821 238.153 286.735 219.341L286.778 219.403C287.378 195.808 288.015 172.253 288.659 148.765C283.073 148.946 278.044 149.411 273.845 150.234C207.047 163.327 151.982 224.2 135.873 288.983C124.924 333.017 207.225 361.479 200.083 387.839C191.052 421.179 64.2636 443.851 62.0545 502.244C60.5013 543.28 149.79 564.959 143.138 597.916C132.502 650.603 35.4756 672.516 67.8412 748.288C85.0114 788.483 126.249 781.605 213.279 766.806C257.345 759.312 220.514 904.55 278.422 951.085C279.173 951.689 279.938 952.275 280.717 952.842ZM292.189 119.274L319.604 116.437L323.369 24.174L295.956 27.0123L292.187 119.273L292.189 119.274Z"
                        fill="url(#paint0_linear_633_145)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_145" x="0.162697" y="0.0738297" width="640.658" height="1061.04"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_145"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_145" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_145" x1="-35.9198" y1="440.331" x2="439.43" y2="844.742"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="0.85" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Большой нижний*/}
            <svg style={{position: "absolute", bottom: "0", zIndex: "-1"}} xmlns="http://www.w3.org/2000/svg"
                 width="100%"
                 height="25%" viewBox="0 0 1080 718" fill="none">
                <g filter="url(#filter0_d_633_89)">
                    <ellipse cx="522.5" cy="833" rx="1006.5" ry="808" fill="url(#paint0_linear_633_89)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_89" x="-508.1" y="0.900002" width="2135.2" height="1738.2"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="37" dy="37"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_89"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_89" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_89" x1="499.203" y1="544.57" x2="612.27" y2="25.0296"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#FFEB3B"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Темно-зеленый снизу*/}
            <svg style={{position: "absolute", bottom: "0", right: "0"}} xmlns="http://www.w3.org/2000/svg" width="25%"
                 height="35%" viewBox="0 0 159 492" fill="none">
                <g filter="url(#filter0_d_633_93)">
                    <path
                        d="M166.903 71.2572C159.103 64.0092 150.327 58.9673 150.327 58.9673C134.797 50.0449 120.726 48.2787 116.78 47.8659C106.792 46.8212 96.3117 45.7244 84.8125 51.0374C67.7069 58.9401 60.9174 75.2148 58.7649 80.3756C56.299 86.287 51.4876 100.46 55.6078 117.644C59.4893 133.833 69.1121 143.566 72.5785 146.982C84.5094 158.74 98.9062 163.342 108.494 166.409C118.909 169.739 120.078 168.451 127.438 171.96C139.085 177.513 145.974 185.424 151.512 191.784C157.471 198.625 160.46 202.157 160.983 207.643C161.535 213.438 159.356 219.76 155.063 223.899C150.065 228.718 143.797 229.041 132.567 229.45C118.909 229.946 116.68 227.434 105.335 228.261C98.0427 228.793 90.7385 229.327 83.6272 233.416C71.9039 240.157 65.1289 254.017 64.2883 266.324C62.8706 287.119 78.4879 302.251 85.6012 309.143C106.734 329.617 122.932 324.698 140.065 338.481C152.297 348.323 165.973 368.478 165.718 415C228.955 382.901 249.915 338.596 256.096 323.416C256.096 323.416 303.32 198.024 166.903 71.2593V71.2572Z"
                        fill="url(#paint0_linear_633_93)"/>
                </g>
                <defs>
                    <filter id="filter0_d_633_93" x="0.900002" y="0.900002" width="332.2" height="490.2"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="8" dy="15"/>
                        <feGaussianBlur stdDeviation="30.55"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_93"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_93" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_633_93" x1="54" y1="68.3868" x2="44.453" y2="372.337"
                                    gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CAF50"/>
                        <stop offset="1" stop-color="#212121"/>
                    </linearGradient>
                </defs>
            </svg>
            {/*Светло-зеленый снизу*/}
            <div style={{position: "absolute", bottom: "0", right: "0", overflowY: "hidden", zIndex: "-1"}}>
                <svg style={{transform: "translate(100%, 20%)"}} xmlns="http://www.w3.org/2000/svg" width="50%"
                     height="55%" viewBox="0 0 273 612" fill="none">
                    <g filter="url(#filter0_d_633_95)">
                        <path
                            d="M315.692 156.435C314.38 157.278 312.524 158.587 310.524 160.436C310.524 160.436 303.92 166.544 299.928 176.965C296.165 186.791 295.775 208.479 303.707 234.773C302.046 238.613 300.385 242.451 298.726 246.292C294.945 245.867 289.708 245.011 283.691 243.135C278.518 241.521 267.449 237.958 257.63 229.353C245.808 218.995 241.634 206.446 238.556 197.192C233 180.49 233.259 165.669 233.756 158.528C235.111 139 241.205 133.959 238.529 119.35C236.8 109.91 232.702 103.54 228.229 96.7408C212.834 73.3346 191.04 62.5771 182.815 58.6426C172.103 53.516 152.714 44.5332 127.521 46.9946C119.115 47.8166 106.003 49.0963 93.0619 58.1543C75.8495 70.2017 70.2179 88.1085 66.9423 98.5214C57.0639 129.934 66.2944 156.915 69.2063 165.049C73.7076 177.621 79.5442 193.926 94.853 204.613C99.2405 207.675 108.23 212.008 126.209 220.675C138.103 226.409 141.918 227.889 147.325 232.509C151.98 236.486 160.233 243.539 163.218 255.681C163.974 258.761 167.416 274.476 157.385 286.918C149.518 296.675 138.1 298.55 134.113 299.206C126.701 300.421 124.286 298.707 115.153 298.361C108.74 298.119 94.3206 297.574 81.5889 304.369C63.8992 313.811 58.0667 332.838 56.846 336.812C55.3557 341.674 51.3038 355.583 56.9129 371.524C63.5355 390.345 79.046 398.984 84.5373 402.042C102.354 411.965 120.455 410.741 126.227 410.101C135.583 409.066 138.163 406.74 150.49 406.151C162.733 405.566 171.927 407.299 175.369 408.023C185.321 410.119 193.079 411.755 200.911 417.768C203.547 419.791 214.37 428.1 217.249 443.06C220.687 460.926 210.17 474.654 206.97 478.832C204.086 482.597 196.356 492.687 183.867 494.822C179.669 495.54 176.747 495.049 171.36 494.283C156.53 492.173 144.963 490.526 137.08 490.37C132.003 490.269 109.786 489.825 94.2971 504.983C88.0714 511.074 84.8509 517.81 83.1689 522.237C146.899 532.901 210.63 543.565 274.358 554.228C292.13 421.511 309.902 288.793 327.676 156.075C323.68 156.197 319.684 156.321 315.689 156.443L315.692 156.435Z"
                            fill="url(#paint0_linear_633_95)"/>
                        <path
                            d="M315.692 156.435C314.38 157.278 312.524 158.587 310.524 160.436C310.524 160.436 303.92 166.544 299.928 176.965C296.165 186.791 295.775 208.479 303.707 234.773C302.046 238.613 300.385 242.451 298.726 246.292C294.945 245.867 289.708 245.011 283.691 243.135C278.518 241.521 267.449 237.958 257.63 229.353C245.808 218.995 241.634 206.446 238.556 197.192C233 180.49 233.259 165.669 233.756 158.528C235.111 139 241.205 133.959 238.529 119.35C236.8 109.91 232.702 103.54 228.229 96.7408C212.834 73.3346 191.04 62.5771 182.815 58.6426C172.103 53.516 152.714 44.5332 127.521 46.9946C119.115 47.8166 106.003 49.0963 93.0619 58.1543C75.8495 70.2017 70.2179 88.1085 66.9423 98.5214C57.0639 129.934 66.2944 156.915 69.2063 165.049C73.7076 177.621 79.5442 193.926 94.853 204.613C99.2405 207.675 108.23 212.008 126.209 220.675C138.103 226.409 141.918 227.889 147.325 232.509C151.98 236.486 160.233 243.539 163.218 255.681C163.974 258.761 167.416 274.476 157.385 286.918C149.518 296.675 138.1 298.55 134.113 299.206C126.701 300.421 124.286 298.707 115.153 298.361C108.74 298.119 94.3206 297.574 81.5889 304.369C63.8992 313.811 58.0667 332.838 56.846 336.812C55.3557 341.674 51.3038 355.583 56.9129 371.524C63.5355 390.345 79.046 398.984 84.5373 402.042C102.354 411.965 120.455 410.741 126.227 410.101C135.583 409.066 138.163 406.74 150.49 406.151C162.733 405.566 171.927 407.299 175.369 408.023C185.321 410.119 193.079 411.755 200.911 417.768C203.547 419.791 214.37 428.1 217.249 443.06C220.687 460.926 210.17 474.654 206.97 478.832C204.086 482.597 196.356 492.687 183.867 494.822C179.669 495.54 176.747 495.049 171.36 494.283C156.53 492.173 144.963 490.526 137.08 490.37C132.003 490.269 109.786 489.825 94.2971 504.983C88.0714 511.074 84.8509 517.81 83.1689 522.237C146.899 532.901 210.63 543.565 274.358 554.228C292.13 421.511 309.902 288.793 327.676 156.075C323.68 156.197 319.684 156.321 315.689 156.443L315.692 156.435Z"
                            fill="url(#paint1_linear_633_95)" fill-opacity="0.2"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_95" x="0.933205" y="0.476173" width="395.843" height="629.852"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_95"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_95" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_95" x1="282.991" y1="504.535" x2="247.582" y2="-31.8685"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#FFEB3B"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_633_95" x1="246.32" y1="273.683" x2="66.7684" y2="370.196"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-opacity="0"/>
                            <stop offset="0.25" stop-opacity="0.75"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*Темно-зеленый снизу слева*/}
            <div style={{position: "absolute", bottom: "0", right: "0", overflowY: "hidden"}}>
                <svg style={{transform: "translate(60%, 35%)", overflowX: "hidden"}} xmlns="http://www.w3.org/2000/svg" width="75%"
                     height="75%" viewBox="0 0 548 347" fill="none">
                    <g filter="url(#filter0_d_633_94)">
                        <path
                            d="M200.346 237.152C200.553 233.942 200.494 228.918 198.738 223.15C198.287 221.667 195.853 213.992 189.094 206.992C186.932 204.755 180.146 198.255 163.376 194.068C151.744 191.162 148.375 192.632 126.407 191.374C107.426 190.289 97.7893 189.681 90.5086 186.527C74.5187 179.599 65.9532 166.849 63.1846 162.292C55.0882 148.975 54.3654 136.363 54.0759 129.979C52.941 104.88 64.8457 86.7001 69.0789 80.4312C73.4578 73.9457 81.4147 62.4509 96.4029 54.5803C113.574 45.5625 129.68 46.7075 141.944 47.5784C166.244 49.3055 183.215 58.7546 188.023 61.5799C197.698 67.2689 209.856 74.4194 218.026 88.5079C227.638 105.082 220.915 112.617 231.421 140.747C235.853 152.616 238.681 160.187 245.887 168.213C254.764 178.099 258.308 175.34 276.963 190.833C284.75 197.301 287.743 200.779 293.572 201.066C300.819 201.422 309.295 196.692 311.789 189.756C313.556 184.842 309.955 177.256 302.68 162.288C292.612 141.569 292.79 142.149 291.429 139.131C283.88 122.393 280.105 114.023 279.642 102.509C279.319 94.4688 278.723 79.7047 289.286 70.1962C299.739 60.7876 314.213 62.7398 317.147 63.1944C396.264 77.5549 475.383 91.9175 554.5 106.28C557 157.264 559.5 208.248 562 259.23C453.057 262.82 344.114 266.41 235.17 270C223.561 259.049 211.953 248.098 200.344 237.147L200.346 237.152Z"
                            fill="url(#paint0_linear_633_94)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_94" x="0.900002" y="0.900002" width="630.2" height="345.2"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_94"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_94" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_94" x1="-90.5558" y1="191.912" x2="-31.6351" y2="428.688"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="0.684818" stop-color="#212121"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*Большой зеленый шарик*/}
            <div style={{position: "absolute", bottom: "0%", left: "20%", overflowY: "hidden"}}>
                <svg style={{overflowY: "hidden", transform: "translate(0, 50%)"}} xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 316 324" fill="none">
                    <g filter="url(#filter0_d_633_101)">
                        <ellipse cx="105.839" cy="93.6983" rx="105.839" ry="93.6983"
                                 transform="matrix(0.420326 0.907373 0.907373 -0.420326 20.5518 93.7676)"
                                 fill="url(#paint0_linear_633_101)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_101" x="0.983009" y="0.493752" width="314.149" height="329.85"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_101"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_101" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_101" x1="38.9563" y1="178.931" x2="159.288" y2="5.18348"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#212121"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*Маленький зеленый шарик*/}
            <div style={{position: "absolute", bottom: "0", left: "10%", overflowY: "hidden"}}>
                <svg style={{overflowY: "hidden", transform: "translate(-20%, 20%)"}} xmlns="http://www.w3.org/2000/svg" width="35%" height="35%" viewBox="0 0 233 233" fill="none">
                    <g filter="url(#filter0_d_633_102)">
                        <circle cx="54.7362" cy="54.7362" r="54.7362"
                                transform="matrix(-0.0896738 0.995971 0.995971 0.0896738 58.8164 42.1855)"
                                fill="url(#paint0_linear_633_102)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_102" x="0.583595" y="0.769142" width="231.679" height="231.68"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_102"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_102" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_102" x1="20.1468" y1="104.527" x2="93.0306" y2="11.3615"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#212121"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*Зеленый листик слева снизу*/}
            <div style={{position: "absolute", bottom: "0", left: "0", overflowY: "hidden"}}>
                <svg style={{overflowY: "hidden", transform: "translate(0, 20%)"}} xmlns="http://www.w3.org/2000/svg" width="35%" height="35%" viewBox="0 0 263 814" fill="none">
                    <g filter="url(#filter0_d_633_100)">
                        <path
                            d="M-97.0752 725.828C-98.5083 713.357 -98.9711 702.777 -99.074 694.638C-99.1845 685.656 -98.8521 679.762 -94.6209 675.653C-94.1946 675.241 -90.3864 671.651 -84.9627 671.635C-79.6276 671.621 -75.7081 675.073 -73.9168 676.612C-65.8931 683.506 -56.2035 688.268 -48.0734 695.035C-41.0391 700.892 -30.889 706.694 -10.5926 718.302C7.2016 728.479 16.264 733.603 24.2539 735.334C31.0056 736.797 45.9944 739.83 62.8299 732.923C66.9901 731.216 83.3346 723.95 92.7766 705.763C95.4073 700.693 101.521 688.921 98.7293 674.036C96.1036 660.038 87.1395 651.48 83.6567 648.245C69.2493 634.87 51.1391 633.165 32.7723 631.691C15.4051 630.297 6.05696 632.054 -9.74897 633.122C-26.2476 634.238 -50.0874 634.624 -79.8114 630.777C-78.7989 624.923 -77.2945 616.66 -75.2306 606.802C-71.5856 589.383 -68.2188 576.597 -64.2265 561.541C-60.628 547.962 -58.0496 538.303 -53.7413 525.081C-51.3831 517.85 -49.2604 511.855 -47.7091 507.605C-44.5536 510.172 -39.7975 514.058 -34.0289 518.818C-19.0815 531.155 -16.8462 533.281 -11.1411 537.9C-3.06934 544.435 8.40026 553.723 24.2397 562.877C35.6727 569.486 43.7685 574.166 56.0623 577.482C65.4846 580.025 77.6194 583.151 92.6065 579.868C98.3316 578.615 110.188 575.853 120.46 565.584C123.376 562.67 130.201 555.668 133.061 544.159C133.51 542.348 137.524 525.027 127.182 509.492C121.565 501.055 114.336 497.085 106.006 492.51C102.024 490.321 93.9772 486.333 82.9947 484.001C79.7685 483.316 71.4136 481.74 46.8464 483.388C27.4194 484.692 30.0463 485.853 17.6667 486.181C-5.67147 486.8 -18.6655 482.772 -22.4926 481.502C-29.0145 479.34 -34.1608 476.826 -37.6135 474.953C-35.9196 466.424 -32.8649 453.345 -27.2603 437.902C-24.521 430.353 -21.8565 424.125 -9.9426 398.675C-5.44922 389.073 0.560537 376.313 7.77097 361.221C11.2999 363.834 16.4246 367.622 22.6343 372.169C35.4565 381.563 41.971 386.33 47.0329 389.673C49.7251 391.453 58.8143 397.392 71.3635 404.092C85.0093 411.376 91.8324 415.02 100.424 417.454C117.443 422.275 131.552 420.737 134.602 420.368C142.552 419.405 158.816 417.432 173.366 404.889C178.742 400.253 189.06 391.358 191.743 375.972C192.167 373.546 195.111 354.786 181.788 339.733C167.966 324.115 146.2 325.882 138.466 326.454C137.135 326.553 132.983 327.337 124.733 328.9C95.1367 334.51 94.0739 334.976 84.8463 336.566C52.6386 342.118 43.9777 340.183 40.0908 339.116C31.965 336.888 25.8508 333.301 22.0758 330.731C25.843 319.524 29.5621 310.504 32.306 304.254C43.6372 278.443 54.204 255.089 76.2851 239.842C78.0598 238.618 82.0446 236.35 90.0141 231.815C112.116 219.237 119.701 215.518 127.302 210.77C141.605 201.839 153.45 190.245 166.984 168.644C171.931 160.748 182.737 139.443 189.678 110.924C194.775 89.9753 193.051 81.3538 191.16 75.8537C190.176 72.9892 184.884 58.5761 170.766 51.2508C150.892 40.9402 128.38 52.3797 118.718 57.2907C94.7969 69.4489 82.7671 89.6668 73.0835 105.943C62.5346 123.673 57.0185 139.972 54.323 149.834C50.3515 164.369 48.7645 177.764 47.2593 190.492C44.7141 211.998 46.1455 214.593 43.411 226.09C40.9721 236.344 37.4751 244.202 27.3401 262.557C19.6161 276.546 9.13566 294.643 -4.29343 315.527C-7.651 311.81 -12.3299 306.102 -16.7953 298.467C-23.3028 287.341 -25.8784 277.463 -30.7616 258.161C-40.435 219.934 -41.3948 215.871 -45.0666 208.006C-51.3298 194.59 -55.485 185.685 -65.6609 179.727C-77.6201 172.724 -95.0962 171.426 -108.446 179.975C-123.678 189.73 -126.205 207.602 -127.279 215.197C-131.294 243.599 -115.864 266.758 -105.601 281.696C-79.5069 319.675 -43.1083 338.126 -21.5522 346.674C-24.9305 354.398 -29.2638 364.42 -34.2122 376.176C-38.1053 385.429 -43.4439 398.137 -49.8871 414.415C-54.6629 426.485 -60.5637 441.818 -67.0686 459.815C-70.1021 457.508 -74.4196 453.889 -78.8422 448.797C-89.4127 436.624 -91.8533 426.093 -98.6604 407.316C-107.393 383.23 -111.76 371.188 -121.377 358.419C-127.105 350.812 -133.697 342.062 -145.648 335.922C-147.459 334.992 -175.292 321.157 -194.547 333.813C-214.909 347.198 -214.453 382.818 -204.74 404.947C-195.727 425.481 -177.64 436.909 -151.003 453.742C-139.875 460.774 -135.644 462.127 -113.918 475.238C-98.8158 484.351 -86.6438 492.275 -78.4756 497.719C-82.0196 504.517 -85.3645 516.961 -89.395 531.181C-94.7835 550.19 -95.6922 558.411 -100.557 579.573C-103.967 594.421 -106.684 599.556 -112.225 616.297C-117.542 632.363 -124.433 656.014 -130.042 686.652C-119.055 699.707 -108.069 712.761 -97.0819 725.819L-97.0752 725.828Z"
                            fill="url(#paint0_linear_633_100)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_100" x="-264.324" y="0.978127" width="526.464" height="812.393"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="8" dy="15"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_100"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_100" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_100" x1="-89.5784" y1="672.17" x2="103.52" y2="33.0123"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CAF50"/>
                            <stop offset="1" stop-color="#FFEB3B"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            {/*2 яичка справа*/}
            <div style={{position: "absolute", bottom: "40%", left: "0"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="25%" viewBox="0 0 245 666" fill="none">
                    <g filter="url(#filter0_d_633_103)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M-110.57 465.782C-32.6941 554.985 70.6332 592.205 120.218 548.916C169.803 505.628 146.869 398.222 68.9938 309.02C66.1946 305.813 63.3625 302.674 60.5012 299.603C102.288 274.33 129.707 236.932 132.638 193.695C138.406 108.617 47.1768 33.1453 -71.1277 25.1249C-189.432 17.1045 -290.013 79.5725 -295.781 164.651C-299.864 224.89 -255.322 280.313 -186.971 310.388C-181.632 357.889 -155.071 414.808 -110.57 465.782Z"
                              fill="url(#paint0_linear_633_103)"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_633_103" x="-320.14" y="0.331642" width="564.637" height="664.739"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="37" dy="37"/>
                            <feGaussianBlur stdDeviation="30.55"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_633_103"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_633_103" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_633_103" x1="-62.732" y1="197.237" x2="112.166" y2="346.791"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF9800"/>
                            <stop offset="1" stop-color="#FFEB3B"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column"}}>
                <div style={{width: "80%", height: "40%", backgroundColor: "#212121",
                    borderRadius: "24px", display: "flex", flexDirection: "column",
                    alignItems: "center", textShadow: "0 0 2px rgba(255, 235, 59, 0.3)",
                    fontSize: "6vh", color: "#ffeb3b",
                    fontWeight: "bold", zIndex: "-2"}}>
                    <img src={Gecko} style={{width: "60%", height: "60%", marginTop: "5%"}}/>
                    Geckoshi
                </div>
                <div style={{marginTop: "20%"}}>
                    <ProgressBarLoading progress={progress} />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;