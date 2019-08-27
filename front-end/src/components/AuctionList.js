
import React, { useEffect, useState } from "react";

import axios from 'axios';

import { Link } from 'react-router-dom';

const AuctionList = (props) => {

    const [auctions, setAuctions] = useState();

    useEffect(() => {
        const getAuction = () => {


            axios.get('https://silent-auction-api.herokuapp.com/bidder/auctions')
                .then(res => {

                    const items = res.data;


                    setAuctions(res.data)
                    console.log(res.data)



                });
        }
        getAuction();
    }, []);

    return (
        <div className="auction-list">
            {auctions && auctions.map(auction => (
                <AuctionDetails key={auction.id} auction={auction} />
            ))}

        </div>
    );
}

function AuctionDetails({ auction }) {
    const { username, image, product, description, bid } = auction;
    return (
        <Link to={`/auctions/${auction.id}`}>
            <div className="auction-card">
                <h2>{username}</h2>
                <div className="product">

                    <img src={image} alt="man in pic" />
                    Product:{product}
                    description:{description}
                </div>
                <div className="bid">
                    <h3>Bidder</h3>
                    <p>{bid}</p>
                    <button className="bidnow">Bid Now</button>
                    {/* {bidder && bidder.map(item => (
                    <div key={bidder} className="bidder">
                        {bidder}
                        ))} */}
                </div>
            </div>
        </Link >




    )

}

export default AuctionList;