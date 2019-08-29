import React, { useState, useEffect } from 'react';
import BidderCard from './BidderCard';
import BidderForm from './BidderForm';
import axiosWithAuth from './utils/axiosWithAuth';
import { Route, Redirect } from 'react-router-dom';


const Bidders = (props) => {
    const [bidderList, setBidderList] = useState([]);
    const getBidders = () => {
        axiosWithAuth().get('http://localhost:9000/bidder/:userid/bids')
            .then(res => {
                setBidderList(res.data);
            })
            .catch(err => console.log(err.response));
    };
    useEffect(() => {

        getBidders();
    }, []);

    const addBidder = bidder => {
        axiosWithAuth().post('http://localhost:9000/bidder/:userid/bids/:auctionid', bidder)
            .then(res => setBidderList(res.data))
            .catch(err => console.log(err.response));
    };
    const editBidder = bidder => {
        axiosWithAuth().put('https://jsonplaceholder.typicode.com/posts/1', bidder)
            .then(res => {
                setBidderList(res.data);
                props.history.push("/bidders");
            })
            .catch(err => console.log(err.response));
    };

    const deleteBidder = id => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => setBidderList(res.data))
            .catch(err => console.log(err.response));
    };

    return (
        <div>
            <h2>Bidders</h2>
            <Route exact path="/bidder" render={props => <BidderForm {...props} submitBidder={addBidder} />} />
            {bidderList.map(bidder => {
                return <BidderCard key={bidder.id}
                    bidder={bidder}
                    addBidder={addBidder}
                    editBidder={editBidder}
                    deleteBidder={deleteBidder} />;

            })}
            <Route path="/bidders/edit/:id" render={props => {
                console.log(props);
                const currentBidder = bidderList.find(bidder => bidder.id == props.match.params.id);
                if (!currentBidder) {
                    return <Redirect to="/bidders" />;
                }
                return <BidderForm {...props} submitBidder={editBidder} initialValues={currentBidder} />;
            }} />
        </div>
    );
};



export default Bidders;