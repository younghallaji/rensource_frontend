import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import parse from 'html-react-parser'
const PressCard = ({title, content, date, image}) => {
  
    
  return (
        <Col lg={4} md={6} sm={12} className='press-col'>
        <Card className='press-card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <p className='press-date'>{date}</p>
                <Link to={'/news/1'}> <Card.Title className='press-title'>{title}</Card.Title> </Link> 
                <Card.Text className='press-content' dangerouslySetInnerHTML={{ __html: content }}>
                
                </Card.Text>
                <Link className='read-more' to={'/blog'} variant="primary">Read More</Link>
            </Card.Body>
            </Card>
        </Col> 
    )
    
  
}

export default PressCard