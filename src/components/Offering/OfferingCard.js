import React from 'react'
import { Col } from 'react-bootstrap'

const OfferingCard = ({title, content}) => {
    return (
        <Col lg='4' md='6' sm='12'>
            <center>
              <div className="why-title">{title}</div>
              <div className="why-content">{content}</div>
            </center>
        </Col>
      )
}

export default OfferingCard