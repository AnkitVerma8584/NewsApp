
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
          <h3 className='my-4'>Today's Special</h3>
          <News/>
        </Container>    
      </div>
    )
  }
}

