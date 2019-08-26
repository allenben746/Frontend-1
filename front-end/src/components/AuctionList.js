
import React, { useEffect, useState } from "react";
import BidderCard from './BidderCard';
import axios from 'axios';
import data from './data';
import { Link } from 'react-router-dom';

const AuctionList = (props) => {

    const [auctions, setAuctions] = useState(data);

    useEffect(() => {
        const getAuction = () => {


            axios.get(data)
                .then(res => {

                    const items = res.data;


                    setAuctions(res.data.results)
                    console.log(res.data.results)



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

                    image:{image}
                    Product:{product}
                    description:{description}
                </div>
                <div className="bid">
                    <h3>Bidder</h3>
                    <p>{bid}</p>
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
