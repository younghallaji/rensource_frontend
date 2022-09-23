import React from 'react';
import { Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const Card = ({number, title, content}) => {
  return (
    <Col lg={3} md={6} sm={12} className="achievement-card">
        <center>
          
            <h2><CountUp end={number} duration={5} />{title}</h2>
            <p>{content}</p>
        </center>
    </Col>
  )
}

export default Card