import React, {useEffect} from 'react';
import CoinBox from "./CoinBox.js";
import NewsBox from "./NewsBox.js";
import {Link} from "react-router-dom";
import Coin1 from "../../images/gecko_coin_rem 1.png"
import Coin2 from "../../images/gecko_coin2.0 1.png"
import {useUser} from "../Base_Logic/UserContext.js";
import axios from "axios";
import Spider from "../Spider/Spider.js";

const Body = () => {
    const {user, handleUser, handleUserBalance} = useUser();

    useEffect(()  =>{
        const getbalance = async () => {
            try {
                const response = await axios.get('/coin/balance');
                if (response.status === 200){
                    handleUserBalance(response.data.data.GMEME);
                }
            }
            catch (e) {
                console.log("Balance error:");
                console.error(e)
            }
        }
        getbalance();
    }, [])

    return (
        <div className="Body">
            <Spider />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <CoinBox image={Coin1} name="$GMEME" cost={user.balance}/>
                <CoinBox image={Coin2} name="$BMEME" cost={"0"}/>
            </div>
            <div>
                <NewsBox/>
            </div>
            <Link to="/Casino">
                <div className="CasinoLink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="298" height="260" viewBox="0 0 298 260" fill="none">
                        <path
                            d="M19.3254 128.497L71.1515 87.0729L77.9881 73.6092L41.2691 54.9637L34.4324 68.4274L58.9118 80.8577L7.08573 122.282M68.2841 153.358L120.11 111.933L126.947 98.4698L90.2278 79.8244L83.3911 93.288L107.871 105.718L56.0445 147.143M117.243 178.218L169.069 136.794L175.906 123.33L139.187 104.685L132.35 118.149L156.829 130.579L105.003 172.003M283.527 93.3031C270.063 86.4665 252.895 92.9901 245.374 107.8C240.589 117.225 240.699 129.135 245.992 136.903L168.737 289.043L132.018 270.397L145.692 243.47C153.035 247.199 160.666 244.3 164.768 236.221L226.298 115.049C230.4 106.97 228.239 99.0989 220.895 95.3698L174.384 71.7522C172.796 50.6237 161.13 31.1516 142.771 21.8288C124.411 12.5061 101.806 14.5758 83.8105 25.7601L37.2997 2.14246C29.9559 -1.58663 22.3254 1.31277 18.2234 9.39096L-43.3067 130.564C-47.4087 138.642 -45.2475 146.514 -37.9037 150.243L-85.7604 244.488L97.8349 337.716L118.345 297.325L155.064 315.97C168.528 322.807 185.696 316.283 193.217 301.473L270.471 149.334C279.866 149.024 289.547 142.085 294.333 132.661C301.853 117.851 296.991 100.14 283.527 93.3031ZM35.8661 35.2849L194.982 116.082L147.125 210.328L-11.9906 129.53L35.8661 35.2849ZM87.0289 298.358L-47.6077 229.991L-13.4243 162.673L121.212 231.04L87.0289 298.358ZM69.3862 272.464L-16.2916 228.958L-2.61826 202.031L83.0595 245.537L69.3862 272.464Z"
                            fill="#6D8069"/>
                    </svg>
                    <svg style={{marginLeft: "3vw", marginRight: "3vw"}} xmlns="http://www.w3.org/2000/svg" width="434"
                         height="101" viewBox="0 0 434 101" fill="none">
                        <path
                            d="M48.379 100.28C41.5523 100.28 35.195 99.1707 29.307 96.952C23.5043 94.648 18.427 91.448 14.075 87.352C9.80833 83.1707 6.48033 78.264 4.091 72.632C1.70167 67 0.507 60.856 0.507 54.2C0.507 47.544 1.70167 41.4 4.091 35.768C6.48033 30.136 9.851 25.272 14.203 21.176C18.555 16.9947 23.6323 13.7947 29.435 11.576C35.2377 9.272 41.595 8.12 48.507 8.12C55.8457 8.12 62.5443 9.4 68.603 11.96C74.6617 14.4347 79.7817 18.1467 83.963 23.096L73.211 33.208C69.9683 29.7093 66.3417 27.1067 62.331 25.4C58.3203 23.608 53.9683 22.712 49.275 22.712C44.5817 22.712 40.2723 23.48 36.347 25.016C32.507 26.552 29.1363 28.728 26.235 31.544C23.419 34.36 21.2003 37.688 19.579 41.528C18.043 45.368 17.275 49.592 17.275 54.2C17.275 58.808 18.043 63.032 19.579 66.872C21.2003 70.712 23.419 74.04 26.235 76.856C29.1363 79.672 32.507 81.848 36.347 83.384C40.2723 84.92 44.5817 85.688 49.275 85.688C53.9683 85.688 58.3203 84.8347 62.331 83.128C66.3417 81.336 69.9683 78.648 73.211 75.064L83.963 85.304C79.7817 90.168 74.6617 93.88 68.603 96.44C62.5443 99 55.803 100.28 48.379 100.28ZM139.858 99V85.176L138.962 82.232V58.04C138.962 53.3467 137.554 49.72 134.738 47.16C131.922 44.5147 127.655 43.192 121.938 43.192C118.098 43.192 114.301 43.7893 110.546 44.984C106.877 46.1787 103.762 47.8427 101.202 49.976L94.93 38.328C98.5993 35.512 102.951 33.4213 107.986 32.056C113.106 30.6053 118.397 29.88 123.858 29.88C133.757 29.88 141.394 32.2693 146.77 37.048C152.231 41.7413 154.962 49.0373 154.962 58.936V99H139.858ZM118.354 99.896C113.234 99.896 108.754 99.0427 104.914 97.336C101.074 95.544 98.0873 93.112 95.954 90.04C93.906 86.8827 92.882 83.3413 92.882 79.416C92.882 75.576 93.778 72.12 95.57 69.048C97.4473 65.976 100.477 63.544 104.658 61.752C108.839 59.96 114.386 59.064 121.298 59.064H141.138V69.688H122.45C116.989 69.688 113.319 70.584 111.442 72.376C109.565 74.0827 108.626 76.216 108.626 78.776C108.626 81.6773 109.778 83.9813 112.082 85.688C114.386 87.3947 117.586 88.248 121.682 88.248C125.607 88.248 129.106 87.352 132.178 85.56C135.335 83.768 137.597 81.1227 138.962 77.624L141.65 87.224C140.114 91.2347 137.341 94.3493 133.33 96.568C129.405 98.7867 124.413 99.896 118.354 99.896ZM196.616 99.896C190.899 99.896 185.395 99.1707 180.104 97.72C174.899 96.184 170.76 94.3493 167.688 92.216L173.832 80.056C176.904 82.0187 180.573 83.64 184.84 84.92C189.107 86.2 193.373 86.84 197.64 86.84C202.675 86.84 206.301 86.1573 208.52 84.792C210.824 83.4267 211.976 81.592 211.976 79.288C211.976 77.4107 211.208 76.0027 209.672 75.064C208.136 74.04 206.131 73.272 203.656 72.76C201.181 72.248 198.408 71.7787 195.336 71.352C192.349 70.9253 189.32 70.3707 186.248 69.688C183.261 68.92 180.531 67.8533 178.056 66.488C175.581 65.0373 173.576 63.1173 172.04 60.728C170.504 58.3387 169.736 55.1813 169.736 51.256C169.736 46.904 170.973 43.1493 173.448 39.992C175.923 36.7493 179.379 34.2747 183.816 32.568C188.339 30.776 193.672 29.88 199.816 29.88C204.424 29.88 209.075 30.392 213.768 31.416C218.461 32.44 222.344 33.8907 225.416 35.768L219.272 47.928C216.029 45.9653 212.744 44.6427 209.416 43.96C206.173 43.192 202.931 42.808 199.688 42.808C194.824 42.808 191.197 43.5333 188.808 44.984C186.504 46.4347 185.352 48.2693 185.352 50.488C185.352 52.536 186.12 54.072 187.656 55.096C189.192 56.12 191.197 56.9307 193.672 57.528C196.147 58.1253 198.877 58.6373 201.864 59.064C204.936 59.4053 207.965 59.96 210.952 60.728C213.939 61.496 216.669 62.5627 219.144 63.928C221.704 65.208 223.752 67.0427 225.288 69.432C226.824 71.8213 227.592 74.936 227.592 78.776C227.592 83.0427 226.312 86.7547 223.752 89.912C221.277 93.0693 217.736 95.544 213.128 97.336C208.52 99.0427 203.016 99.896 196.616 99.896ZM241.371 99V30.648H257.371V99H241.371ZM249.435 19.384C246.448 19.384 243.974 18.4453 242.011 16.568C240.134 14.6907 239.195 12.4293 239.195 9.784C239.195 7.05333 240.134 4.79199 242.011 2.99999C243.974 1.12266 246.448 0.183998 249.435 0.183998C252.422 0.183998 254.854 1.08 256.731 2.87199C258.694 4.57866 259.675 6.75466 259.675 9.39999C259.675 12.216 258.736 14.6053 256.859 16.568C254.982 18.4453 252.507 19.384 249.435 19.384ZM317.155 29.88C322.616 29.88 327.48 30.9467 331.747 33.08C336.099 35.2133 339.512 38.4987 341.987 42.936C344.462 47.288 345.699 52.92 345.699 59.832V99H329.699V61.88C329.699 55.8213 328.248 51.2987 325.347 48.312C322.531 45.3253 318.563 43.832 313.443 43.832C309.688 43.832 306.36 44.6 303.459 46.136C300.558 47.672 298.296 49.976 296.675 53.048C295.139 56.0347 294.371 59.832 294.371 64.44V99H278.371V30.648H293.603V49.08L290.915 43.448C293.304 39.096 296.76 35.768 301.283 33.464C305.891 31.0747 311.182 29.88 317.155 29.88ZM396.841 99.896C389.844 99.896 383.614 98.4027 378.153 95.416C372.692 92.344 368.382 88.1627 365.225 82.872C362.068 77.5813 360.489 71.5653 360.489 64.824C360.489 57.9973 362.068 51.9813 365.225 46.776C368.382 41.4853 372.692 37.3467 378.153 34.36C383.614 31.3733 389.844 29.88 396.841 29.88C403.924 29.88 410.196 31.3733 415.657 34.36C421.204 37.3467 425.513 41.4427 428.585 46.648C431.742 51.8533 433.321 57.912 433.321 64.824C433.321 71.5653 431.742 77.5813 428.585 82.872C425.513 88.1627 421.204 92.344 415.657 95.416C410.196 98.4027 403.924 99.896 396.841 99.896ZM396.841 86.2C400.766 86.2 404.265 85.3467 407.337 83.64C410.409 81.9333 412.798 79.4587 414.505 76.216C416.297 72.9733 417.193 69.176 417.193 64.824C417.193 60.3867 416.297 56.5893 414.505 53.432C412.798 50.1893 410.409 47.7147 407.337 46.008C404.265 44.3013 400.809 43.448 396.969 43.448C393.044 43.448 389.545 44.3013 386.473 46.008C383.486 47.7147 381.097 50.1893 379.305 53.432C377.513 56.5893 376.617 60.3867 376.617 64.824C376.617 69.176 377.513 72.9733 379.305 76.216C381.097 79.4587 383.486 81.9333 386.473 83.64C389.545 85.3467 393.001 86.2 396.841 86.2Z"
                            fill="#6D8069"/>
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default Body;