
// bidders to see items and place bids on them


import React from 'react';
import data from './data';


const BidderCard = (props) => {
    return (
        <div>
            <h1>{props.id}</h1>
            <img src={props.image} />
            header: {props.name}

            <p>{props.product}</p>
            <p>{props.decription}</p>
            <p>{props.bid}</p>
        </div>
    )
}
export default BidderCard;

