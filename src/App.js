
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          <h2>Top-Headlines</h2>
          <News/>
        </div>       
      </div>
    )
  }
}

