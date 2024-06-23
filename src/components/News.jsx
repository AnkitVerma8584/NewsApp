import React, { Component } from 'react'
import NewsItem from '../components/NewsItem';
import { Col, Row, Stack } from 'react-bootstrap';
import PageTabs from './PageTabs';

export default class News extends Component {

  constructor(){
    super();
    this.state = {articles:[],currentPage:0,loading:true};
  }

  async componentDidMount(){

    let result = await this.getArticles();

    if(result.status === 'ok'){
      this.setState(
        { articles: result.articles.filter((elem)=>elem.title!='[Removed]' && elem.urlToImage!=null),
          currentPage:1,
          totalPage: Math.ceil(result.totalResults/100),
          loading:false}
      );
    }else{
      //TODO Show error
    }

    
  }

  async getArticles(page = 1){
    let url = process.env.REACT_APP_BASE_URL_EVERYTHING + `&page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData;
  }
  
  render() {
    function Center({ children }) {
      return (
          <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}>
              {children}
          </div>
      );
    }
    const onPageChange = async (num)=>{
      if(num != this.state.currentPage){
            let result = await this.getArticles(num);
            console.log(result);
            if(result.status === 'ok'){
              this.setState({
                articles: result.articles.filter((elem)=>elem.title!='[Removed]' && elem.urlToImage!=null),
                loading:false,
                currentPage:num,
                totalPage: Math.ceil(result.totalResults/100)
              });
            }else{
              //TODO Show error
            }
          }
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
            <Center>
            <PageTabs totalPages={this.state.totalPage} activeIndex={this.state.currentPage} onTabClick={onPageChange}/>
          
            </Center>
            </Stack>
        }
      </>
    )
  }
}
