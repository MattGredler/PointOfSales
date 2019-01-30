import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';

import logo from './data/logo.jpg'

const Navigation = (props) => <nav>
  <img className= 'logo' src= {logo} alt= 'https://thumbs.dreamstime.com/z/error-press-ctrl-alt-del-blackboard-chalk-write-89539177.jpg' />
  <ul className= 'header-button' >
    <button><NavLink to='/'>Home</NavLink></button>
    <button><NavLink to='/menu'>Menu</NavLink></button>
    <button><NavLink to='/cart'>Cart</NavLink></button>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
    <div className='page-container'>
    <Navigation />
      <Router />
    </div>
  );
  }
}

export default App;
