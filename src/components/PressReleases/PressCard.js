import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
  const PressCard = ({pressRelease}) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    console.log()
    var truncate = function(str){
      return str.length > 50 ? str.substring(0,250) + '...' : str
    }
    
  return (
    pressRelease.map( (press, index) =>  
                      

                      (<Col key={index} lg={4} md={6} sm={12} className='press-col'>
                        <Card className='press-card'>
                            <Card.Img variant="top" src={press.image} />
                            <Card.Body>
                                <p className='press-date'>
                                  <span>{press.dateCreated.split("T")[0].split("-")[2]} </span>
                                  <span>{months[press.dateCreated.split("T")[0].split("-")[1]-1]}, </span>
                                  <span>{press.dateCreated.split("T")[0].split("-")[0]} </span>
                                  </p> 
                                <Link to={'/news/'+encodeURIComponent(press.title)}> <Card.Title className='press-title'>{press.title}</Card.Title> </Link> 
                                <Card.Text className='press-content' dangerouslySetInnerHTML={{ __html: truncate(press.content) }}>
                                
                                </Card.Text>
                                <Link className='read-more' to={'/news/'+encodeURIComponent(press.title)} variant="primary">Read More</Link>
                            </Card.Body>
                            </Card>
                        </Col> )
                    )
    
  )
}

export default PressCard