import React from 'react';
class EditBidList extends React.Component {
    state = {
        newBidder: '',
        bidders: [
            {
                name: 'Brandi',
                bidderStatus: true
            },
            {
                name: 'Josh',
                bidderStatus: false
            }

        ]
    };
    handleChanges = e => {
        this.setState({ newBidder: e.target.value });
    };
    render() {
        return (
            <React.Fragment>
                <div className="friends-list">
                    {this.state.bidders.map((bidder, index) => (
                        <h4 key={index}>
                            {bidder.name}
                            {bidder.bidderStatus}
                        </h4>
                    ))}
                </div>
                <input type="number"
                    value={this.state.newBidder}
                    onChange={this.handleChanges}
                    placeholder="Add new bid" />
                <button>Add Bid</button>
            </React.Fragment>
        );
    }
}


export default EditBidList;
