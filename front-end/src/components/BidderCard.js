
//bidders to see items and place bids on them





import React from 'react';
import data from './data';
const BidderCard = (props) => {
    return (
        <div>


            <h1>{props.name}</h1>
            <img src={props.image} />
            <p>{props.name}</p>

            <p>{props.product}</p>
            <p>{props.description}</p>
            <p>{props.bid}</p>
        </div>
    )
}

export default BidderCard;

