import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Link, Redirect } from 'react-router-dom';
// import BidderForm from './components/BidderForm';
import Bidders from './components/Bidders';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const propsWithoutComponent = {...props, component: undefined};
    return <Route{...rest} render={props => {
        if (localStorage.getItem('token')) {
            return <Component{...props} />;
        } else {
            return <Redirect to="/login" />;
        }

    }} />

};


const protectRoute = Component => props => {
    if (localStorage.getItem('token')) {
        return <Component {...props} />;
    } else {
        return <Redirect to="/login" />;
    }
};
const ProtectedBidders = protectRoute(Bidders);

function App() {

    return (
        <div className="App">
            <Route path="/login" component={Login} />
            <ProtectedRoute path='/bidders' component={Bidders} />
            {/* <ProtectedRoute path="/bidders" component={Bidder} /> */}
            <Route path="/bidders" component={protectRoute(Bidders)} />
        </div>);
}



export default App;