import React, { useState, useReducer } from 'react';
import { initialState, bidReducer } from './bidReducer';
import { toggleBidEditor } from './bidActions';
import { connect } from 'formik';


const Bid = (props) => {
    const [newBidText, setBidText] = useState();

    const [state, dispatch] = useReducer(bidReducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setBidText(e.target.value);

    };
    return (
        <div>
            {!props.editing ? (
                <h1>{props.bidOnProps}{''}

                    <button onClick={props.toggleBidEditor}>
                    </button>
                </h1>
            ) : (
                    <div>
                        <input className="bid-input"
                            type="number"
                            name="newBidText"
                            value={newBidText}
                            onChange={handleChanges}
                        />
                        <button onClick={() =>
                            dispatch({ type: 'UPDATE_BID', payload: newBidText })

                        }
                        >
                            Update Bid</button>
                    </div>
                )}


        </div>
    );
};

const mapStateToProps = state => {
    console.log('state', state);
    return {
        bidOnProps: state.bid,
        editing: state.editing
    };
};
export default connect(mapStateToProps, { toggleBidEditor }
)(Bid);