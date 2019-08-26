import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//styles
import './App.css';

//components
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp}/>
      </div>
    </Router>
  );
}

export default App;
