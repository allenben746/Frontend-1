import React, { useState } from 'react';
import AuctionPage from './components/AuctionPage';
import './App.css';
import Login from './components/Login';
import AuctionList from './components/AuctionList';
import { Route, NavLink, Link } from 'react-router-dom';
import data from './components/data';
import EditBidList from './extra/EditBidderList';
import Bidder from './components/Bidder';


function App(data) {
  // const [savedBidList, setSavedBidList] = useState(data);
  // const addToSavedBidList = auction => {
  //   setSavedBidList([...savedBidList, auction]);
  // };
  // const { auction } = {}
  return (
    <div className="App">
      <header className="App-header">
        <nav>

          <ul className="tab-bar">
            <li className="Home"><a href="https://silentauction.netlify.com/">Home</a></li>
            <li>
              <NavLink exact to="/login" activeClassName="activeNavButton">
                Login
          </NavLink>
            </li>
            <li> <NavLink exact to="/bidder" activeClassName="activeNavButton">
              Bidder</NavLink></li>
            <li><Link to="/AuctionPage">AuctionPage</Link></li>
          </ul>
        </nav>
        <h1>Silent Auction</h1>
      </header>

      <Route exact path="/login" component={Login} />


      <Route path="/bidder" component={AuctionList} />
      <Route exact path="/auctionpage" component={AuctionPage} />

    </div >
  );
}

export default App;
