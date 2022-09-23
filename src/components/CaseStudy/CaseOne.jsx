import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './casestudy.css';


const caseOne = () => {
  return (
    <Row className='case-wrapper'>
        <Col lg={5} sm={12} className='caseOne-content'>
            <div className="title">700kWp Solar-Powered PV Plant at Premium Poultry Farms, Kuje, Abuja.</div>
            <div className="content">Learn how Rensource Energy helped Premium Poultry Farm enhance its production effort and provide visibility on its energy consumption & cost of energy. </div>
            <div>
                <Link className='link-button' to={'/case-one-details'}> 
                    Learn more
                    <img src={images.arrow} alt="resource-arrow" />
                </Link> 
            </div>
        </Col>
        <Col  lg={7} sm={12} className='caseTwo-img'>
            
        </Col>

    </Row>
  )
}

export default caseOne