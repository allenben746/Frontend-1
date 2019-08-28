import React, { useState } from 'react';

const BidderForm = ({ submitBidder, initialValues }) => {
    const [bidder, setBidder] = useState(initialValues || { username: "", bid: "" });
    const handleChange = event => setBidder({ ...bidder, [event.target.name]: event.target.value });
    const handleSubmit = event => {
        event.preventDefault();
        submitBidder(bidder);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name"
                placeholder="username"
                value={bidder.name}
                onChange={handleChange} />
            <input name="bid"
                placeholder="bid"
                value={bidder.bid}
                onChange={handleChange} />

            <button type="submit">Add Bid</button>
        </form>
    );
};

export default BidderForm;
