import Auction from './components/Auction';
import './App.css';
import LoginAuth from './components/redux/LoginAuth';
import AuctionList from './components/AuctionList';
import { Route, NavLink, Link } from 'react-router-dom';
import data from './components/data';
import React, { useState } from "react";
import Bidder from "./components/Bidders";

function App() {
  const [notes, setNotes] = useState(data);
  const addNewNote = note => {
    setNotes([...notes, note]);
  };
  // const [savedBidList, setSavedBidList] = useState(data);
  // const addToSavedBidList = auction => {
  //   setSavedBidList([...savedBidList, auction]);
  // };
  // const { auction } = {}
  return (
    <div className="App">
      <h1>Silent Auction</h1>
      <nav>

        <ul className="tab-bar">
          <li className="Home"><a href="https://silentauction.netlify.com/">Home</a></li>
          <li>
            <NavLink exact to="/loginauth" activeClassName="activeNavButton">
              Login
                  </NavLink>
          </li>
          <li><NavLink to="/bidder" activeClassName="activeNavButton">
            Bidder</NavLink></li>
          <Link to="/AuctionPage">AuctionPage</Link>
        </ul>
      </nav>





      <Route exact path="/loginauth" component={LoginAuth} />

      <Route exact path="/bidder" component={AuctionList} />
      <Route path="/auctions/:id" component={Auction} />


      <main>



        <AuctionList addNewNote={addNewNote} />
      </main>

    </div >
    // <Route path="/bidder" component={AuctionList} />
    // <Route exact path="/auctionpage" component={AuctionPage} />
    // <Bidder />
    // <EditBidList />
    // </div >
  );
}
export default App;