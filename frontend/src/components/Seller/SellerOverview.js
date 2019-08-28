import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSeller, deleteAuction} from '../store/actions' 
import FormikAddAuction from './AddAuction.js'
import axiosWithAuth from '../utils/axiosWithAuth.js';

const SellerOverview = (props) => {

    return (
        <div>
        <h1>Seller Profile</h1>
            <div>
            <h2>Auctions:</h2>
                <button onClick={() => {props.getSeller()}}> See Your Auctions </button>
                {props.auctions ? (
                props.auctions.map(auction => (
                <div className="auctions" key={auction.auction_name}>
                    <h4>Auction: {auction.auction_name}</h4>
                    <h4>Start Time: {auction.start_time}</h4>
                    <h4>End Time: {auction.end_time}</h4>
                    <h4>Starting Bid: {auction.starting_bid}</h4>
                    <button onClick={() => props.deleteAuction(auction.id)}>Delete Auction</button>
                </div>
                ))
            ) : (
                <h1> Page is loading, please wait...</h1>
            )}
            </div>
                <FormikAddAuction addAuction={props.addAuction} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
      auctions: state.auctions
    };
};

export default connect(
    mapStateToProps,
    {getSeller, deleteAuction}
)(SellerOverview);