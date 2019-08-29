import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from './data';


const Auction = (props) => {
    const [auction, setAuction] = useState(null);
    const id = props.match.params.id;
    useEffect(() => {

        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
            .get('https://silent-auction-api.herokuapp.com/bidder/auctions')
            .then(response => {
                setAuction(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);
    if (!auction) {
        return <div>Loading auction information...</div>;
    }
    const { auction_name, auction_description, start_time, end_time, starting_bid, product_id } = auction;
    return (

        <div className="auction-card">
            <h1>{auction_name}</h1>

            <div className="product">
                <img src="{image}" alt="image" />
                <p>{auction_description}</p>
                <p>{product_id}</p>

            </div>
            <div className="bid">
                <h3>Bidder</h3>
                <p>{start_time}</p>
                <p>{end_time}</p>
                <p>{starting_bid}</p>
                <button>Place bid Now</button>
                {/* {bidder && bidder.map(item => (
                      <div key={bidder} className="bidder">
                          {bidder}
                          ))} */}
            </div>
        </div>






    )
}

export default Auction;







