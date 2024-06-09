import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  constructor(){
    super();
  }

  render() {
    let {title , description ,image , url } = this.props;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card m-2">
                <img src={image} className="card-img-top" alt={title}/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className='link-info link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Read More</a>
                </div>
            </div>
        </div>
        
    )
  }
}
