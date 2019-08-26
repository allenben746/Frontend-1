import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//styles
import './App.css';

//components
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Route path="/sign-up" component={SignUp}/>
      </div>
    </Router>
  );
}

export default App;
