import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './casestudy.css';


const caseOne = ({title, desc, image, id}) => {
  return (
    <Row className='case-wrapper'>
        <Col lg={5} sm={12} className='caseOne-content'>
            <div className="title">{title}</div>
            <div className="content">{desc}</div>
            <div>
                <Link className='link-button' to={'/project/'+id}> 
                    Learn more
                    <img src={images.arrow} alt="resource-arrow" />
                </Link> 
            </div>
        </Col>
        <Col  lg={7} sm={12} className='caseTwo-img'>
            <img src={image} alt="projectImage" />
        </Col>

    </Row>
  )
}

export default caseOne