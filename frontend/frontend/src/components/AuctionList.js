
import React, { useEffect, useState } from "react";

import axios from 'axios';

import { Link } from 'react-router-dom';

const AuctionList = (props) => {

    const [auction, setAuction] = useState();

    useEffect(() => {



        axios.get("https://silent-auction-api.herokuapp.com/bidder/auctions")
            .then(res => {

                const items = res.data;


                setAuction(res.data)
                console.log(res.data)



            });


    }, []);

    return (
        <div className="auction-list">
            {auction && auction.map(auction => (
                <AuctionDetails key={auction.id} auction={auction} />
            ))}

        </div>
    );
}

function AuctionDetails({ auction }) {
    const { auction_name, image, product_id, auction_description, starting_bid, end_time } = auction;
    return (
        <Link to={`/auctions/${auction.id}`}>
            <div className="auction-card">
                <h2>{auction_name}</h2>
                <div className="product">

                    <img src={image} alt="" />
                    <p>{product_id}</p>
                    <p>{auction_description}</p>
                </div>
                <div className="bid">
                    <h3>Bidder</h3>
                    <p>{starting_bid}</p>
                    <p>{end_time}</p>
                    <button className="bidnow">Bid Now</button>
                    {/* {bidder && bidder.map(item => (
                    <div key={bidder} className="bidder">
                        {bidder}
                        ))} */}
                </div>
            </div>
        </Link>




    )

}

export default AuctionList;