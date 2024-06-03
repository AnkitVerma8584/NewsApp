
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className='container'>
          <div className='row'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
          </div>
        </div>       
      </div>
    )
  }
}

