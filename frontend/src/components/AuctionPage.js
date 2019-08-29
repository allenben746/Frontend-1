import React from 'react';
import BidderAuctionList from './BidderAuctionList';

const AuctionPage = (data) => {
    return (
        <div className="auction-page">
            <h1>Auction Page</h1>
            <section class="wrapper">

                <div class="row">

                    <div className="column-3"><div class="card">Newest Arrivals<BidderAuctionList /></div></div>
                    <div className="column-3"><div class="card">Ending Soon<BidderAuctionList /></div></div>
                    <div className="column-3"><div class="card">Your Favorites<BidderAuctionList /></div></div>

                </div>

            </section>
        </div>
    )
}

export default AuctionPage;