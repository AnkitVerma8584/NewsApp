import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Col } from 'react-bootstrap';

export default class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor(){
    super();
  }

  render() {
    let {title , description ,image , url } = this.props;
    return (
            <Card className="m-2">
              <Card.Img variant="top" src={image}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={url} target='_blank' className='link-info link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Read More</Card.Link>
              </Card.Body>
            </Card>
    );
  }
}
