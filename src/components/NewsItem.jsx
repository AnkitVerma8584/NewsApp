import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Ellipsis } from 'react-bootstrap/esm/PageItem';
import LinesEllipsis from 'react-lines-ellipsis';

export default class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor(){
    super();
  }

  render() {
    let {title , description ,image , url } = this.props;

    function renderTooltip(props) {
      let message = '';
    
      if (props.popper.state) {
        message = props.popper.state.options.text;
      }
      return(
      <Tooltip id="description-tooltip" {...props}>
        {message}
      </Tooltip>);
    };

    return (
            <Card className="m-2">
              <Card.Img variant="top" src={image}/>
              <Card.Body>
                <Card.Title>
                  <LinesEllipsis text={title} maxLine={2} ellipsis='...' basedOn='letters' trimRight/>
                </Card.Title>
                <Card.Text>
                  <OverlayTrigger 
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  popperConfig={{text:description}}
                  overlay={renderTooltip}>
                    <LinesEllipsis text={description} maxLine={2} ellipsis='...' basedOn='letters' trimRight/>
                  </OverlayTrigger>
                 
                </Card.Text>
                <Card.Link href={url} target='_blank' className='link-info link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-100-hover'>Read More</Card.Link>
              </Card.Body>
            </Card>
    );
  }
}
