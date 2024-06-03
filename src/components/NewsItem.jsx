import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card m-2">
                <img src="https://www.hindustantimes.com/ht-img/img/2024/06/02/550x309/GPE7tN9WcAIfPFL_1717344224524_1717344254612.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className='link-info link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Visit full site </a>
                </div>
            </div>
        </div>
        
    )
  }
}
