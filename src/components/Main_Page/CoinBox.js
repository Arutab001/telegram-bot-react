import React from 'react';
import "../../App.css"
import Coin1 from '../../images/gecko_coin_rem 1.png'

const CoinBox = (props) => {
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };
    return (
        <div className="CoinBox">
            <img src={props.image} />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div className="name">
                    {props.name}
                </div>
                <div className="Cost">
                    {formatNumber(props.cost)}
                </div>
            </div>
        </div>
    );
};

export default CoinBox;
