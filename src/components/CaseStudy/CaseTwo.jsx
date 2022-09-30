import React from 'react'
import { Row, Col } from 'react-bootstrap';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './casestudy.css';

const CaseTwo = ({title, desc, image, id, projOverview}) => {
  return (
    <Row className='casetwo-wrapper'>
        <Col lg={5} className='caseTwo-content caseOne-content'>
        <div className="title">{title}</div>
            <div className="content">{desc}</div>
            <div> 
              {
                (projOverview === null) ? <></>
                :
                <Link className='link-button' to={'/project/'+id}> 
                    Learn more
                    <img src={images.arrow} alt="resource-arrow" />
                </Link>
              }
                 
            </div>
        </Col>
        <Col xs={{order:'first'}} lg={7} className='caseOne-img'>
          <img src={image} alt="projectImage" />
        </Col>
    </Row>
  )
}

export default CaseTwo