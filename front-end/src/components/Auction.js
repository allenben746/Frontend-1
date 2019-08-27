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
            .get(data)
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
    const { title, username, image, product, description, bid } = auction;
    return (

        <div className="auction-card">
            <h1>{title}</h1>
            <h2>{username}</h2>
            <div className="product">

                image:{image}
                Product:{product}
                description:{description}
            </div>
            <div className="bid">
                <h3>Bidder</h3>
                <p>{bid}</p>
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







