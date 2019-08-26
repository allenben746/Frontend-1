import React from "react";

const Bidder = props => {
    console.log(props);
    return (
        <div className="auction-list">
            {props.AuctionList.map(auction => {
                return (
                    <div className="auction" key={auction.id}>
                        <h2>{auction.name}</h2>
                        <p>{auction.product}</p>
                        <img src="" alt="" />
                    </div>);
            })}
        </div>);
};


export default Bidder;

