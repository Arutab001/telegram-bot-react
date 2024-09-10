import React from 'react';
import Coin1 from '../images/gecko_coin_rem 1.png'

const CoinBox = (props) => {
    return (
        <div className="CoinBox">
            <img src={Coin1}/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    A
                </div>
                <div>
                    B
                </div>
            </div>
        </div>
    );
};

export default CoinBox;