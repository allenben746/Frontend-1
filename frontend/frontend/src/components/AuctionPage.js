import React from 'react';
import AuctionList from './AuctionList';

const AuctionPage = () => {
    return (
        <div className="auction-page">
            <h1>Auction Page</h1>
            <section class="wrapper">

                <div class="row">

                    <div className="column-3"><div class="card">Newest Arrivals<AuctionList /></div></div>
                    <div className="column-3"><div class="card">Ending Soon<AuctionList /></div></div>
                    <div className="column-3"><div class="card">Your Favorites<AuctionList /></div></div>

                </div>

            </section>
        </div>
    )
}

export default AuctionPage;