import React, { useState } from 'react';
import AuctionPage from './components/AuctionPage';
import './App.css';
import Login from './components/Login';
import Seller from './components/Seller';
import AuctionList from './components/AuctionList';
import { Route, NavLink, Link } from 'react-router-dom';
import data from './components/data';

function App(data) {
  const [notes, setNotes] = useState(data);
  const addNewNote = note => {
    setNotes([...notes, note]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul className="tab-bar">
          <li>
            <NavLink exact to="/login" activeClassName="activeNavButton">
              Login
          </NavLink>
          </li>
          <li> <NavLink to="/bidder" activeClassName="activeNavButton">
            Bidder</NavLink></li>
          <Link to="/AuctionPage">AuctionPage</Link>
        </ul>
      </header>

      <Route exact path="/login" component={Login} />

      <Route exact path="/bidder" component={AuctionList} />
      <Route path="/auctionpage" component={AuctionPage} />
      <main>



        <AuctionList addNewNote={addNewNote} />
      </main>
    </div>
  );
}

export default App;
