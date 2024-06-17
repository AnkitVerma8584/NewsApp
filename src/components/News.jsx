import React, { Component } from 'react'
import NewsItem from '../components/NewsItem';
import { Col, Pagination, Row, Stack } from 'react-bootstrap';

export default class News extends Component {

  constructor(){
    super();
    this.state = {articles:[],currentPage:0,loading:true};
  }

  async componentDidMount(){
    let url = process.env.REACT_APP_BASE_URL_EVERYTHING;
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState(
      { articles:parsedData.articles.filter((elem)=>elem.title!='[Removed]' && elem.urlToImage!=null),
        currentPage:1,
        totalPage: Math.ceil(parsedData.totalResults/100),
        loading:false}
    );
  }

  onPageChange = (num)=>{
    if(num != this.state.currentPage){
          this.setState({
            ...this.state,
            currentPage:num
          });
        }
  }
  
  render() {
    let items = [];
    for (let number = 1; number <= 8; number++) { //this.state.totalPage
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === this.state.currentPage} 
          onClick={()=>this.onPageChange(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <>
        {
          this.state.loading?<div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
          <Stack>
            <Row>  
                {this.state.articles.map((elem)=>{
                  return (
                    <Col md={6} lg={4} key={elem.title} >
                      <NewsItem title={elem.title} description={elem.description} url={elem.url} image={elem.urlToImage}/>
                    </Col>
                  );
                  })}         
            </Row>
            <Pagination>
              <Pagination.First/>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
                {items}
              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Stack>
        }
      </>
    )
  }
}
