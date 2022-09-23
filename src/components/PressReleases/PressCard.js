import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
// import parse from 'html-react-parser'
// const PressCard = ({title, content, date, image}) => {
  const PressCard = ({pressRelease, image}) => {
    var truncate = function(str){
      return str.length > 50 ? str.substring(0,250) + '...' : str
    }
    
  return (
    pressRelease.map( (press, index) =>  
                      
                      (<Col lg={4} md={6} sm={12} className='press-col'>
                        <Card className='press-card'>
                            <Card.Img variant="top" src={require('../../assets/Press Release/Picture '+press.id+'.png')} />
                            <Card.Body>
                                <p className='press-date'>{press.date}</p>
                                <Link to={'/news/'+press.id}> <Card.Title className='press-title'>{press.title}</Card.Title> </Link> 
                                <Card.Text className='press-content' dangerouslySetInnerHTML={{ __html: truncate(press.content) }}>
                                
                                </Card.Text>
                                <Link className='read-more' to={'/news/'+press.id} variant="primary">Read More</Link>
                            </Card.Body>
                            </Card>
                        </Col> )
                    )
    
  )
}

export default PressCard