import React from 'react';
import Coin1 from '../images/gecko_coin_rem 1.png'

const CoinBox = (props) => {
    return (
        <div className="CoinBox">
            <img src={Coin1} style={{height: "18vh", width: "11vw"}}/>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div style={{fontSize: "xx-large", opacity: "70%"}}>
                    $GMEME
                </div>
                <div style={{opacity: "50%", fontSize: "x-large"}}>
                    500
                </div>
            </div>
        </div>
    );
};

export default CoinBox;