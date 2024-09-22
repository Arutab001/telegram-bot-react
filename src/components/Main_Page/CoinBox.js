import React from 'react';
import Coin1 from '../../images/gecko_coin_rem 1.png'

const CoinBox = (props) => {
    return (
        <div className="CoinBox">
            <img src={Coin1} style={{height: "120px", width: "120px"}}/>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div style={{fontSize: "7vw", opacity: "70%"}}>
                    $GMEME
                </div>
                <div style={{opacity: "5vw", fontSize: "large"}}>
                    500
                </div>
            </div>
        </div>
    );
};

export default CoinBox;