import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import OrderNow from './components/pages/OrderNow'
import Reservation from './components/pages/Reservation'
import SignIn from './components/pages/SignIn'
import Email from './components/pages/Email'
import Hours from './components/pages/Hours'
import Popup from './components/Popup'
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/' exact component= {Home}/>
        <Route path ='/menu' exact component= {Menu}/>
        <Route path ='/order-now' exact component= {OrderNow}/>
        <Route path ='/reservation' exact component= {Reservation}/>
        <Route path ='/sign-in' exact component= {SignIn}/>
        <Route path ='/hours' exact component= {Hours}/>
        <Route path ='/email' exact component= {Email}/>
      </Switch>
      </Router>
    </>
    );
}

export default App;
