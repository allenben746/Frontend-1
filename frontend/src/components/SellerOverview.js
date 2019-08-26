import React from 'react';
import {connect} from 'react-redux';
// import{actions} from '../components'
import FormikAddItemForm from './AddItemForm.js'

const SellerOverview = (props) => {

    const deleteAuction = id => {
        props.deleteAuction(id);
    };

    const editAuction = id => {
      props.editAuction(id);
    };

    return (
        <>
        <h1>Seller Profile</h1>

            <FormikAddItemForm addAuctionItem={props.addAuctionItem} />
        </>
    )
}

export default SellerOverview;