import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap';

export default class PageTabs extends Component {

    constructor(){
        super();
        this.state = {
            startIndex : 0
        }
    }

  render() {
    let {totalPages, activeIndex , onTabClick} = this.props;

    // Needs to be sliced
    let items = []; 
    for (let number = 1; number <= totalPages; number++) { 
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === activeIndex} 
          onClick={()=>onTabClick(number)}>
          {number}
        </Pagination.Item>
      );
    }

    
    let endIndex =  items.length - this.state.startIndex > 10 ? this.state.startIndex + 10 : items.length ;

    let tabsToShow = items.slice(this.state.startIndex , endIndex );
    console.log('start : ',this.state.startIndex, ', end : ',endIndex);
    console.log('length : ',items.length, ', totpage : ',totalPages);
    const previous = ()=>{
      let current = this.state.startIndex;
      if(current!==0)
        this.setState({startIndex : current - 10})
    }

    const next = ()=>{
      if(items.length - this.state.startIndex > 10)
        this.setState({startIndex : this.state.startIndex+10})
    }

    return (
    <Pagination>
        {
          this.state.startIndex!==0 ?
            <><Pagination.First onClick={()=>{
              this.setState({startIndex : 0});
            }
              }/>
            <Pagination.Prev onClick={previous}/>
            <Pagination.Ellipsis /></>
          : <></>
        }
        
        {tabsToShow}

        { 
            endIndex != items.length ? 
            <>
              <Pagination.Ellipsis />
              <Pagination.Next onClick={next}/>
              <Pagination.Last onClick={()=>{ 
                  this.setState({startIndex : 
                    items.length%10===0 ? totalPages - 10 : totalPages - (totalPages%10)
                  }) 
                }}/>
            </>:<></>

        }
        
    </Pagination>
    )
  }
}
