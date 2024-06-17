
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import MyCarousel from './components/MyCarousel';
import { Container } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <MyCarousel/>
        <Container>
          <h2>Top-Headlines</h2>
          <News/>
        </Container>    
      </div>
    )
  }
}

