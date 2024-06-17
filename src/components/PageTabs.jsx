import React, { Component } from 'react'

export default class PageTabs extends Component {

    constructor(){
        this.state = {
            startIndex : 1 
        }
    }

  render() {
    let {totalResults, currentIndex , onTabClick} = this.props;
    let totalPages = totalResults/100;

    // Needs to be sliced
    let items = []; 
    for (let number = 1; number <= totalPages; number++) { 
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === currentIndex} 
          onClick={onTabClick}>
          {number}
        </Pagination.Item>
      );
    }

    let tabsToShow = items.slice(this.state.startIndex , this.state.startIndex+10);

    return (
    <Pagination>
        <Pagination.First onClick={()=>{ this.setState({startIndex : 1}) }}/>
        <Pagination.Prev onClick={()=>{ this.setState({startIndex : this.state.startIndex-10}) }}/>
        
        <Pagination.Ellipsis />
        <Pagination.Item>{tabsToShow}</Pagination.Item>
        <Pagination.Ellipsis />
        
        <Pagination.Next onClick={()=>{ this.setState({startIndex : this.state.startIndex+10}) }}/>
        <Pagination.Last onClick={()=>{ this.setState({startIndex : totalPages-10}) }}/>
    </Pagination>
    )
  }
}
