import React from 'react'
import { Row, Col } from 'react-bootstrap';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './casestudy.css';

const CaseTwo = () => {
  return (
    <Row className='casetwo-wrapper'>
        <Col lg={5} className='caseTwo-content caseOne-content'>
            <div className="title">120kWp Solar PV Installation at Valentine Chicken, Kwara State.</div>
            <div className="content">Learn how one of the big players in the poultry industry increased its power reliability and savings on diesel.  </div>
            <div>
                <Link className='link-button' to={'/case-two-details'}> 
                    Learn more
                    <img src={images.arrow} alt="resource-arrow" />
                </Link> 
            </div>
        </Col>
        <Col xs={{order:'first'}} lg={7} className='caseOne-img'>

        </Col>
    </Row>
  )
}

export default CaseTwo