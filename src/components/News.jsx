import React, { Component } from 'react'
import NewsItem from '../components/NewsItem';

export default class News extends Component {
  
  constructor(){
    super();
    this.state = {articles:[]};
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2555409d03f842ce97b30b47e530400e";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
  }

  render() {
    return (
        <div className='row'>  
            {this.state.articles.map((elem)=>{
              return <NewsItem title={elem.title} description={elem.description} url={elem.url} image={elem.urlToImage}/>
            })}         
        </div>
    )
  }
}
