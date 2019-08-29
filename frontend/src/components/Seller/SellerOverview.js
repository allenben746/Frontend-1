import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSeller, getSellerProducts, addAuction, addProduct, deleteProduct, deleteAuction} from '../store/actions' 
import FormikAddAuction from './AddAuction.js'
import axiosWithAuth from '../utils/axiosWithAuth.js';
import FormikAddItemForm from './AddItemForm.js';

const SellerOverview = (props) => {

    return (
        <div>
        <h1>Seller Profile</h1>
            <div>
            <h2>Products:</h2>
                <button onClick= {() => props.getSellerProducts()}>See Products</button>
                {props.products ? (
                props.products.map(product => (
                <div className="auctions" key={product.product_name}>
                    <h4>Name: {product.product_name}</h4>
                    <button onClick = {() => props.deleteProduct(product.id)}>Delete</button>
                    <FormikAddAuction addAuction={props.addAuction} productId={product.id}/>
                </div>
                ))
            ) : (
                <h1> Page is loading, please wait...</h1>
            )}
            <FormikAddItemForm addProduct={props.addProduct} />

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
        </div>
    )
}

const mapStateToProps = state => {
    return {
      auctions: state.auctions,
      products: state.products
    };
};

export default connect(
    mapStateToProps,
    {getSellerProducts, addProduct, getSeller, addAuction, deleteProduct, deleteAuction}
)(SellerOverview);