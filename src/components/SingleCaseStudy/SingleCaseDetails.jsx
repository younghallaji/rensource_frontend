import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroImage from './HeroImage'

const SingleCaseDetails = ({ challengeContent, solutionContent, practicalContent, image}) => {
  return (
    <div className='row'>
        <div className='case-details'>
        
        <Container className='hero-image' ><HeroImage image={image} />
            <Row>
                <Col className='solution-wrapper'>
                
            <div className="challenge">Project Overview:</div>
            {/* <div className="challenge-title">{challengeTitle}</div> */}
            <div className="challenge-content">{challengeContent}</div>
            
            <div className="solution">Technical Information: </div>
            {/* <div className="solution-title">{solutionTitle}</div> */}
            <div className="solution-content">{solutionContent}</div>
                
                
            <div className="solution">Practical Benefits: </div>
            {/* <div className="solution-title">{solutionTitle}</div> */}
            <div className="solution-content">{practicalContent}</div>
                </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}

export default SingleCaseDetails