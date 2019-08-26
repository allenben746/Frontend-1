import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//styles
import './styles/App.css';

//components
import Login from './components/Login';
import SignUp from './components/SignUp';
import SellerOverview from './components/SellerOverview.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp}/>
        <Route path='/seller' component={SellerOverview}/>
      </div>
    </Router>
  );
}

export default App;
