import React, { Component } from 'react'
import NewsItem from '../components/NewsItem';
import { Col, Row } from 'react-bootstrap';

export default class News extends Component {

  constructor(){
    super();
    this.state = {articles:[],loading:true};
  }

  async componentDidMount(){
    let url = process.env.REACT_APP_BASE_URL_EVERYTHING;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(
      {articles:parsedData.articles.filter((elem)=>elem.title!='[Removed]' && elem.urlToImage!=null),
        loading:false}
    );
  }

  render() {
    return (
      <>
        {
          this.state.loading?<div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
        <Row>  
            {this.state.articles.map((elem)=>{
              return (
                <Col md={6} lg={4} key={elem.title} >
                  <NewsItem title={elem.title} description={elem.description} url={elem.url} image={elem.urlToImage}/>
                </Col>
              );
              })}         
        </Row>}
      </>
    )
  }
}
