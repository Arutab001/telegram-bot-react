// Check.js
import React from 'react';
import ChecksStyle from './Check.module.css';
import gecko from '../../../images/gecko_coin_rem 1.png'

const Check = ({currency, amount, total, onDelete}) => {
    return (
        <div className={ChecksStyle.checkCard}>
            <div className={ChecksStyle.checkHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 188 188" fill="none">
                    <circle cx="94" cy="94" r="94" fill="#6D8069"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M70.19 41.0313H118.561C123.58 41.0313 127.035 41.0313 129.942 42.0435C132.658 43.0094 135.116 44.5916 137.126 46.6671C139.135 48.7426 140.642 51.2557 141.53 54.0115C142.497 56.9737 142.492 60.4966 142.492 65.7215V135.922C142.492 143.196 133.969 147.523 128.357 142.357C128.177 142.184 127.938 142.088 127.689 142.088C127.439 142.088 127.2 142.184 127.02 142.357L124.631 144.551C120.051 148.768 113.112 148.768 108.532 144.551C107.703 143.772 106.611 143.34 105.477 143.34C104.343 143.34 103.251 143.772 102.422 144.551C97.8425 148.768 90.9034 148.768 86.3235 144.551C85.4945 143.772 84.4027 143.34 83.2686 143.34C82.1344 143.34 81.0426 143.772 80.2136 144.551C75.6337 148.768 68.6947 148.768 64.1147 144.551L61.731 142.357C61.5507 142.183 61.3101 142.085 61.0598 142.085C60.8094 142.085 60.5688 142.183 60.3886 142.357C54.7771 147.518 46.2539 143.196 46.2539 135.922V65.7264C46.2539 60.4966 46.2539 56.9737 47.2163 54.0115C48.1037 51.2557 49.6107 48.7426 51.6203 46.6671C53.63 44.5916 56.0882 43.0094 58.8043 42.0435C61.7162 41.0263 65.1709 41.0313 70.19 41.0313ZM70.9057 48.474C64.8797 48.474 62.8019 48.5237 61.2325 49.0744C59.5934 49.6652 58.1115 50.6273 56.9014 51.886C55.6913 53.1448 54.7855 54.6666 54.254 56.3336C53.7062 58.0107 53.6618 60.2237 53.6618 66.436V135.922C53.6618 136.517 53.953 136.875 54.3231 137.048C54.492 137.129 54.6803 137.16 54.866 137.138C55.0657 137.103 55.2501 137.008 55.3941 136.865C56.9384 135.435 58.9607 134.642 61.0598 134.642C63.1588 134.642 65.1812 135.435 66.7255 136.865L69.1092 139.058C69.9382 139.836 71.03 140.269 72.1642 140.269C73.2983 140.269 74.3902 139.836 75.2191 139.058C77.4126 137.026 80.286 135.898 83.2686 135.898C86.2511 135.898 89.1246 137.026 91.318 139.058C92.147 139.836 93.2388 140.269 94.373 140.269C95.5071 140.269 96.5989 139.836 97.4279 139.058C99.6213 137.026 102.495 135.898 105.477 135.898C108.46 135.898 111.333 137.026 113.527 139.058C114.356 139.836 115.448 140.269 116.582 140.269C117.716 140.269 118.808 139.836 119.637 139.058L122.02 136.865C123.565 135.435 125.587 134.642 127.686 134.642C129.785 134.642 131.808 135.435 133.352 136.865C133.564 137.063 133.747 137.123 133.885 137.138C134.069 137.159 134.255 137.128 134.423 137.048C134.793 136.875 135.089 136.512 135.089 135.922V66.436C135.089 60.2237 135.04 58.0107 134.497 56.3287C133.964 54.6615 133.056 53.14 131.844 51.8821C130.632 50.6241 129.149 49.6635 127.508 49.0744C125.944 48.5286 123.866 48.479 117.84 48.479L70.9057 48.474ZM109.184 71.7452C109.547 72.0707 109.843 72.4651 110.055 72.9058C110.266 73.3464 110.389 73.8247 110.417 74.3132C110.444 74.8018 110.376 75.2909 110.215 75.7528C110.054 76.2146 109.804 76.6401 109.48 77.0048L91.851 96.8522C91.5038 97.2433 91.0783 97.5561 90.6025 97.7704C90.1266 97.9846 89.6111 98.0954 89.0897 98.0954C88.5683 98.0954 88.0528 97.9846 87.577 97.7704C87.1011 97.5561 86.6757 97.2433 86.3284 96.8522L79.2808 88.9132C78.6331 88.1766 78.3017 87.2122 78.3589 86.2306C78.4161 85.2491 78.8574 84.3302 79.5863 83.6747C80.3152 83.0192 81.2726 82.6804 82.2492 82.7322C83.2258 82.784 84.1423 83.2223 84.7985 83.9514L89.0922 88.7842L103.957 72.0479C104.281 71.6829 104.672 71.3856 105.11 71.1729C105.548 70.9602 106.023 70.8362 106.508 70.8081C106.993 70.78 107.48 70.8483 107.939 71.0091C108.398 71.1699 108.821 71.42 109.184 71.7452ZM68.4676 111.738C68.4676 110.751 68.8576 109.804 69.5518 109.106C70.2459 108.408 71.1874 108.016 72.1691 108.016H116.587C117.568 108.016 118.51 108.408 119.204 109.106C119.898 109.804 120.288 110.751 120.288 111.738C120.288 112.725 119.898 113.671 119.204 114.369C118.51 115.067 117.568 115.459 116.587 115.459H72.1691C71.1874 115.459 70.2459 115.067 69.5518 114.369C68.8576 113.671 68.4676 112.725 68.4676 111.738Z"
                          fill="#D9FFD2"/>
                </svg>
                <h1>Check 1</h1>
            </div>
            <div className={ChecksStyle.headerButtons}>
                <button disabled={true} className={ChecksStyle.linkButton}>Link to user</button>
                <button disabled={true} className={ChecksStyle.deleteButton}>Delete check</button>
            </div>
            <div className={ChecksStyle.checkInfo}>
                <div className={ChecksStyle.main}>
                    <div>
                        <img src={gecko} width={25} height={25}/>
                    </div>
                    <div>
                        <p>{amount} {currency}</p>
                        <p>Balance: 999.999</p>
                    </div>
                </div>
                <div style={{fontSize: "8px", textAlign: "center"}}>
                    ---- Share and get rewarded ----
                </div>
                <div style={{fontSize: "10px"}}>
                    <p>Total:</p>
                    <p>{total} {currency}</p>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="4" viewBox="0 0 724 4" fill="none">
                        <rect width="724" height="4" fill="#D9FFD2"/>
                    </svg>
                </div>
                <div className={ChecksStyle.checkActions}>
                    <button className={ChecksStyle.actionButton} disabled={true}>Save check</button>
                    <button className={ChecksStyle.actionButton} disabled={true}>Send check</button>
                </div>

            </div>
        </div>
    );
};

export default Check;
