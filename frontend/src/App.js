import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//styles
import './styles/App.css';

//components
import Login from './components/Login';
import SignUp from './components/SignUp';
import SellerOverview from './components/Seller/SellerOverview.js';
import Bidders from "./components/Bidders";
import AuctionPage


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path='/seller/:userid/auctions' component={SellerOverview} />
        <Route path='/seller/:userid/products' component={SellerOverview} />
        <Route exact path="/bidder" component={Bidder} />
        <Route path="/auctionpage" component={AuctionPage} />
      </div>
    </Router>
  );
}

export default App;
