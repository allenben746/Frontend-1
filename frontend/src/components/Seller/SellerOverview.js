import React from 'react';
import {connect} from 'react-redux';
// import{actions} from '../store/actions'
import FormikAddAuction from './AddAuction.js'

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
            <h2>Auctions:</h2>
                <FormikAddAuction addAuction={props.addAuction} />
        </>
    )
}

export default SellerOverview;