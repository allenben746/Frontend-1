
//bidders to see items and place bids on them





import React from 'react';
import { Link } from 'react-router-dom';

const BidderCard = ({ bidder, deleteBid }) => {
    return (
        <div>
            {bidder.username} {bidder.bid}
            <button onClick={() => deleteBid(bidder.id)}>Delete</button>
            <Link to={`/bidder/edit/${bidder.id}`}>Edit</Link>
        </div>
    );
};

export default BidderCard;

