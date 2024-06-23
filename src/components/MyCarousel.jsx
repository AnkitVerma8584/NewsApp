import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default class MyCarousel extends Component {

    constructor(){
        super();
        this.state = {articles:[]};
    }
    
    async componentDidMount(){
        let url = process.env.REACT_APP_BASE_URL;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles});
    }

  render() {
    return (
        <Carousel>
            {
            this.state.articles.filter((element) => element.urlToImage!=null).map((elem)=>{
                return (
                    <Carousel.Item key={elem.title}>
                        <Image src={elem.urlToImage} className='w-100' height={500}/>
                        <Carousel.Caption>
                            <h3>{elem.title}</h3>
                            <p>{elem.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
                })} 
        </Carousel>
    )
  }
}
